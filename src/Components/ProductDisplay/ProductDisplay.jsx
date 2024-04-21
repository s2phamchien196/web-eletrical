import React, { Component } from 'react'
import './ProductDisplay.css'
import Breadcrum from '../Breadcrum/Breadcrum';
import { host } from '../AppContext'

export class UIProductDisplay extends Component {
  render() {
    let { product } = this.props;
    let img = product.image;
    return (
      <div className='productdisplay'>
        <div className='productdisplay-left'>
          <img className="productdisplay-main-img" src={host + img} alt='' />
        </div>
        <div className="productdisplay-right mx-5">
          <Breadcrum product={product} />
          <h3>{product['label']}</h3>
          <div>
            <b>{'Mã SP'}</b> : <span>{product['code']}</span>
          </div>
          <i className='text-danger'>
            {'Giá sản phẩm rẻ hơn khi mua số lượng nhiều'}
          </i>
          <p>
            {'(vui lòng thêm vào báo giá để nhận báo giá hoặc qua email: hungdunggialam@gmail.com)'}
          </p>
          <div className="flex-hbox">
            <div className="price-new">
              {Number(product['retail_price']).toLocaleString()} {'đ'}<span>/{`${product['unit']}`}</span>
            </div>
          </div>
          <div className="quantity_wrap my-2">
            <div className='flex-hbox'>
              <span className="btn_quan btn_minus mx-2">-</span>
              <input min="1" type="number" title="Số lượng" readonly="" id="quantity" className="quantity" name="quantity" value="1" style={{ width: 40 }} />
              <span className="btn_quan btn_plus mx-2">+</span>

              <button className='mx-2'>{'Thêm Vào Giỏ'}</button>
              <button className='mx-2'>{'Mua Hàng'}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}