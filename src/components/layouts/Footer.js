import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="pt-4 ">
        <div className="footer-list d-flex flex-md-row flex-column align-items-start  justify-content-around p-2 pl-sm-2">
          <div className="logo_subscribe_form ">
            <Link to="/">
              <img
                src="/images/ownit_logo.png"
                alt="ownit logo"
                style={{ width: "20rem" }}
              />
            </Link>
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-auto">
                  subcribe to our newsletter to get updates on our latest
                  offers!
                  <form className="d-flex">
                    <input
                      type="email"
                      class="form-control me-2"
                      placeholder="Enter your E-mail address"
                    />
                    <button
                      type="submit"
                      className="btn"
                      style={{ backgroundColor: "#fa9c23", color: "#fff" }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-quick">
            <h3 className="links-heading">Quick Links</h3>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/service">
                  Our service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Report a product
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="links-heading">Account</h3>
            <ul className="navbar-nav footer_list">
              <li className="nav-item  active">
                <Link className="nav-link " to="/login">
                  My Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login / Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/password/forgot">
                  Forgot Password
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/cart">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div className=" ">
            <h3 className="links-heading">More Links</h3>
            <ul className="navbar-nav">
              <li className="nav-item  active">
                <Link className="nav-link " to="/contact">
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Terms and Conditions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Customer Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center  mt-2 mb-0 ">
          © OwnitMart Online shopping- All Rights Reserved. Design by Aderibigbe
          Festus
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
