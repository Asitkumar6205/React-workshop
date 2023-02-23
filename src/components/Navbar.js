import React from "react";
import './stylesheet.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <span className="glyphicon glyphicon-fire"></span>
              Logo
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="about-us">
                  <li>
                    <a href="#">Engage</a>
                  </li>
                  <li>
                    <a href="#">Pontificate</a>
                  </li>
                  <li>
                    <a href="#">Synergize</a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" />
              </div>
              <button type="submit" className="btn btn-default">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
