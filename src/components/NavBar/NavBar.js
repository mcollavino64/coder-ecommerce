import logo from "../img/logo.svg"
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import CartWidget from "../cartWidget/CartWidget"
import React,{useState} from 'react';

export const NavBar = () =>{
  // export class Navbar extends Component{


    return  (<Navbar bg="transparent" variant="dark" sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
      <img src={logo} width="40px" height="40px" alt="volver al Home" onClick={()=>{
        window.location="../"
      }} />      
    </Navbar.Brand>

    <Navbar.Toggle/>        
    <Navbar.Collapse>
      <Nav>
        <NavDropdown title="Products"> 
          <NavDropdown.Item href="/products/pizzas" >Pizzas</NavDropdown.Item>
          <NavDropdown.Item href="#products/coffe" >Coffe</NavDropdown.Item>
          <NavDropdown.Item href="#products/drinks" >Drinks</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="#products/promo" >Promotion</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#blog"> Blog </Nav.Link>
        <Nav.Link href="#about-us"> About Us </Nav.Link>
        <Nav.Link href="#contact-us"> Contact Us </Nav.Link>
      </Nav>
    </Navbar.Collapse>

    <CartWidget />   

  </Navbar>
    )
}