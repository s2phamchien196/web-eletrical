import React, { Component } from "react";
import './PaymentRequest.css'
import { Link, useLocation } from 'react-router-dom';
import { getUser, severPOST, setUser } from "../AppContext"
import Cookies from 'js-cookie'
import { showNotification } from "../../Lib/input";

class UIPaymentRequest extends Component {
  bean = {
    payment: 'cash'
  };

  onUpdateToCart = (product, quantity) => {
    let { onModify } = this.props;
    let user = getUser()
    if (user['_id']) {
      severPOST('/updatetocart', { productId: product['_id'], quantity: quantity }, (bean) => {
        setUser(bean);
        if (onModify) onModify(bean);
      })
    } else {
      user['cartData'][product['_id']] = quantity;
      let totalQuantity = 0;
      for (let key in user['cartData']) {
        totalQuantity += user['cartData'][key];
      }
      user['total_quantity'] = totalQuantity;
      const jsonUser = JSON.stringify(user);
      Cookies.set('user', jsonUser, 365);
      setUser(user);
      if (onModify) onModify(user);
    }
  }

  onRemoveAll = () => {
    let { groups } = this.props;
    groups.forEach(sel => {
      this.onUpdateToCart(sel['product'], 0);
      showNotification('Đơn hàng đã được xác nhận', 'success');
    });
  }

  changeHandler = (e) => {
    this.bean[e.target.name] = e.target.value;
    this.forceUpdate();
  }

  onRenderItems = () => {
    let { groups } = this.props;
    if (!groups) return;
    let contents = [];
    groups.forEach((item, index) => {
      contents.push(
        <div>
          <div key={`payment-request-item-${index}`} className="payment-request-bill-col">
            <div className="product-content">
              {item['product']['label']}
            </div>
            <div className="text-danger text-end">
              {Number(item['total'] * item['product']['retail_price']).toLocaleString()}đ
            </div>
          </div>
          <hr />
        </div>
      );
    });
    return contents;
  }

  render() {
    let { totalPayment, groups } = this.props;
    return (
      <div className="payment-request flex-hbox">
        <div className="payment-request-info">
          <hr className="m-0" />
          <h3>THÔNG TIN THANH TOÁN</h3>
          <div className="flex-hbox my-2">
            <div className="w-50">
              <div>Tên *</div>
              <input className="w-100" value={this.bean.last_name} onChange={this.changeHandler} type='text' name='last_name' placeholder='' />
            </div>
            <div className="w-50" style={{ marginLeft: 20 }}>
              <div>Họ *</div>
              <input className="w-100" value={this.bean.firstName} onChange={this.changeHandler} type='text' name='firstName' placeholder='' />
            </div>
          </div>
          <div className="my-2">
            <div>Tên công ty(tùy chọn)</div>
            <input className="w-100" value={this.bean.company} onChange={this.changeHandler} type='text' name='company' placeholder='' />
          </div>
          <div className="my-2">
            <div>Địa chỉ *</div>
            <input className="w-100" value={this.bean.address} onChange={this.changeHandler} type='text' name='address' placeholder='Địa chỉ' />
          </div>
          <div className="my-2">
            <div>Tỉnh/Thành phố *</div>
            <input className="w-100" value={this.bean.city} onChange={this.changeHandler} type='text' name='city' placeholder='' />
          </div>
          <div className="my-2">
            <div>Số điện thoại *</div>
            <input className="w-100" value={this.bean.mobile} onChange={this.changeHandler} type='text' name='mobile' placeholder='' />
          </div>
          <div className="my-2">
            <div>Địa chỉ email (tùy chọn)</div>
            <input className="w-100" value={this.bean.mobile} onChange={this.changeHandler} type='text' name='mobile' placeholder='' />
          </div>
          <div className="my-2">
            <h3>THÔNG TIN BỔ SUNG</h3>
            <div>Ghi chú đơn hàng (tùy chọn)</div>
            <textarea className="w-100" style={{ height: 100 }}
              value={this.bean.note} onChange={this.changeHandler} type='text' name='note'
              placeholder='Ghi chú đơn hàng, ví dụ: thời gian hay chỉ dẫn địa diểm giao hàng chi tiết hơn' />
          </div>
        </div>
        <div style={{ width: '40%' }}>
          <div className="payment-request-bill">
            <h3>ĐƠN HÀNG CỦA BẠN</h3>
            <div className="payment-request-bill-col">
              <h5 className="fw-bold">SẢN PHẨM</h5>
              <h5 className="text-end fw-bold">TẠM TÍNH</h5>
            </div>
            <hr style={{ height: 2 }} />
            <div>
              {this.onRenderItems()}
            </div>
            <div className="payment-request-bill-col">
              <div className="fw-bold">Tạm Tính</div>
              <div className="text-end text-danger">{Number(totalPayment).toLocaleString()}đ</div>
            </div>
            <hr />
            <div className="payment-request-bill-col">
              <div className="fw-bold">Tổng</div>
              <div className="text-end text-danger">{Number(totalPayment).toLocaleString()}đ</div>
            </div>
            <hr style={{ height: 2 }} />
            <div>
              <div>
                <input type="radio" value={'cash'} name="payment" checked={this.bean['payment'] === 'cash'} onChange={this.changeHandler} />
                <span className="mx-2 fw-bold">
                  Chuyển khoản ngân hàng
                </span>
                <div>
                  Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
                </div>
                <hr />
              </div>
              <div>
                <input type="radio" value={'cod'} name="payment" checked={this.bean['payment'] === 'cod'} onChange={this.changeHandler} />
                <span className="mx-2 fw-bold">
                  Thanh toán khi nhận hàng
                </span>
              </div>
            </div>
            <Link to='/payment-request/order-received' state={{ groups: groups, totalPayment: totalPayment, payment: this.bean.payment }}>
              <button className="btn btn-warning btn-lg my-3" onClick={this.onRemoveAll}>ĐẶT HÀNG</button>
            </Link>
            <div>
              Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể khác đã được mô tả trong chính sách riêng tư của chúng tôi.
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export const PaymentRequest = (props) => {
  const { onModify } = props
  const { state } = useLocation();
  return (
    <UIPaymentRequest groups={state.groups} totalPayment={state.totalPayment} onModify={onModify} />
  )
}
