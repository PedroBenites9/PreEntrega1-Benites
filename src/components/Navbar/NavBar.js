import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidGet from '../CartWidget/CartWidget';


// se implemento la libreria React-bootstrap
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#link">Tablets</Nav.Link>
                        <NavDropdown title="Más " id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Contactos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Quienes somos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Donde estamos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.5'>
                                Otro link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidGet />
            </Container>
        </Navbar>
    );
}



export default NavBar;