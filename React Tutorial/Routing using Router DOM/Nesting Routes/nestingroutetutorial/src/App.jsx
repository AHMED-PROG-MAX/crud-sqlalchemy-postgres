import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// Components for different routes
function Dashboard() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar menu for settings and profile */}
        <div className="col-12 col-md-4 col-lg-3 mb-4">
          <div className="list-group">
            <Link to="settings" className="list-group-item list-group-item-action">
              <i className="bi bi-gear"></i> Settings
            </Link>
            <Link to="profile" className="list-group-item list-group-item-action">
              <i className="bi bi-person-circle"></i> Profile
            </Link>
          </div>
        </div>

        {/* Main content for settings/profile pages */}
        <div className="col-12 col-md-8 col-lg-9">
          <div className="card shadow-sm">
            <div className="card-body">
              <Routes>
                <Route path="settings" element={<Settings />} />
                <Route path="profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="alert alert-info">
      <h3>Settings Page</h3>
      <p>Manage your application settings here.</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="alert alert-success">
      <h3>Profile Page</h3>
      <p>View and edit your profile details.</p>
    </div>
  );
}

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron p-5 bg-light shadow-sm">
        <h1 className="display-4">Welcome to the Home Page!</h1>
        <p className="lead">This is a simple, clean, and modern application built using React and Bootstrap.</p>
        <hr className="my-4" />
        <p>Explore the dashboard for more features!</p>
        <Link className="btn btn-primary btn-lg" to="/dashboard" role="button">Go to Dashboard</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">MyApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      <footer className="bg-dark text-light py-3 mt-5">
        <div className="container text-center">
          <p>&copy; 2024 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
