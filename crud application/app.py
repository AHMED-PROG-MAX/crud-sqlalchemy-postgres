from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
app.secret_key = "your_secret_key"

# Configure PostgreSQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@localhost:5432/students'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Department(db.Model):
    __tablename__ = 'department'
    department_id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(50), nullable=False)
    students = db.relationship('Student', backref='department', lazy=True)

class Student(db.Model):
    __tablename__ = 'student'
    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(50), nullable=False)
    lname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    department_id = db.Column(db.Integer, db.ForeignKey('department.department_id'), nullable=True)

# Create the database and tables inside an application context
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

@app.route('/add_student', methods=['GET', 'POST'])
def add_student():
    if request.method == 'POST':
        try:
            fname = request.form['fname']
            lname = request.form['lname']
            email = request.form['email']
            department_id = request.form['department_id']

            # Validate if email already exists
            existing_student = Student.query.filter_by(email=email).first()
            if existing_student:
                flash('Email already exists!', 'danger')
                return redirect(url_for('add_student'))

            # Add new student to the database
            new_student = Student(fname=fname, lname=lname, email=email, department_id=department_id)
            db.session.add(new_student)
            db.session.commit()
            flash('Student added successfully!', 'success')
            return redirect(url_for('index'))
        
        except Exception as e:
            print(f"Error in add_student route: {e}")
            flash('An error occurred while adding the student.', 'danger')
            return redirect(url_for('add_student'))

    # Fetch all Departments From Dropdown
    try:
        departments = Department.query.all()
    except Exception as e:
        print(f"Error fetching departments: {e}")
        flash('An error occurred while fetching departments.', 'danger')
        return redirect(url_for('index'))

    return render_template('add_student.html', departments=departments)


@app.route('/edit_student/<int:student_id>', methods=['GET', 'POST'])
def edit_student(student_id):
    student = Student.query.get_or_404(student_id)
    if request.method == 'POST':
        student.fname = request.form['fname']
        student.lname = request.form['lname']
        student.email = request.form['email']
        student.department_id = request.form['department_id']
        db.session.commit()
        flash('Student updated successfully!', 'success')
        return redirect(url_for('index'))

    # Fetching all Departments from Dropdown
    departments = Department.query.all()
    return render_template('edit_student.html', student=student, departments=departments)

@app.route('/delete_student/<int:student_id>')
def delete_student(student_id):
    student = Student.query.get_or_404(student_id)
    db.session.delete(student)
    db.session.commit()
    flash('Student deleted successfully!', 'success')
    return redirect(url_for('index'))

@app.route('/departments')
def departments():
    try:
        # Fetching all departments from database
        all_departments = Department.query.all()
        return render_template('departments.html', all_departments=all_departments)
    except Exception as e:
        print(f"Error in departments route: {e}")
        return "Internal Server Error", 500

@app.route('/add_department', methods=['GET', 'POST'])
def add_department():
    if request.method == 'POST':
        department_name = request.form['department_name']

        # Check If Department Already Exists
        existing_department = Department.query.filter_by(department_name=department_name).first()
        if existing_department:
            flash('Department already exists!', 'danger')
            return redirect(url_for('departments'))
        
        # Add new department to the database
        new_department = Department(department_name=department_name)
        db.session.add(new_department)
        db.session.commit()
        flash('Department Successfully Added!', 'success')
        return redirect(url_for('departments'))
    
    return render_template('add_department.html')

@app.route('/edit_department/<int:department_id>', methods=['GET', 'POST'])
def edit_department(department_id):
    department = Department.query.get_or_404(department_id)
    
    if request.method == 'POST':
        department_name = request.form['department_name']
        department.department_name = department_name
        db.session.commit()
        flash('Department Updated Successfully!', 'success')
        return redirect(url_for('departments'))
    
    return render_template('edit_department.html', department=department)

@app.route('/delete_department/<int:department_id>')
def delete_department(department_id):
    department = Department.query.get_or_404(department_id)
    db.session.delete(department)
    db.session.commit()
    flash('Department deleted successfully!', 'success')
    return redirect(url_for('departments'))

if __name__ == '__main__':
    app.run(debug=True)
