import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import lkdin from "../../assets/lkdin.png";
import twitter from "../../assets/twitter.png";

export function Footer() {
  return (
    <div className="bg-primary py-2 text-white colorWhite">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <span>© 2023 / Digital Booking</span>
        </div>
        <Link to="/sobre" className="text-white text-decoration-none">
          Sobre a DigitalBooking.com
        </Link>
        <ul className="d-none d-sm-flex nav col-md-4 justify-content-end list-unstyled">
          <li className="ms-3">
            <a
              href="https://getbootstrap.com/docs/5.3/examples/footers/#"
              target="_blanck"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://getbootstrap.com/docs/5.3/examples/footers/#"
              target="_blanck"
            >
              <img src={lkdin} alt="Linkdin" />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://getbootstrap.com/docs/5.3/examples/footers/#"
              target="_blanck"
            >
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="ms-3">
            <a
              href="https://getbootstrap.com/docs/5.3/examples/footers/#"
              target="_blanck"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
