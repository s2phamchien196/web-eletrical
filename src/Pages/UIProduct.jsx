import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import { UIProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import './CSS/style.css'
import { severGET } from '../Components/AppContext'

export const UIProduct = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    severGET('/product/id', { id: productId }, (data) => setProduct(data));
  }, []);
  return (
    <div className="main">
      <UIProductDisplay product={product} />
    </div>
  )
}