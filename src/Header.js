import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import Search from "./Search";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link className="navbar-brand" to="/">
          Dog App
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/search">
                Search <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact="true" component={Home} />
      <Route path="/search" component={Search} />
    </div>
  );
}

export default Header;
