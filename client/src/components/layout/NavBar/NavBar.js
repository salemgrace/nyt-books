import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => (
    <nav className="navbar fixed-top navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
            <h2>Google Books</h2>
        </Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link
                        to="/saved"
                        className={
                            window.location.pathname === "/saved"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Saved
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/search"
                        className={
                            window.location.pathname === "/search"
                                ? "nav-link active"
                                : "nav-link"
                        }
                    >
                        Search
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavBar;