import { Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <header className="fixed-top px-5 py-1">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <img src="./Logo_HorizontalTextoEscuro_Transparente.png" className="navbar__logo" alt="Logo Check Saúde Mental" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 d-flex align-items-sm-center navbar">
            <Nav.Link href="#about" className="link">
              Sobre
            </Nav.Link>
            <Nav.Link href="#experiences" className="link">
              Parceiros
            </Nav.Link>
            <Nav.Link href="#projects" className="link">
              Produtos
            </Nav.Link>
            <Nav.Link href="#contact" className="link">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
