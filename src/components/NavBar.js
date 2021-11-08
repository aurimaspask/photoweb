import React from 'react';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import { SocialIcon } from 'react-social-icons';
import { Nav, Navbar } from 'react-bootstrap';
import {  Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="header-loaded">
          <div className="logo d-none d-lg-block">
            <Link to="/" exact>
            <img src={logo2} class="img-fluid" alt='logo' />
            </Link>
          </div>
          <div class="container-sm-fluid">
            <Navbar className="navbar" bg="light" variant="light" expand="sm" collapseOnSelect>
              <Navbar.Toggle />
              <Navbar.Collapse> 
                <Nav className="me-auto">
                  <Nav.Link href="/" exact>Work</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Brand>
                <Link to="/" exact>
                <img src={logo3} className="logo-small" alt='logo' />
                </Link>
              </Navbar.Brand> 
            </Navbar>
          </div>
          <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon 
              url="https://www.instagram.com/aurimaspaskphoto/" 
              className="mx-4" 
              target="_blank" 
              fgColor="#fff" 
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon 
              url="https://www.facebook.com/aurimaspaskphotography" 
              className="mx-4" 
              target="_blank" 
              fgColor="#fff" 
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon 
              url="https://www.linkedin.com/in/aurimas-paskevicius-a5987b156/" 
              className="mx-4" 
              target="_blank" 
              fgColor="#fff" 
              style={{ height: 35, width: 35 }}
            />
          </div>
        </header>
    )
} 