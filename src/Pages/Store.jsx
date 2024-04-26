import React from "react";
import { Menu } from "../Components/Menu/Menu";
import { useParams } from "react-router-dom";

export const UIStore = (props) => {
  const { search } = useParams();
  const { onAddToCart } = props;
  return (
    <div className="flex-hbox">
      <Menu filter={search} onAddToCart={onAddToCart} />
    </div>
  )
}