import { forwardRef } from "react";
import { Dropdown } from "react-bootstrap";
import { useAuth } from "../../../context/useAuth";
import { Link } from "react-router-dom";

const CustomToggle = ({ children, ...props }, ref) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" ref={ref} {...props} className="custom-drop">
      {" "}
      {children}
    </a>
  );
};

const CustomToggleRef = forwardRef(CustomToggle);

export function Menu({ name, lastname }) {
  const { deslogar, loggedUser } = useAuth();
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggleRef}>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <span className="avatar">
            {name[0]}
            {lastname[0]}
          </span>
          <div>
            <p className="m-0">Olá,</p>
            <p className="m-0 text-primary fw-bold">
              {name} {lastname}
            </p>
          </div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Link to="/perfil" className="noUnderline">
          <Dropdown.Item as="button">Editar Perfil</Dropdown.Item>
        </Link>
        <Link to="/minhas-reservas" className="noUnderline">
          <Dropdown.Item as="button">Minhas Reservas</Dropdown.Item>
        </Link>
        {/* {loggedUser && loggedUser.rolle.includes("adm") && (
          <Link to="/meus-produtos" className="noUnderline">
            <Dropdown.Item as="button">Meus Produtos</Dropdown.Item>
          </Link>
        )} */}
        {loggedUser && loggedUser.rolle.includes("adm") && (
          <Link to="/criacao-produto" className="noUnderline">
            <Dropdown.Item as="button">Meus Produtos</Dropdown.Item>
          </Link>
        )}

        <Dropdown.Item as="button" onClick={deslogar}>
          Sair
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
