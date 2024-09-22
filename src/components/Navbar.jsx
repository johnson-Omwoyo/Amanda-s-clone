import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row top-navbar d-none d-md-block d-md-flex align-items-center ">
        <div className="col-8 d-flex ms-5">
          <p className="mb-0">
            {" "}
            <span className="label">Phone:</span>{" "}
            <span className="value">O708258617</span>{" "}
          </p>
          <span className="vertical-line mx-2"></span>
          <p className="mb-0">
            <span className="label">Email:</span>{" "}
            <span className="value">Johnsonomwoyo100@gmail.com</span>
          </p>
        </div>
        <div className="col social-icons  d-flex">
          <i className="fa-brands fa-facebook"></i> <p className="mb-0"></p>
        </div>
      </div>
      <div className="row shadow nav-bar-row">
        <div className="col-10 d-md-flex justify-content-around">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid ">
              <a className="navbar-brand" href="#">
                <img
                  src="https://amandas.co.ke/wp-content/uploads/2023/12/Amandas-Logo.png"
                  alt=""
                />
              </a>
              <span
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </span>
              <div
                className="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <a className="navbar-brand" href="#">
                    <img
                      src="https://amandas.co.ke/wp-content/uploads/2023/12/Amandas-Logo.png"
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav flex-grow-1 mx-md-5 align-md-items-end">
                    <li className="nav-item mx-md-2">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to={"/"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mx-md-2">
                      <NavLink className="nav-link" to={"about"}>
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown mx-md-2">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Our products
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Car seat
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Stroller
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Feeding seat
                          </a>
                        </li>{" "}
                        <li>
                          <a className="dropdown-item" href="#">
                            Baby carrier
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Return and Refund Policy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item mx-md-2">
                      <NavLink className="nav-link" to={"blog"}>
                        Blog
                      </NavLink>
                    </li>
                    <li className="nav-item mx-md-2">
                      <NavLink className="nav-link" to={"contact"}>
                        Contact us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* <div className="col d-flex align-items-center"></div> */}
      </div>
    </div>
  );
}

export default Navbar;
