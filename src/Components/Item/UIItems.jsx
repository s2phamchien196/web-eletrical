import React, { Component } from "react";
import './Item.css'
import cart_icon from '../Assets/cart_icon.png'
import info_data from '../Assets/info_data'
import { Link } from "react-router-dom";

export class UIItems extends Component {
  render() {
    let { item, onModify } = this.props;
    let oldPrice = Number(item['gia']);
    let newPrice = Number(item['gia-ban']);
    let sale;
    if (oldPrice) {
      sale = Math.round((oldPrice - newPrice) / oldPrice * 100);
    }
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

    let renderSale = () => {
      if (!sale) return (<p></p>);
      return (
        <div className="flex-hbox">
          <div className="item-price-old ">
            {oldPrice.toLocaleString()}
          </div>
          <div className="sale flex-grow-0 mx-1">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" fill="url(#paint0_linear_2216_10611)"></path><defs><linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#EE4D2D"></stop><stop offset="1" stop-color="#FF7337"></stop></linearGradient></defs></svg>
            -{sale}%
          </div>
        </div>
      )
    }

    let images = item.image;
    let image = '';
    if (images) image = images[0];
    return (
      <div className={'item'}>
        <Link to={`/product/${item.id}`} >
          <img src={image} alt="" />
        </Link>
        <div className="content">
          <p className="flex-grow-1" style={{ whiteSpace: 'pre-line' }}>{item['ten-hang']}</p>
        </div>
        {renderSale()}
        <div className="item-prices">
          <div className="flex-grow-1">
            <div className="item-price-new">
              {newPrice.toLocaleString()}{'đ'}<span>/{`${item['qui-doi']}${item['dvt']}`}</span>
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