import React, { Component } from "react";
import { UISale } from "../Components/Sale/UISale";
import { UIBanner } from "../Components/Banner/Banner";
import { Popular } from "../Components/Popular/Popular";

export class UISeafoodMain extends Component {
  render() {
    let { onModify } = this.props;
    return (
      <div>
        <UIBanner />
        {/* <UISale onModify={onModify} />
        <Popular onModify={onModify} /> */}
      </div>
    )
  }
}