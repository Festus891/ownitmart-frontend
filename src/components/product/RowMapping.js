import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RowMapping = ({ title }) => {
  const { products } = useSelector((state) => state.products);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  return (
    <div className="container home-row-container mt-5 position-relative">
      <div
        className="container-fluid d-flex justify-content-between align-items-center"
        style={{
          background: "#fa9c23",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.7rem",
        }}
      >
        <h2
          style={{
            fontWeight: "bolder",
            fontSize: "1.4rem",
          }}
        >
          {title}
        </h2>
        <Link
          to="/product"
          style={{
            textDecoration: "none",
            color: "#fff",
          }}
        >
          SEE ALL
          <i className="fas fa-angle-right pl-2"></i>
        </Link>
      </div>

      <button
        onClick={scrollLeft}
        className="btn btn-secondary scroll-button prev-button"
      >
        <i class="fas fa-arrow-left"></i>
      </button>
      <div className="row-products-container ">
        <div className="row-products d-flex flex-row w-100" ref={containerRef}>
          {products &&
            products.map((product) => (
              <div className="card p-3 rounded card-hover" key={product._id}>
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    className="card-img-top mx-auto"
                    src={product.images[0].url}
                    alt="card"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <div className="ratings mt-auto">
                      <div className="rating-outer">
                        <div
                          className="rating-inner"
                          style={{ width: `${(product.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span id="no_of_reviews">
                        ({product.numOfReviews} Reviews)
                      </span>
                    </div>
                    <p className="card-text">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      <button
        onClick={scrollRight}
        className="btn btn-secondary scroll-button next-button"
      >
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default RowMapping;
