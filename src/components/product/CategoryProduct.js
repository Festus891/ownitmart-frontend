import React from "react";
import { Link } from "react-router-dom";
import categoryData from "./categoryData";

const CategoryProduct = () => {
  return (
    <div className="container-fluid home-row-container">
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
            fontWeight: "bold",
            fontSize: "1.4rem",
          }}
        >
          Browse By Category
        </h2>
      </div>
      <div className="row mt-3">
        {categoryData.map((category) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={category.id}>
            <div className="card p-3 rounded-7">
              <Link
                to={`/category/${category.category}`}
                className="text-center"
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  className="card-img-top mx-auto"
                  src={category.image}
                  alt={category.category}
                />
                <div className="card-body d-flex flex-column">
                  <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
                    {category.category}
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
