import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div><nav>
        <ul className="navbar">
            <li className="link">
                <Link to="/" className="link">Home</Link>
            </li>
            <li className="link">
                <Link to="/about" className="link">About</Link>
            </li>
            <li className="link">   
                <Link to="/contact" className="link">Contact</Link>
            </li>
            <li className="link">
                <Link to="/services" className="link">Services</Link>
            </li>
            <li className="list">
                <Link to="/hooks" className="link">Hooks</Link>
            </li>
            <li className="list">
                <Link to="/login" className="link">Login</Link>
            </li>
        </ul>
    </nav></div>
  )
}

export default Navbar