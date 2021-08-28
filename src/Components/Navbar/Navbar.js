import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav">
  <div className="container-fluid">
    <a className="navbar-brand ms-5" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="justify-content-end me-5" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link active me-5" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active me-5" aria-current="page" to="/user">User</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active me-5" aria-current="page" to='/Login'>Login</Link>
        </li>
    
       
      </ul>
    </div>
  </div>
</nav>
   
    );
};

export default Navbar;