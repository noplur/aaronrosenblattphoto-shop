import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="signlog">
          <p className="mx-1">
            <Link to="/signup">
            Signup
            </Link>
          </p>
          <p className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </p>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <a href="http://www.aaronrosenblattphoto.com" target="_blank">
      <img
          src="/images/logo.jpg" alt="logo" height="75px" width="190px"
        /></a>
      <nav>
        {showNavigation()}
        <ul className="signlog">
      <p className="mx-1">
        <Link to="/">
          <span role="img" aria-label="shopping bag">Store</span>
        </Link>
      </p>
      </ul>
      <p className="title">
        PORTFOLIOS
      </p>
      <p className="subtitle">
        DAILY LIFE
        SPORTS
      </p>
      <p className="title1">
        STORIES
      </p>
      <p className="subtitle">
        TALIYAH: WARRIOR PRINCESS
        HOLDING HIS OWN
        LEAVING MAPLE GROVE
        RICHARD SULLENTRUP
      </p>
      </nav>
    </header>
  );
}

export default Nav;