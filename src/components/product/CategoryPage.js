import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import MetaData from "../layouts/MetaData";
import Loader from "../layouts/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Product from "./Product";
import { useAlert } from "react-alert";

const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [rating, setRating] = useState(0);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, products, error, productCount, resPerPage } = useSelector(
    (state) => state.products
  );

  const { category } = useParams(); // Extract the category parameter

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    dispatch(getProducts("", currentPage, price, category, rating)); // Filter by category
  }, [dispatch, alert, error, category, currentPage, price, rating]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`Category: ${category}`} />
          <h2 id="products_heading">{category} Products</h2>
          <section id="products" className="container mt-2">
            <div className="row">
              <div className="col-6 col-md-3 mt-5 mb-5">
                {/* Add any additional filters if needed */}
              </div>
              <div className="col-6 col-md-9">
                <div className="row">
                  {products &&
                    products.map((product) => (
                      <Product key={product._id} product={product} col={4} />
                    ))}
                </div>
              </div>
            </div>
          </section>
          {resPerPage <= productCount && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText={"Next"}
                prevPageText={"Prev"}
                firstPageText={"First"}
                lastPageText={"Last"}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default CategoryPage;
