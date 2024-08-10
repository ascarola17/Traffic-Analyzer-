// src/components/NavItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ text, link }) {
    return (
        <li className="nav-item">
            <Link to={link} className="nav-link">
                {text}
            </Link>
        </li>
    );
}

export default NavItem;
