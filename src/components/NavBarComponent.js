import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Minha Aplicação</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ativ1">Exercício 1</Nav.Link>
            <Nav.Link href="/ativ2">Exercício 2</Nav.Link>
            <Nav.Link href="/ativ3">Exercício 3</Nav.Link>
            <Nav.Link href="/ativ4">Exercício 4</Nav.Link>
            <Nav.Link href="/ativ5">Exercício 5</Nav.Link>

  
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;