import React, { Fragment, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import ProductMapping from "./product/ProductMapping";
import HomeSlider from "./product/HomeSlider";
import RowMapping from "./product/RowMapping";
import CategoryProduct from "./product/CategoryProduct";

const Home = ({ product }) => {
  return (
    <Fragment>
      <div className="container-fluid home_container p-4 ">
        <div className="row ">
          <div className="col-sm mb-3">
            <div className="home_text mt-5">
              <h2>Because you see it!</h2>
              <h2>And you like it!!</h2>
              <h2>
                You can <strong>OWNIT!!!</strong>
              </h2>
              <p>
                With a wide range of products and unbeatable prices, we strive
                to make your shopping experience convenient and budget friendly.
                Start exploring our website now and get ready to discover a
                world of endless possibilities. Happy
              </p>
              <Link to="/product" id="view_btn" className="btn">
                <span>Shop Now</span>
                <i class="fas fa-angle-right pl-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-sm home_second_col">
            <HomeSlider />
          </div>
        </div>
      </div>

      <ProductMapping title={"Best Selling Products"} />
      <RowMapping title={"Flash Sale"} />
      <CategoryProduct />
    </Fragment>
  );
};

export default Home;
