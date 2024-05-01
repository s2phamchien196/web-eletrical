
import React, { Component } from "react";
import { severGET, getUser, host, severPOST, setUser } from "../AppContext"
import './Cart.css'
import * as FeatherIcon from 'react-feather'
import icontag from '../Assets/icon-tag.png'
import { nextKey } from "../../Lib/utils";
import Cookies from 'js-cookie'
import { Link } from "react-router-dom";
import { showNotification, BBOffcanvas } from "../../Lib/input";

export class UICart extends Component {
  loading = true;
  uiKey = nextKey();
  groups = [];
  bean = {
    name: '',
    total: 0
  };
  constructor(props) {
    super(props);
    this.updateData();
    this.loading = false;
  }

  updateData = () => {
    let cartProducts = getUser()['cartData'];
    severGET('/allproducts', {}, (beans) => {
      for (let key in cartProducts) {
        let find = beans.find(bean => bean['_id'] == key);
        if (!find) continue;
        this.groups.push(
          {
            product: find,
            total: cartProducts[key],
          }
        )
      }
      this.forceUpdate();
    })
  }

  onUpdateToCart = (product, quantity) => {
    let { onModify } = this.props;
    let user = getUser()
    if (user['_id']) {
      severPOST('/updatetocart', { productId: product['_id'], quantity: quantity }, (bean) => {
        setUser({ ...bean, 'notification': product['label'] });
        this.updateData();
        if (onModify) onModify(bean);
      })
    } else {
      user['cartData'][product['_id']] = quantity;
      user['notification'] = product['label'];
      let totalQuantity = 0;
      for (let key in user['cartData']) {
        totalQuantity += user['cartData'][key];
      }
      user['total_quantity'] = totalQuantity;
      const jsonUser = JSON.stringify(user);
      Cookies.set('user', jsonUser, 365);
      setUser(user);
      this.updateData();
      this.forceUpdate();
      if (onModify) onModify(user);
    }
  }

  onUpdateAll = () => {
    this.groups.forEach(sel => {
      this.onUpdateToCart(sel['product'], sel['total']);
      showNotification('Cập Nhập Giỏ Hàng Thành Công', 'success');
    })
  }

  onRenderProducts = () => {
    if (this.groups.length == 0) return;
    let contents = [];
    this.groups.forEach((sel, index) => {
      let product = sel['product'];
      let total = sel['total'];
      if (total == 0) return;
      contents.push(
        <div>
          <div key={`cart-product-${index}`} className="cart-column">
            <div className="flex-hbox">
              <FeatherIcon.X style={{ marginTop: 'auto', marginBottom: 'auto', cursor: 'pointer' }} size={18}
                onClick={() => this.onUpdateToCart(product, 0)} />
              <img src={host + product.image} alt="" />
            </div>
            <div className="text-danger">{Number(product.retail_price).toLocaleString()}đ</div>
            <div className='mx-3'>
              <input type="button" value="-" className="btn-minus" onClick={() => {
                if (sel.total > 1) {
                  sel.total -= 1;
                  this.forceUpdate();
                }
              }} />
              <input min="1" type="number" title="Số lượng" id="quantity" className="btn-quantity" name="total" value={sel.total} style={{ width: 40 }} />
              <input type="button" value="+" className="btn-plus" onClick={() => {
                sel.total += 1;
                this.forceUpdate();
              }} />

            </div>
            <div className="text-danger">{Number(total * product.retail_price).toLocaleString()}đ</div>
          </div>
          <hr />
        </div>
      )

      this.bean.total += (total * product.retail_price)
    });
    return contents;
  }


  render() {
    if (this.loading) return;
    let checked = this.groups.find(sel => sel.total != 0);
    if (!checked) {
      return (
        <div className="flex-vbox" style={{ height: '25vh ' }}>
          <div>
            Chưa có sản phẩm nào trong giỏ hàng.
          </div>
          <Link to='/cua-hang'>
            <button className="btn btn-info btn-lg">QUAY TRỞ LẠI CỬA HÀNG</button>
          </Link>
        </div>
      )
    }
    return (
      <div className="cart">
        {/* {<BBOffcanvas />} */}
        <div className="cart-left">
          <div className="cart-column">
            <h4>SẢN PHẨM</h4>
            <h4>GIÁ</h4>
            <h4>SỐ LƯỢNG</h4>
            <h4>TẠM TÍNH</h4>
          </div>
          <hr style={{ height: 2 }} />
          <div>
            {this.onRenderProducts()}
          </div>
          <div className="cart-product-btn">
            <Link to={'/cua-hang'}>
              <button className="btn btn-info mx-3">
                <FeatherIcon.ArrowLeft size={15} /> {'Tiếp Tục Mua Sản Phẩm'}
              </button>
            </Link>
            <button className="btn btn-primary" onClick={this.onUpdateAll}>
              {'Cập Nhập Giỏ Hàng'}
            </button>
          </div>
        </div>
        <div className="cart-right flex-grow-1">
          <h4>CỘNG GIỎ HÀNG</h4>
          <hr style={{ height: 2, marginTop: 20 }} />
          <div className="flex-hbox">
            <div className="flex-grow-0">Tạm tính</div>
            <div className="flex-grow-1 text-end text-danger  ">{Number(this.bean.total).toLocaleString()}</div>
          </div>
          <hr />
          <div className="flex-hbox">
            <div className="flex-grow-0">Tạm tính</div>
            <div className="flex-grow-1 text-end text-danger  ">{Number(this.bean.total).toLocaleString()}</div>
          </div>
          <hr style={{ height: 2 }} />
          <Link to='/payment-request' state={{ groups: this.groups, totalPayment: this.bean.total }}>
            <button className="btn btn-warning w-100" style={{ backgroundColor: 'rgb(210, 110, 75)' }}
            >TIẾN HÀNH THANH TOÁN</button>
          </Link>
          <div className="text-start" style={{ marginTop: 20 }} >
            <img src={icontag} alt="" style={{ width: 22, transform: 'rotateY(180deg)' }} />
            <span style={{ fontWeight: 500 }}>Phiếu ưu đãi</span>
          </div>
          <hr style={{ height: 2, marginTop: 0 }} />
          <input className="w-100" value={this.bean.name} type='text' name='name' placeholder='Mã giảm giá' />
          <button className="btn btn-primary w-100 my-2">Áp Dụng</button>
        </div>
      </div >
    )
  }
}