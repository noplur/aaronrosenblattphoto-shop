import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { RiTwitterFill } from 'react-icons/ri';
import { ImInstagram } from 'react-icons/im';

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
        <ul className="signuplogin">
          <div className="signup">
            <Link to="/signup">
              Signup
            </Link>
          </div>
          <p className="signup">
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
      <a href="http://www.aaronrosenblattphoto.com" target="_blank">
        daily life
        </a></p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/sports" target="_blank">
        sports
      </a></p>
      <p className="title">
        stories
      </p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/taliyah-warrior-princess" target="_blank">
        taliyah: warrior princess
        </a></p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/holding_his_own" target="_blank">
        holding his own
        </a></p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/leaving_maple_grove" target="_blank">
        leaving maple grove
        </a></p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/richard_sullentrup" target="_blank">
        richard sullentrup
      </a></p>
      <p className="title">
        multimedia
      </p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/pages/45-years-of-coaching" target="_blank">
        45 years of coaching
      </a></p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/pages/tuesday-night-music-club" target="_blank">
        tuesday night music club
      </a></p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/pages/regugees-faith-community" target="_blank">
        refugees faith & community
      </a></p>
      <p className="title">
        recent work
      </p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/blog" target="_blank">
        blog
      </a></p>
      <p className="subtitle">
      <a href="http://hangingatmos.blogspot.com/" target="_blank">
        archive
      </a></p>
      <p className="subtitle">
      <a href="https://www.instagram.com/aaronpix/" target="_blank">
        instagram
      </a></p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/weddings" target="_blank">
        weddings
      </a></p>
      <p className="title">
        about
      </p>
      <p className="subtitle">
      <a href="http://www.aaronrosenblattphoto.com/pages/bio" target="_blank">
        bio
      </a></p>
    <nav>
    {showNavigation()}
    <p className="subtitle">
      <Link to="/">
        Shop
      </Link>
    </p>
    </nav>
    <div className="twitter"><a href="https://twitter.com/aaronpix" target="_blank">
      <RiTwitterFill /> </a>
    </div>
    <div className="instagram"><a href="https://www.instagram.com/aaronpix/" target="_blank"><ImInstagram /> 
    </a>
    </div>
    </div>
    </header>
  );
}

export default Nav;