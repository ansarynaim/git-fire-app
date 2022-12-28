import React, { useState, useContext } from "react";
import { FaReact } from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="danger" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-warning">
          <FaReact />
          GitFire App
          <FaReact />
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink
                tag={Link}
                to="/"
                onClick={() => {
                  context.setUser(null);
                }}
                className="text-warning fw-bold text-uppercase"
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/signup"
                  className="text-warning fw-bold text-uppercase"
                >
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/signin"
                  className="text-warning fw-bold text-uppercase"
                >
                  Signin
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
