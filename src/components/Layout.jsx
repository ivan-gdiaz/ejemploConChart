import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import logo from "../logo.svg"

import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="secondary" dark="true" expand="lg">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 40,
            }}
          /> NombreMarca
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/chart">Gráfica</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/radar">Radar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/botones">Botones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/acordeon">Acordeon</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cards1">Ejemplo Cards 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cards2">Ejemplo Cards 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/acordeonSinLayout">Acordeon (sin Layout)</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div style={{ height: '90px' }}></div>  {/* Espacio vertical (no Reactstrap) */}

      {/* An <Outlet> renders whatever child route is currently active,
        so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
      <Outlet />
      
    </div>
  );
}
