import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand, 
  Collapse, 
  Nav,
  NavItem,
  NavbarToggler
 } from 'reactstrap';
 
const Menu = props => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  }
  return(
    <Navbar  className='container' color='dark' light expand='md'> 
     <a href="todos"><NavbarBrand className='text-white' style={{fontSize: '30px'}}>📚TodoApp</NavbarBrand></a>
      <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className='m1-auto' navbar>
          <a href="/todos"><NavItem className='text-white' style={{margin: '0 20px'}}> 
              Tarefas
            </NavItem></a>
            <a href="/about"><NavItem className='text-white' style={{margin: '0 20px'}}>
              Sobre
            </NavItem></a>
          </Nav>
        </Collapse>
  </Navbar>
)
}

export default Menu