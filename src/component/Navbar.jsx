import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="logo">
              <h2>DogoHouse</h2>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/searchpage">Search</Link>
              </li>
              <li>
                <Link to="http://127.0.0.1:5500/moengage/login.html">LogIn</Link> </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
