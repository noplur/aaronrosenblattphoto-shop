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
    <div className="vertNav">
    <p className="arlogo">
      <a href="http://www.aaronrosenblattphoto.com" target="_blank">
      <img
          src="/images/logo.jpg" alt="logo" height="75px" width="190px"
        /></a></p>
      <p className="title">
        portfolios
      </p>
      <p className="subtitle">
        daily life
      </p>
      <p className="subtitle">
        sports
      </p>
      <p className="title">
        stories
      </p>
      <p className="subtitle">
        taliyah: warrior princess
      </p>
      <p className="subtitle">
        holding his own
      </p>
      <p className="subtitle">
        leaving maple grove
      </p>
      <p className="subtitle">
        richard sullentrup
      </p>
      <p className="title">
        multimedia
      </p>
      <p className="subtitle">
        45 years of coaching
      </p>
      <p className="subtitle">
        tuesday night music club
      </p>
      <p className="subtitle">
        refugees faith & community
      </p>
      <p className="title">
        recent work
      </p>
    
    <nav>
      {showNavigation()}
      <ul className="signlog">
    <p className="mx-1">
      <Link to="/">
        <span role="img" aria-label="shopping bag">Store</span>
      </Link>
    </p>
    </ul>
    </nav>
    </div>
    </header>
  );
}

export default Nav;