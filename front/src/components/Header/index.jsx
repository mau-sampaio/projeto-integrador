import { Button, Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoMD from "../../assets/logo.png";
import logoSM from "../../assets/logosm.png";
import menu from "../../assets/menu.png";
import { useState } from "react";
import style from "./header.module.scss";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const local = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(local);

  return (
    <>
      <Navbar expand="md" sticky="top" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="d-flex gap-2">
            <img
              className="d-none d-md-block"
              src={logoMD}
              alt="Digital Booking"
            />
            <img className="d-md-none" src={logoSM} alt="Digital Booking" />
          </Link>
          <button
            onClick={handleShow}
            className={`d-md-none ${style.menuButton}`}
          >
            <img src={menu} alt="menu" />
          </button>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end d-none d-md-block "
          >
            <Nav className="gap-2">
              {local.pathname !== "/cadastro" && (
                <Link to="/cadastro">
                  <Button variant="outline-primary">Criar Conta</Button>
                </Link>
              )}
              {local.pathname !== "/login" && (
                <Link to="/login">
                  <Button variant="outline-primary">Iniciar sessão</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="d-md-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="gap-2 flex-column">
            {local.pathname !== "/cadastro" && (
              <Link to="/cadastro">
                <Button variant="outline-primary">Criar Conta</Button>
              </Link>
            )}
            {local.pathname !== "/login" && (
              <Link to="/login">
                <Button variant="outline-primary">Iniciar sessão</Button>
              </Link>
            )}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
