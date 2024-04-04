import React from 'react';
import { Outlet, Link } from "react-router-dom";
import '../App.css';
const Navbar = () => {
    //function for / redirecting
    return (
      <div className='menu'>
        
          <ul>
            <li className="menu-item" key="home-button">
                <Link to="/">
                🏠 Dashboard
                </Link>
            </li>
            <li className="menu-item" >
                <Link to="/">
                    🔍 Search
                </Link>
            </li>
            <li className="menu-item" >
                <Link to="/">
                    ℹ️ About
                </Link>
            </li>
          </ul>
        
        <Outlet />
      </div>
    );
  };
export default Navbar;