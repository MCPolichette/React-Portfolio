import React from "react";

import "./Navbar.css";

const Navbar = props => (
  <button
    {...props}
    className="btn btn-xl btn-primary"
    onClick={() => props.iconChange(props.iconType)}
  >
    {props.children}
  </button>
);
export default Navbar;
