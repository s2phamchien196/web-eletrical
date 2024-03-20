import React from "react";
import './Item.css'

const UIItems = (props) => {
  let { item } = props;
  return (
    <div className={'item'}>
      <img src={item.image} alt="" />
      <p>{item.name}</p>
      <div className="item-prices">
        <div className="item-price-old">
          {item.old_price} VND
        </div>
        <div className="item-price-new">
          {item.new_price} VND
        </div>
      </div>
    </div>
  );
};

export default UIItems