// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div class="navbar-nav">
//       <a class="nav-item nav-link active" href="./">Home <span class="sr-only">(current)</span></a>
//       <a class="nav-item nav-link" href="./">Contact</a>
//       <a class="nav-item nav-link" href="./">Portfolio</a>
//     </div>
//   </div>
// </nav>
//   );
// }

// export default Navbar;
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (  
        <div className={`navbar-menu`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/" exact>
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/contact"
              exact
            >
              Contact
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/portfolio"
              exact
            >
              Portfolio
            </NavLink>
          </div>
      </div>     
  );
}
}

export default Navbar;