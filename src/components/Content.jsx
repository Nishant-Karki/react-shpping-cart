import React from "react";
import "./Content.css";
import Products from "./Products";

function Content({ data }) {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-md-9">
          <Products products={data} />
        </div>
        <div className="col-md-3">Card Items</div>
      </div>
    </div>
  );
}

export default Content;
