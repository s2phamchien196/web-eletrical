import React, { Component } from "react";
import Popular from "../Components/Popular/Popular";
import Footer from "../Components/Footer/Footer";
import BestSale from "../Components/BestSale/BestSale";

export class UISeafoodMain extends Component {
  render() {
    return (
      <div>
        <Popular />
        <BestSale />
        <Footer />
      </div>
    )
  }
}