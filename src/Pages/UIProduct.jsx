import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import { UIProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import './CSS/style.css'

export const UIProduct = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(sel => sel.id === Number(productId));
  return (
    <div className="main">
      <Breadcrum product={product} />
      <UIProductDisplay product={product} />
    </div>
  )
}