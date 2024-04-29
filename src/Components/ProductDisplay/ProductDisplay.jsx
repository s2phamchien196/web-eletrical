import React, { Component } from 'react'
import './ProductDisplay.css'
import Breadcrum from '../Breadcrum/Breadcrum';
import { host, getInfo, getUser, severPOST, setUser } from '../AppContext'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import { showNotification } from '../../Lib/input';

export class UIProductDisplay extends Component {
  quantity = 1;

  constructor(props) {
    super(props);
    let { product } = this.props;
    let user = getUser();
    let cartData = user.cartData ? user.cartData : {};
    this.quantity = cartData[product['_id']] ? cartData[product['_id']] : 1;
  }

  onAddProduct = () => {
    let { product, onModify } = this.props;
    let user = getUser()
    if (user['_id']) {
      severPOST('/updatetocart', { productId: product['_id'], quantity: this.quantity }, (bean) => {
        setUser({ ...bean, 'notification': product['label'] });
        if (onModify) onModify(user)
      })
    } else {
      user['cartData'][product['_id']] = this.quantity;
      user['notification'] = product['label'];
      let totalQuantity = 0;
      for (let key in user['cartData']) {
        totalQuantity += user['cartData'][key];
      }
      user['total_quantity'] = totalQuantity;
      if (onModify) onModify(user)
      const jsonUser = JSON.stringify(user);
      Cookies.set('user', jsonUser, 365);
      setUser(user);
    }
    showNotification(`"${product['label']}" đã được thêm vào giỏ hàng.`, 'success');
  }

  render() {
    let { product } = this.props;
    let info = getInfo();
    let img = product.image;

    return (
      <div className='productdisplay'>
        <div className='productdisplay-left'>
          <img className="productdisplay-main-img" src={host + img} alt='' />
        </div>
        <div className="productdisplay-right mx-5">
          <Breadcrum product={product} />
          <h3>{product['label']}</h3>
          <div className="flex-hbox">
            <div className="price-new">
              {Number(product['retail_price']).toLocaleString()} {'đ'}<span>/{`${product['unit']}`}</span>
            </div>
          </div>
          <div>
            <b>{'Mã SP'}</b> : <span>{product['code']}</span>
          </div>
          <i className='text-danger'>
            {'Giá sản phẩm rẻ hơn khi mua số lượng nhiều'}
          </i>
          <p>
            {`(vui lòng thêm vào báo giá để nhận báo giá hoặc qua email: ${info['email']})`}
          </p>
          <div className='pd-description'>
            {product['description']}
          </div>
          <div className="quantity_wrap my-2">
            <div className='flex-hbox'>
              <div className='mx-3'>
                <input type="button" value="-" className="btn-minus" onClick={() => {
                  if (this.quantity > 1) {
                    this.quantity -= 1;
                    this.forceUpdate();
                  }
                }} />
                <input min="1" type="number" title="Số lượng" id="quantity" className="btn-quantity" name="count" value={this.quantity} style={{ width: 40 }} />
                <input type="button" value="+" className="btn-plus" onClick={() => {
                  this.quantity += 1;
                  this.forceUpdate();
                }} />
              </div>
              <Link to={`/cart`}>
                <button className='mx-1 btn btn-danger' style={{ width: 120 }} onClick={this.onAddProduct}>{'Thêm Vào Giỏ'}</button>
              </Link>
              <Link to={`/cart`}>
                <button className='mx-1 btn btn-primary' style={{ width: 120 }} onClick={this.onAddProduct}>{'Mua Hàng'}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}