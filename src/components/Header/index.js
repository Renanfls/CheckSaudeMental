import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-4 px-md-5 py-5">
      <Navbar expand="lg">
        <Container fluid className="navbar">
          <Link to="/" className="navbar__link">
            <img
              src="./assets/logo.png"
              alt="Logo Check Saúde Mental"
              className="navbar__logo position-absolute"
            />
          </Link>
          <Nav className="mx-auto d-none gap-2 d-lg-flex">
            <Nav.Link href="/" className="navbar__link">
              Início
            </Nav.Link>
            <Nav.Link href="/#sobre" className="navbar__link">
              Sobre
            </Nav.Link>
            <Nav.Link href="/#produtos" className="navbar__link">
              Produtos
            </Nav.Link>
            <Nav.Link href="/#parceiros" className="navbar__link">
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
