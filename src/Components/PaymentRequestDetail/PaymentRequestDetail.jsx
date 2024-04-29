import React, { Component } from "react";
import './PaymentRequestDetail.css'
import { useLocation } from 'react-router-dom';

class UIPaymentRequestDetail extends Component {
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
    let { payment, totalPayment } = this.props;
    let date = Date.now();
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

    return (
      <div className="payment-request flex-hbox">
        <div className="flex-vbox text-start">
          <h4>CHI TIẾT ĐƠN HÀNG</h4>
          <div className="payment-request-bill-col">
            <h5>SẢN PHẨM</h5>
            <h5 className="text-end">TỔNG</h5>
          </div>
          <hr style={{ height: 2 }} />
          <div className="flex-vbox">
            {this.onRenderItems()}
            <div className="payment-request-bill-col">
              <div className="fw-bold">Tổng số phụ:</div>
              <div className="text-danger text-end">{Number(totalPayment).toLocaleString()}đ</div>
            </div>
            <hr />
            <div className="payment-request-bill-col">
              <div className="fw-bold">Phương thức thanh toán:</div>
              <div className="text-end">{payment === 'cash' ? 'Chuyển khoản ngân hàng' : 'Thanh toán khi nhận hàng'}</div>
            </div>
            <hr />
            <div className="payment-request-bill-col">
              <div className="fw-bold">Tổng cộng:</div>
              <div className="text-danger text-end">{Number(totalPayment).toLocaleString()}đ</div>
            </div>
            <hr />
          </div>
        </div>
        <div style={{ width: '40%' }}>
          <div className="order-received-right">
            <div className="text-success">{'Cảm ơn bạn. Đơn hàng của bạn đã được nhận.'}</div>
            <ul style={{ listStyleType: 'disc', marginLeft: 20 }}>
              <li>
                <span>Mã đơn hàng</span>: <span className="fw-bold">{Math.floor(Math.random() * 100) + 1000}</span>
              </li>
              <li>
                <span>Ngày</span>: <span className="fw-bold">{formattedDate}</span>
              </li>
              <li>
                <span>Tổng cộng</span>: <span className="fw-bold text-danger">{Number(totalPayment).toLocaleString()}đ</span>
              </li>
              <li>
                <span>Phương thức thanh toán</span>: <span className="fw-bold">{payment === 'cash' ? 'Chuyển khoản ngân hàng' : 'Thanh toán khi nhận hàng'}</span>
              </li>
            </ul>
          </div>
        </div >
      </div>
    )
  }
}

export const PaymentRequestDetail = () => {
  const { state } = useLocation();
  return (
    <UIPaymentRequestDetail groups={state.groups} totalPayment={state.totalPayment} payment={state.payment} />
  )
}
