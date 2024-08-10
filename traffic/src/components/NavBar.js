import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Import the CSS file

function NavBar() {
    return (
        <nav className="navbar">  {/* This applies the "navbar" class */}
            <ul className="navbar-nav">  {/* This applies the "navbar-nav" class */}
                <li className="nav-item">  
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>  
                </li>
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">Settings</Link>
                </li>
                <li className="nav-item">
                    <Link to="/alerts" className="nav-link">Alerts</Link>
                </li>
                <li className="nav-item">
                    <Link to="/reports" className="nav-link">Reports</Link>
                </li>
                <li className="nav-item">
                    <Link to="/education" className="nav-link">Education</Link>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle">More</a>
                    <ul className="dropdown-menu">
                        <li><a href="#" className="nav-link">Option 1</a></li>
                        <li><a href="#" className="nav-link">Option 2</a></li>
                        <li><a href="#" className="nav-link">Option 3</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
