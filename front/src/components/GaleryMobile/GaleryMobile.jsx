import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function GaleryMobile({ imagens }) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      <Carousel onSelect={(eventKey) => setActiveIndex(eventKey + 1)}>
        {imagens.map((img, i) => {
          return (
            <Carousel.Item key={i} interval={3000}>
              <img src={img} className="img-fluid rounded-2" alt="" />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className="overlay">
        {activeIndex}/{imagens.length}
      </div>
    </>
  );
}
