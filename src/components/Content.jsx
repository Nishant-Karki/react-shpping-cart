import React from "react";

import Cart from "./Cart";
import FilterCom from "./FilterCom";
import Products from "./Products";

import "./Content.css";

function Content({
  addToCart,
  cartData,
  createOrder,
  data,
  filterProducts,
  removeFromCart,
  size,
  sort,
  sortProducts,
}) {
  return (
    <div className="container content">
      <div className="row">
        <div className="col-md-9 ">
          <FilterCom
            count={data.length}
            size={size}
            sort={sort}
            filterProducts={filterProducts}
            sortProducts={sortProducts}
          />
          <Products products={data} addToCart={addToCart} />
        </div>
        <div className="col-md-3 pt-4 text-center">
          <Cart
            cartItems={cartData}
            createOrder={createOrder}
            removeFromCart={removeFromCart}
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
