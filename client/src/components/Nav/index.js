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
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <a href="http://www.aaronrosenblattphoto.com" target="_blank">
      <img
          src="/images/ar.jpg" height="75px" width="190px"
        /></a>
      <h1>
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop */}
        </Link>
      </h1>

      <nav>
        {showNavigation()}
        <div>
          <img
          src="/Users/aaronr/Desktop/aaronrosenblattphoto-shop/client/src/components/Nav/ar.jpg"
          alt=""
        /></div>
      </nav>
    </header>
  );
}

export default Nav;