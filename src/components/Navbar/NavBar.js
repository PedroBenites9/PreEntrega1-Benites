import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


// se implemento la libreria React-bootstrap
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href={`/`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>React-Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={`/category/celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celular</Nav.Link>
                        <Nav.Link href={`/category/tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablets</Nav.Link>
                        <Nav.Link href={`/category/notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>NoteBooks</Nav.Link>
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
                <CartWidget />
            </Container>
        </Navbar>
    );
}



export default NavBar;