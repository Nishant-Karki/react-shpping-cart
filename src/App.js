import React from "react";
import Content from "./components/Content";
import FooterCom from "./components/FooterCom";
import HeaderCom from "./components/HeaderCom";
import data from "./data.json";

class App extends React.Component {
  state = {
    products: data.products,
    size: "",
    sort: "",
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

  filterProducts = (e) => {
    const value = e.target.value;
    value === "" || value === "All"
      ? this.setState({ size: this.state.size, products: data.products })
      : this.setState({
          size: value,
          products: this.state.products.filter(
            (product) => product.availableSizes.indexOf(value) >= 0
          ),
        });
  };

  render() {
    return (
      <div className="grid-container">
        <HeaderCom />
        <Content
          data={this.state.products}
          size={this.state.size}
          sort={this.state.sort}
          filterProducts={this.filterProducts}
          sortProducts={this.sortProducts}
        />
        <FooterCom />
      </div>
    );
  }
}

export default App;
