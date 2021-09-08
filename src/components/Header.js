import React from "react"

import { Navbar} from 'react-bootstrap?Navvar'
import { Nav } from 'react-bootstrap'
import Home from './Home'

import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Watering App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tree">WaterIT</Nav.Link>
              
            </Nav>
            
          </Navbar.Collapse>
    </Navbar>    

  )
}

export default Header
