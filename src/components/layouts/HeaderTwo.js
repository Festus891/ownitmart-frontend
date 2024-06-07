import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Search from "./Search";

const HeaderTwo = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light shadow d-flex flex-row">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 d-flex justify-content-center w-100 header-color">
            <li className="nav-item  active">
              <Link className="nav-link " to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/service">
                Our service
              </Link>
            </li>
          </ul>
        </div>
        <div className=" container-fluid mt-2  d-md-none d-flex justify-content-between w-100 mr-auto  ">
          <Search />
        </div>
      </nav>
    </Fragment>
  );
};

export default HeaderTwo;
