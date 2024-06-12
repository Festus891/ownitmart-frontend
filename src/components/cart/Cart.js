import React, { Fragment } from "react";
import MetaData from "../layouts/MetaData";
import { useAlert } from "react-alert";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartAction";
import RowMapping from "../product/RowMapping";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;

    if (newQty <= 0) return;

    dispatch(addItemToCart(id, newQty));
  };
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty >= stock) return;

    dispatch(addItemToCart(id, newQty));
  };

  const checkOutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <Fragment>
      <MetaData title={"Your Cart"} />
      <h3 className="mt-5 bold" style={{ fontWeight: "bold" }}>
        Shopping Cart
      </h3>
      {cartItems.length === 0 ? (
        <div className="container text-center  mt-5">
          <img
            src="/images/ownit.png"
            style={{ width: "4rem" }}
            alt="ownit_logo"
          />
          <h4 className="mb-3">Your cart is empty!</h4>
          <p>Browse our categories and discover our best deals!</p>
          <Link
            to="/product"
            style={{
              textDecoration: "none",
              background: "#f38f0b",
              borderRadius: "8px",
              fontWeight: "bold",
              width: "15rem",
              margin: "auto",
            }}
            className=" dropdown-item d-flex shadow "
          >
            <button
              type="button"
              className="btn"
              style={{ fontWeight: "bold", color: "#fff" }}
            >
              START SHOPPING
            </button>
          </Link>
          <RowMapping title={"Top selling items"} />
        </div>
      ) : (
        <Fragment>
          <h4 className="mt-5">
            Cart <b>({cartItems.length})</b>
          </h4>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems.map((item) => (
                <Fragment>
                  <hr />
                  <div className="cart-item" key={item.product}>
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-row justify-content-start">
                        <div className="mr-2">
                          <img
                            src={item.image}
                            alt="Laptop"
                            height="90"
                            width="115"
                          />
                        </div>
                        <div className="">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                          <p id="card_item_price">${item.price}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                          <i
                            id="delete_cart_item"
                            className="fa fa-trash btn btn-danger"
                            onClick={() => removeCartItemHandler(item.product)}
                          ></i>
                          <span>Remove</span>
                        </div>
                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                          <div className="stockCounter d-flex">
                            <span
                              className="btn minus"
                              onClick={() =>
                                decreaseQty(item.product, item.quantity)
                              }
                            >
                              -
                            </span>
                            <input
                              type="number"
                              className="form-control count d-inline"
                              value={item.quantity}
                              readOnly
                              style={{ fontWeight: "bold" }}
                            />

                            <span
                              className="btn  plus"
                              onClick={() =>
                                increaseQty(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            >
                              +
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ border: "0.1rem solid #f38f0b" }} />
                </Fragment>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr style={{ border: "0.1rem solid #f38f0b" }} />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">
                    {cartItems.reduce(
                      (acc, item) => acc + Number(item.quantity),
                      0
                    )}
                    (Units)
                  </span>
                </p>
                <p>
                  Est. total:
                  <span className="order-summary-values">
                    $
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>

                <hr style={{ border: "0.1rem solid #f38f0b" }} />
                <button
                  id="checkout_btn"
                  className="btn btn-primary btn-block"
                  onClick={checkOutHandler}
                >
                  Check out
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
