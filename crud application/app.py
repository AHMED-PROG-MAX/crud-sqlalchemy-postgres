from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
app.secret_key = "your_secret_key"

# Configure PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@localhost:5432/students'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define the Student model
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(100), nullable=False)
    lname = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

# Create the database and tables
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    try:
        # Get sorting parameter from query string, default to 'fname'
        sort_by = request.args.get('sort', 'fname')
        if sort_by not in ['id', 'fname', 'lname']:
            sort_by = 'fname'

        # Use SQLAlchemy's text() function for raw SQL query
        query = text(f"SELECT * FROM student ORDER BY {sort_by}")
        result = db.session.execute(query)
        list_users = result.fetchall()

        return render_template('index.html', list_users=list_users, sort_by=sort_by)
    except Exception as e:
        print(f"Error in index route: {e}")
        return "Internal Server Error", 500

@app.route('/add_student', methods=['POST'])
def add_student():
    if request.method == 'POST':
        fname = request.form['fname']
        lname = request.form['lname']
        email = request.form['email']

        # Validate if email already exists
        existing_student = Student.query.filter_by(email=email).first()
        if existing_student:
            flash('Email already exists!', 'danger')
            return redirect(url_for('index'))

        # Add new student to the database
        new_student = Student(fname=fname, lname=lname, email=email)
        db.session.add(new_student)
        db.session.commit()
        flash('Student added successfully!', 'success')
        return redirect(url_for('index'))

@app.route('/edit_student/<int:student_id>', methods=['GET', 'POST'])
def edit_student(student_id):
    student = Student.query.get_or_404(student_id)
    if request.method == 'POST':
        student.fname = request.form['fname']
        student.lname = request.form['lname']
        student.email = request.form['email']
        db.session.commit()
        flash('Student updated successfully!', 'success')
        return redirect(url_for('index'))

    return render_template('edit_student.html', student=student)

@app.route('/delete_student/<int:student_id>')
def delete_student(student_id):
    student = Student.query.get_or_404(student_id)
    db.session.delete(student)
    db.session.commit()
    flash('Student deleted successfully!', 'success')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
