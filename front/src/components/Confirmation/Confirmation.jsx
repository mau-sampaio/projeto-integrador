import { Button } from "react-bootstrap";
import { ContainerCenter } from "../ContainerCenter";
import sucesso from "../../assets/sucesso.png";

export function Confirmation({ text, title, btn }) {
  return (
    <ContainerCenter>
      <div className="rounded p-4 bg-white shadow align-self-center text-center button-sucesso ">
        <img src={sucesso} alt="sucesso" className="pb-4" />
        {title && <h1 className="fw-bold text-primary">{title}</h1>}
        <p className="fw-bold pb-4">
          {text ? text : "Sua reserva foi feita com sucesso"}
        </p>
        <Button as="a" href="/">
          {btn ? btn : "Ok"}
        </Button>
      </div>
    </ContainerCenter>
  );
}
