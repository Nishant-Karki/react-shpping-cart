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

  render() {
    return (
      <div className="grid-container">
        <HeaderCom />
        <Content data={this.state.products} />
        <FooterCom />
      </div>
    );
  }
}

export default App;
