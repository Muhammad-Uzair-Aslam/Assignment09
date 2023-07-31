import Button from "../button/Button";
import logo from '../../assets/imgs/logo.png'
function Header()
{
    return(
        <div id="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width="40px" alt="" />
            <span className="fw-bold m-2">TROPIKO</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active me-lg-5" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="#fruits">
                  Fruits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="#contact">
                  Contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="#">
                  <i className="bi bi-search"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-lg-5" href="#">
                <Button title="Get a Quote" backgroundcolor="orangered" color="black"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;