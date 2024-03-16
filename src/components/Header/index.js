import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <header className="px-4 px-md-5 py-5">
      <Navbar expand="lg">
        <Container fluid className="navbar">
          <img
            src="./assets/logo.png"
            alt="Logo Check Saúde Mental"
            className="navbar__logo position-absolute"
          />
          <Nav className="mx-auto d-none gap-2 d-lg-flex">
            <Nav.Link href="#sobre" className="navbar__link">
              Sobre
            </Nav.Link>
            <Nav.Link href="#produtos" className="navbar__link disabled">
              Produtos
            </Nav.Link>
            <Nav.Link href="#parceiros" className="navbar__link">
              Parceiros
            </Nav.Link>
            <Nav.Link href="#contato" className="navbar__link">
              Contato
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
