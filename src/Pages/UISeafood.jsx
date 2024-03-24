import React, { Component } from "react";
import Popular from "../Components/Popular/Popular";
import { UISale } from "../Components/Sale/UISale";
import { UIBanner } from "../Components/Banner/Banner";

export class UISeafoodMain extends Component {
  render() {
    let { onModify } = this.props;
    return (
      <div>
        <UIBanner />
        <UISale />
        <Popular onModify={onModify} />
      </div>
    )
  }
}