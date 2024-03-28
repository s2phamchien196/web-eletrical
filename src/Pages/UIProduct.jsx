import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";

export const UIProduct = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(sel => sel.id == productId);
  return (
    <div>
      <img src={product.path} alt="" />
    </div>
  )
}