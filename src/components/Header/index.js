import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <header className="px-3 py-5 p-lg-5 m-md-5 mt-md-4">
      <Navbar expand="lg">
        <Container fluid className="navbar">
          <img
            src="./assets/logo.png"
            alt="Logo Check Saúde Mental"
            className="navbar__logo position-absolute"
          />
          <Nav className="mx-auto d-none gap-2 d-lg-flex">
            <Nav.Link href="#about" className="navbar__link">
              Sobre
            </Nav.Link>
            <Nav.Link href="#experiences" className="navbar__link">
              Parceiros
            </Nav.Link>
            <Nav.Link href="#products" className="navbar__link">
              Produtos
            </Nav.Link>
            <Nav.Link href="#contact" className="navbar__link">
              Contato
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
