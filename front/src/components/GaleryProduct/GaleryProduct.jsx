import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GaleryFull } from "../GaleryFull/GaleryFull";
import { useEffect, useState } from "react";
import { ImageSkeleton } from "../ImageSkeleton/ImageSkeleton";

export function GaleryProduct({ imagens }) {
  const [capa, img1, img2, img3, img4] = imagens;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Row className="py-4">
        <Col lg="6">
          {loading ? (
            <ImageSkeleton heigth={350} />
          ) : (
            <img src={capa} className="img-fluid rounded-2" alt="" />
          )}
        </Col>
        <Col lg="6">
          <Row className="row-gap-3">
            {[img1, img2, img3].map((imagem, i) => {
              return (
                <Col key={i} lg="6">
                  {loading && <ImageSkeleton heigth={170} />}
                  {!loading && imagem && (
                    <img src={imagem} className="img-fluid rounded-2" alt="" />
                  )}
                </Col>
              );
            })}
            <Col lg="6">
              {loading && <ImageSkeleton heigth={170} />}
              {!loading && img4 && (
                <div className="overlay-container">
                  <img src={img4} className="img-fluid rounded-2" alt="" />
                  <GaleryFull
                    imagens={imagens}
                    open={showModal}
                    closeModal={handleClose}
                  />
                  <Link onClick={() => setShowModal(true)}>
                    <div className="overlay rounded">Ver mais fotos</div>
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
