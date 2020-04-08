import React, { useState } from "react";
import "./Navbar.css";
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Logo from "../../assets/inline-logo.svg";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="lg">
      <NavbarBrand href="/"><img src={Logo} alt="AA Away"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/meetings">Meetings</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/othergroups">Other Groups</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/dailyinspirations">Daily Inspirations</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>

          <NavItem>
            <Button href="/login">Login</Button>
          </NavItem>

          <NavItem>
            <Button href="/signup">Sign Up</Button>
          </NavItem>

        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
