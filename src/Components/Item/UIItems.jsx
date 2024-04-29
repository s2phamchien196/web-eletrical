import React, { Component } from "react";
import './Item.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { host, severPOST, getUser } from "../AppContext";
import { showNotification } from "../../Lib/input";
import Cookies from 'js-cookie'


export class UIItems extends Component {
  onAddToCart = (item) => {
    let { onAddToCart } = this.props;
    let user = getUser();
    if (!user['_id']) {
      if (!user['cartData'][item['_id']]) {
        user['cartData'][item['_id']] = 1;
      } else {
        user['cartData'][item['_id']] += 1;
      }
      user['notification'] = item['label'];
      let totalQuantity = 0;
      for (let key in user['cartData']) {
        totalQuantity += user['cartData'][key];
      }
      user['total_quantity'] = totalQuantity;

      let totalPrices = user['total_prices'] ? user['total_prices'] : 0;
      totalPrices += item['retail_price'];
      user['total_prices'] = totalPrices;
      const jsonUser = JSON.stringify(user);
      Cookies.set('user', jsonUser, 365);
      if (onAddToCart) onAddToCart(item);
    } else {
      severPOST('/addtocart', { productId: item['_id'], quantity: 1 }, (bean) => {
        if (onAddToCart) onAddToCart(item);
        this.forceUpdate();
      })
    }
    showNotification(`"${item['label']}" đã được thêm vào giỏ hàng.`, 'success');
  }

  render() {
    let { item } = this.props;
    let price = Number(item['retail_price']);
    price = Math.round(price);
    let userBuy = 0;
    let user = getUser();
    let cartData = user.cartData ? user.cartData : {};
    let productTotalItems = cartData[item['_id']] ? cartData[item['_id']] : 0;
    return (
      <div className={'item'}>
        <div className="item-img">
          <Link to={`/product/${item._id}`} >
            <img src={host + item['image']} alt="" />
          </Link>
        </div>
        <div className="item-prices">
          <div className="flex-grow-1">
            <div className="item-price-new">

              {price == 0 ?
                <>
                  {'Liên Hệ'}
                </> :
                <>
                  {price.toLocaleString()} {'đ'}
                  <span>/{`${item['unit'] ? item['unit'] : 'Cái'}`}</span>
                </>
              }
            </div>
          </div>
          <div className="flex-vbox justify-content-center align-items-end">
            <button className="cart-button flex-grow-0" data-toggle="modal" data-target="#login" onClick={() => {
              userBuy++;
              this.onAddToCart(item);
            }}>
              <img src={cart_icon} alt="" />
            </button>
          </div>
          {
            productTotalItems ? <div className="item-cart-count">{productTotalItems}</div> :
              <div></div>
          }
        </div>
        <div className="content">
          <p className="flex-grow-1" title={item['label']}>{item['label']}</p>
        </div>
      </div>
    );
  };
}