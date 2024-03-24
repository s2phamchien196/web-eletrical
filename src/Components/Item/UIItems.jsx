import React, { Component } from "react";
import './Item.css'
import cart_icon from '../Assets/cart_icon.png'
import info_data from '../Assets/info_data'

export class UIItems extends Component {
  render() {
    let { item, onModify } = this.props;
    let fistPrice = item.price[0];
    let sale = (fistPrice['oldPrice'] - fistPrice['newPrice']) / fistPrice['oldPrice'] * 100;
    sale = Math.round(sale);
    let userBuy = info_data.userBuy;
    let countBuyItem = userBuy[item.id];
    let count = 0;
    if (countBuyItem) {
      count = userBuy[item.id].count;
    } else {
      userBuy[item.id] = {
        count: count
      };
    }
    return (
      <div className={'item'}>
        <img src={item.path} alt="" />
        <div className="content">
          <p className="flex-grow-1">{item.label}</p>
          <div className="sale flex-grow-0 mx-2">
            -{sale}%
          </div>
        </div>
        <div className="item-prices">
          <div className="flex-grow-1">
            <div className="item-price-new">
              {fistPrice.newPrice.toLocaleString()}{item.currency}<span>/{fistPrice.unit}</span>
            </div>
            <div className="item-price-old">
              {fistPrice.oldPrice.toLocaleString()}{item.currency}
            </div>
          </div>
          <div>
            <button className="cart-button flex-grow-0" onClick={() => {
              count++;
              userBuy[item.id].count = count;
              userBuy.total++;
              onModify();
            }}>
              <img src={cart_icon} alt="" />
            </button>
          </div>
          {
            count ? <div className="item-cart-count">{count}</div> :
              <div></div>
          }
        </div>
      </div>
    );
  };
}