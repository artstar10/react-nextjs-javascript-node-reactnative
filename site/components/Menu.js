import React, { useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

 const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!setIsOpen);
      
    return (
        <div>
          <style>
              {`.menu-custom{
                 background-color: #041370;
              }`}
          </style>
           <Navbar  className="menu-custom" dark expand="md">
             <Container>
               <NavbarBrand href="/">Arthur 🚀</NavbarBrand>
               <NavbarToggler onClick={toggle} />
               <Collapse isOpen={isOpen} navbar>
                   <Nav className="mr-auto" navbar>
                     <NavItem>
                         <NavLink href="/">Home</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/orcamento">Orçamento</NavLink>
                    </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
    );
}

export default Menu;