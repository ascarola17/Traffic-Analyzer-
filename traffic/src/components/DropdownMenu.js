// src/components/DropdownMenu.js
import React from 'react';

function DropdownMenu({ title, children }) {
    return (
        <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle">
                {title}
            </button>
            <ul className="dropdown-menu">
                {children}
            </ul>
        </li>
    );
}

export default DropdownMenu;
