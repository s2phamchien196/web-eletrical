import React, { Component } from "react";
import './Item.css'
import cart_icon from '../Assets/cart_icon.png'
import info_data from '../Assets/info_data'
import { Link } from "react-router-dom";
import { host } from "../AppContext";


export class UIItems extends Component {
  render() {
    let { item, onModify } = this.props;
    let price = Number(item['retail_price']);
    price = Math.round(price);
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
        <Link to={`/product/${item._id}`} >
          <img src={host + item['image']} alt="" />
        </Link>
        <div className="content">
          <p className="flex-grow-1" style={{ whiteSpace: 'pre-line' }}>{item['label']}</p>
        </div>
        <div className="item-prices">
          <div className="flex-grow-1">
            <div className="item-price-new">
              {price.toLocaleString()} {'đ'}<span>/{`${item['unit']}`}</span>
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