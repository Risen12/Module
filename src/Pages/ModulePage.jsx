import React from "react";
import GraphTable from "../Components/GraphTable";
import Header from "../Components/Header";
import Module from "../Components/Module";
import Footer from "../Components/Footer";
import "../Styles/App.css";
import ShopTable from "../Components/ShopTable";
import StuffTable from "../Components/StuffTable";
import Informator from "../Informator";
import store from "../Store/Store";

function ModulePage() {
  return (
    <div id="App">
      <Informator store={store.info}/>
      <Header id="header"/>
      <Module id="module"/>
      <div id="tables">
        <ShopTable id="shop_table"/>
        <StuffTable id="stuff_table"/>
        <GraphTable id="graph_table"/>
      </div>
      <Footer id="footer"/>
    </div>
  );
}

export default ModulePage;
