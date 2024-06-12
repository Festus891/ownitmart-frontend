import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeSlider = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <Fragment>
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {products &&
            products.map((_, index) => (
              <li
                key={index}
                data-target="#carouselExampleIndicators"
                data-slide-to={index}
                className={index === 0 ? "active" : ""}
              ></li>
            ))}
        </ol>
        <div className="carousel-inner ">
          {products &&
            products.map((product, index) => (
              <div
                key={product.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="card-body d-flex flex-sm-row flex-column p-5 ">
                  <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url}
                    alt="card"
                  />
                  <div className="card-body d-flex flex-column  align-items-center text-center ml-3">
                    <h5
                      className="card-title"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bolder",
                      }}
                    >
                      <Link to={`product/${product._id}`}>{product.name}</Link>
                    </h5>
                    <p className="card-text" style={{ color: "black" }}>
                      ${product.price}
                    </p>
                    <Link
                      to={`product/${product._id}`}
                      id="view_btn"
                      className="btn"
                    >
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <a
          className="carousel-control-prev d-none"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next d-none"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </Fragment>
  );
};

export default HomeSlider;
