import React from "react";

import Content from "./components/Content";
import data from "./data.json";
import FooterCom from "./components/FooterCom";
import HeaderCom from "./components/HeaderCom";

class App extends React.Component {
  state = {
    products: data.products,
    cartItems: [],
    size: "",
    sort: "",
  };
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems });
  };

  filterProducts = (e) => {
    const value = e.target.value;
    console.log(value);

    value === ""
      ? this.setState({ size: "", products: data.products })
      : this.setState({
          size: value,
          products: data.products.filter(
            (product) => product.availableSizes.indexOf(value) >= 0
          ),
        });
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => item._id !== product._id),
    });
  };

  sortProducts = (e) => {
    const value = e.target.value;
    value === ""
      ? this.setState({ sort: this.state.sort, products: data.products })
      : this.setState({
          sort: value,
          products: data.products
            .slice()
            .sort((a, b) =>
              value === "Lowest"
                ? a.price < b.price
                  ? 1
                  : -1
                : value === "Highest"
                ? a.price > b.price
                  ? 1
                  : -1
                : a._id > b._id
                ? 1
                : -1
            ),
        });
  };

  render() {
    return (
      <div>
        <HeaderCom />
        <Content
          addToCart={this.addToCart}
          cartData={this.state.cartItems}
          data={this.state.products}
          filterProducts={this.filterProducts}
          removeFromCart={this.removeFromCart}
          size={this.state.size}
          sort={this.state.sort}
          sortProducts={this.sortProducts}
        />
        <FooterCom />
      </div>
    );
  }
}

export default App;
