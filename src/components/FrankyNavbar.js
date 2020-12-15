import React, { useCallback } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';


const FrankyNavbar = (props) => {
    const { keycloak } = useKeycloak();

    return(
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href='#home'>Franky</Navbar.Brand>
                <Nav>
                    {/* {props.hideJeffbot || <Nav.Link href='/jeffbot'>Jeffbot Coming Soon</Nav.Link>} */}
                    <NavDropdown title='Matlab'>
                        <NavDropdown.Item href='https://uk.mathworks.com/learn/tutorials/matlab-onramp.html'>Learn the Basics</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className='ml-auto'>
                    <Nav.Link href='/files'>Shared Public Files</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )

}

export default FrankyNavbar;