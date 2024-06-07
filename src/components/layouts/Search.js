import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <form onSubmit={searchHandler} className="mt-2 w-100 pl-auto">
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder="Search products, seller and categories ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="input-group-append pl-2">
          <button id="search_btn" className="btn ">
            Search
            {/* <i className="fa fa-search" aria-hidden="true"></i> */}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
