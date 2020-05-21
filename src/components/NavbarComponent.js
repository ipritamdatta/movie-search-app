import React from "react";
import * as rb from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <rb.Nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand text-dark font-weight-bold">
            Movie Search App
          </Link>
        </div>
      </div>
    </rb.Nav>
  );
}
export default Navbar;
