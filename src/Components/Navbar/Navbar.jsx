import React, { Component } from "react";
import seafood from '../Assets/seafood.png'

export class NavbarComponent extends Component {
  render() {
    return (
      <div className={"flex-hbox"}>
        <img src={seafood} style={{ height: 100, width: 100 }} />
        <div className="text-danger">{'Seafood'}</div>
      </div>
    )
  }
}