import React, { Component } from "react";
import './Item.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { host, severPOST } from "../AppContext";
import { showNotification } from "../../Lib/input";


export class UIItems extends Component {
  onAddToCart = (item) => {
    let { onAddToCart } = this.props;
    severPOST('/addtocart', { productId: item['_id'] }, (bean) => {
      showNotification('Add Product Success', 'success')
      if (onAddToCart) onAddToCart(item);
      this.forceUpdate();
    })
  }

  render() {
    let { item } = this.props;
    let price = Number(item['retail_price']);
    price = Math.round(price);
    let userBuy = 0;

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
          <div>
            <button className="cart-button flex-grow-0" onClick={() => {
              userBuy++;
              this.onAddToCart(item);
            }}>
              <img src={cart_icon} alt="" />
            </button>
          </div>
          {
            userBuy ? <div className="item-cart-count">{userBuy}</div> :
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