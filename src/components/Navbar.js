import React from 'react';
import { User,MessageCircleMore, Search } from 'lucide-react'; 
import Logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar({toggleSearchbar}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
     

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none", background: "none" }}
        >
          <img src={Logo}
           alt="Toggle Menu"
           style={{ height: '60px', width: '120px' }} 
           />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <p className="nav-link active" title="Home" onClick={toggleSearchbar}>
                <Search size={24}/>
              </p>
            </li>
            <li className="nav-item">
              <Link to={'/posts'}> <p className="nav-link active"  title="Home">
                Posts
              </p></Link>
            </li>
            <li className="nav-item">
              <Link to={'/mydashboard'}>
              <p className="nav-link"  title="Dashboard">
                My Dashboard
              </p></Link>
            </li>
            <li className="nav-item">
              <p className="nav-link"  title="FAQs">
                FAQs
              </p>
            </li>
            <li className="nav-item">
              <Link to='profile'  >
              <p className="nav-link"  title="Account">
                <User size={24} />
              </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/message'}>
              <p className="nav-link"  title="Message Box">
                <MessageCircleMore size={24} />
              </p>
              </Link>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
