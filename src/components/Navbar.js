import React from 'react';
import { User, MessageCircleMore, GalleryVertical, Home, Menu } from 'lucide-react';
import Logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function SidebarMenu() {
  return (
    <>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <button 
            className="btn btn-primary" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#sidebarMenu" 
            aria-controls="sidebarMenu"
          >
            <Menu size={28} />
          </button>

          <Link to="/" className="navbar-brand mx-auto">
            <img src={Logo} alt="Logo" style={{ height: '50px' }} />
          </Link>
        </div>
      </nav>

      <div 
        className="offcanvas offcanvas-start bg-light" 
        tabIndex="-1" 
        id="sidebarMenu" 
        aria-labelledby="sidebarMenuLabel"
        style={{ width: '250px' }}
      >
        <div className="offcanvas-header">
          <h5 id="sidebarMenuLabel">Menu</h5>
          <button 
            type="button" 
            className="btn-close" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column gap-3">
  <Link to="/profile" className="nav-link d-flex align-items-center">
    <img 
      src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"  
      alt="Profile" 
      className="rounded-circle me-2" 
      style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
    />
  </Link>


          <Link to="/posts" className="nav-link">
            <GalleryVertical size={24} /> Posts
          </Link>
          <Link to="/mydashboard" className="nav-link">
            <User size={24} /> My Dashboard
          </Link>
          <Link to="/message" className="nav-link">
            <MessageCircleMore size={24} /> Messages
          </Link>
          <Link to="/faqs" className="nav-link">
            FAQs
          </Link>
        </div>
      </div>
    </>
  );
}
