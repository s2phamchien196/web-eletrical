import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UIProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import './CSS/style.css'
import { severGET } from '../Components/AppContext'
import { nextKey } from "../Lib/utils";

export const UIProduct = (props) => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    severGET('/product/id', { id: productId }, (data) => setProduct(data));
  }, []);
  return (
    <div className="main" key={`product-${nextKey()}`}>
      <UIProductDisplay product={product} onModify={props.onModify} />
    </div>
  )
}