import { Modal } from "react-bootstrap";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const GaleryFull = ({ imagens, open, closeModal }) => {
  const imagemGaleria = imagens.map((imagem) => {
    return {
      original: imagem,
      thumbnail: imagem,
      description: "",
    };
  });

  return (
    <div>
      <Modal show={open} onHide={closeModal} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Galeria de Fotos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Gallery items={imagemGaleria} />
        </Modal.Body>
      </Modal>
    </div>
  );
};
