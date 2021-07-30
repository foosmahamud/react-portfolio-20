import React from "react";
import {Link} from "react-router-dom";

function Nav() {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="navbar-brand" to="/contact">
        Contact
      </Link>
      <Link className="navbar-brand" to="/portfolio">
        Portfolio
      </Link>
    </nav>
    </div>
  );
}

export default Nav;
