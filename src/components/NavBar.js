import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import CartWidget from "./CartWidget.js"

export const NavBar = () =>{
    return  (<Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
    <Navbar.Brand>
      <img src={logo} width="40px" height="40px" />
      Logo
    </Navbar.Brand>

    <Navbar.Toggle/>        
    <Navbar.Collapse>
      <Nav>
        <NavDropdown title="Products"> 
          <NavDropdown.Item href="#products/tea" >Tea</NavDropdown.Item>
          <NavDropdown.Item href="#products/coffe" >Coffe</NavDropdown.Item>
          <NavDropdown.Item href="#products/chocolate" >Chocolate</NavDropdown.Item>
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