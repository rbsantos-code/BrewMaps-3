import React from 'react';
import cheers from '../../public/images/cheers.png';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";

export default function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {/* <Link className="button is-primary" to="/signup">
                                <strong>Sign up</strong>
                            </Link> */}
                            <Link className="button is-light" to="/" onClick={() => Auth.logout()}>
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link className="button is-primary" to="/signup">
                                <strong>Sign up</strong>
                            </Link>
                            <Link className="button is-light" to="/login">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">BrewMap
                    <img alt="cheers" src={cheers} width="28" height="28"></img>
                </Link>

                <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>            

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>

                    <Link className="navbar-item" to="/social">
                        Blog
                    </Link>

                    <Link className="navbar-item" to="/user">
                        User Profile
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link className="navbar-link">
                            More
                        </Link>

                        <div className="navbar-dropdown">
                            <Link className="navbar-item" to="/about">
                                About
                            </Link>
                            <Link className="navbar-item" to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                {showNavigation()}
            </div>
        </nav>
    )
}