import React from "react";
import Content from "./components/Content";
import FooterCom from "./components/FooterCom";
import HeaderCom from "./components/HeaderCom";

function App() {
  return (
    <div className="grid-container">
      <HeaderCom />
      <Content />
      <FooterCom />
    </div>
  );
}

export default App;
