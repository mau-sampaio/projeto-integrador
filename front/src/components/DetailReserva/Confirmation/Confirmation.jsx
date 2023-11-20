import { Button } from "react-bootstrap";
import { ContainerCenter } from "../../ContainerCenter";
import sucesso from "../../../assets/sucesso.png";

export function Confirmation() {
  return (
    <ContainerCenter>
      <div className="rounded p-4 bg-white shadow align-self-center text-center button-sucesso ">
        <img src={sucesso} alt="sucesso" />
        <h1 className="fw-bold text-primary">Muito obrigado!</h1>
        <p className="fw-bold">Sua reserva foi feita com sucesso</p>
        <Button as="a" href="/">
          OK
        </Button>
      </div>
    </ContainerCenter>
  );
}
