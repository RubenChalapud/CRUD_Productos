import React from 'react';

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary row">
                <a className="navbar-brand col-11">Market</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" href="/">Salir</a>
                    </li>
                </ul>
            </nav>    
        </div>
    );
  }
  
  export default Nav;