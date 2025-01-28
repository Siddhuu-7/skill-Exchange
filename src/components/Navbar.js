import React, { useState } from 'react';
import { User, MessageCircleMore, Filter, X } from 'lucide-react';
import Logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" style={{ height: '60px', width: '120px' }} />
        </Link>

        {/* Collapse Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links - Align from right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <Link to="/faqs" className="nav-link" title="FAQs">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link" title="Account">
                <User size={24} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/message" className="nav-link" title="Message Box">
                <MessageCircleMore size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
