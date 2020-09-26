import React from "react";
import "./Content.css";
import FilterCom from "./FilterCom";
import Products from "./Products";

function Content({ data, size, sort, filterProducts, sortProducts }) {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-md-9">
          <FilterCom
            count={data.length}
            size={size}
            sort={sort}
            filterProducts={filterProducts}
            sortProducts={sortProducts}
          />
          <Products products={data} />
        </div>
        <div className="col-md-3">Card Items</div>
      </div>
    </div>
  );
}

export default Content;
