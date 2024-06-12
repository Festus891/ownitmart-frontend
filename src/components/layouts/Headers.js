import React, { Fragment } from "react";
import Search from "./Search";
import "../../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userAction";

const Headers = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };
  return (
    <Fragment>
      <nav className="d-flex justify-content-around align-items-center ">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="/images/ownit_logo.png"
              alt="ownit logo"
              style={{ width: "10rem" }}
            />
          </Link>
        </div>

        <div className="mt-2  d-none d-lg-block w-50">
          <Search />
        </div>

        <div className=" nav-profile mt-6 pt-2 d-flex align-items-center justify-content-around flex-row-reverse">
          <Link
            to="/cart"
            style={{ textDecoration: "none" }}
            className="d-flex"
          >
            <i
              className="fas fa-shopping-cart pt-1"
              style={{ color: "black" }}
            ></i>
            <span id="cart" className="ml-2 d-none d-lg-block">
              Cart
            </span>
            <span className="ml-1 " id="cart_count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className=" dropdown  d-flex align-items-center justify-content-between ">
              <Link
                to="#!"
                className="btn text-black mr-4 d-flex align-items-center"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontWeight: "bold" }}
              >
                <figure className="avatar avatar.nav d-flex align-items-center">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span
                  className="ml-2 d-none d-lg-block"
                  style={{ fontWeight: "bold" }}
                >
                  {user && user.name}
                </span>
                <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link
                    className="dropdown-item"
                    to="/dashboard"
                    style={{ fontWeight: "bold" }}
                  >
                    Dashboard
                  </Link>
                )}
                <Link
                  className="dropdown-item"
                  to="/orders/me"
                  style={{ fontWeight: "bold" }}
                >
                  My Orders
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  to="/me"
                  style={{ fontWeight: "bold" }}
                >
                  Profile
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                  style={{ fontWeight: "bold" }}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Fragment>
                <div className="dropdown show">
                  <Link
                    className="btn  dropdown  d-flex align-items-center justify-content-between "
                    Link="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i
                      className="fas fa-user pt-1  "
                      style={{ color: "black" }}
                    ></i>
                    <span
                      id="cart"
                      className="ml-2 d-none d-lg-block"
                      style={{ fontWeight: "bold" }}
                    >
                      Account
                    </span>
                    <i className="fa fa-angle-down ml-2" aria-hidden="true"></i>
                  </Link>

                  <div
                    className="dropdown-menu dropdown-menu-righ"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <Link
                      className="dropdown-item"
                      to="#"
                      style={{ fontWeight: "bold" }}
                    >
                      <i className="fas fa-user pt-1"></i>
                      <span id="cart" className="ml-2">
                        My Account
                      </span>
                    </Link>
                    <Link
                      to="/cart"
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                      className=" dropdown-item d-flex"
                    >
                      <i
                        class="fas fa-heart pt-1"
                        style={{ color: "black" }}
                      ></i>
                      <span id="cart" className="ml-2">
                        Wishlist
                      </span>
                    </Link>
                    <Link
                      to="/cart"
                      style={{ textDecoration: "none", fontWeight: "bold" }}
                      className=" dropdown-item d-flex"
                    >
                      <i class="fas fa-box"></i>
                      <span id="cart" className="ml-2 ">
                        Orders
                      </span>
                    </Link>
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        background: "#f38f0b",
                        margin: "6px",
                        borderRadius: "8px",
                        width: "10rem",
                        fontWeight: "bold",
                      }}
                      className=" dropdown-item d-flex shadow "
                    >
                      <button
                        type="button"
                        className="btn"
                        style={{ fontWeight: "bold", color: "#fff" }}
                      >
                        SIGN IN
                      </button>
                    </Link>
                    <Link
                      to="/register"
                      style={{
                        textDecoration: "none",
                        background: "#f38f0b",
                        margin: "6px",
                        borderRadius: "8px",
                        width: "10rem",
                        fontWeight: "bold",
                      }}
                      className=" dropdown-item d-flex shadow "
                    >
                      <button
                        type="button"
                        className="btn"
                        style={{ fontWeight: "bold", color: "#fff" }}
                      >
                        REGISTER
                      </button>
                    </Link>
                  </div>
                </div>
                <Link to="/login" className="" id="login_btn"></Link>
              </Fragment>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Headers;
