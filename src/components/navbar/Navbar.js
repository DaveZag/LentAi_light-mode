import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Toggle } from "../toggle/Toggle";

function NavBar({ onToggleChange, isChecked }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10); // Adjust "50" based on when you want it to become fixed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Navbar
      expand="lg"
      className={`py-3 ${isScrolled ? "fixed-top shadow-sm nav-scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#Marketplace">Marketplace</Nav.Link>
            <Nav.Link href="#About" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#Developers">Developers</Nav.Link>
          </Nav>
          <Toggle onToggleChange={onToggleChange} isChecked={isChecked} />
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <Button variant="primary" className="btn-primary d-none d-lg-inline-block">
            Connect Wallet
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
