import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUser } from 'react-icons/fa'
import './NavbarHeader.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" className='fixed-top'>
      <Container className='container'>
        <Navbar.Brand href="/home"><Image src={'https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png'}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavDropdown title={<FaRegUser/>} id="collasible-nav-dropdown" style={{position:"absolute", right:'8%'}}>
              <NavDropdown.Item href="/">SignIn/SignUp</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;