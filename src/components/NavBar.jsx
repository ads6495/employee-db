import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-sm bg-dark">
      <Link to="/">
        <li className="nav-item">
          <a>Home</a>
        </li>
      </Link>

      <Link to="/new">
        <li className="nav-item">
          <a>
            New Employee
          </a>
        </li>
      </Link>
    </nav>

  );
}

export default NavBar;
