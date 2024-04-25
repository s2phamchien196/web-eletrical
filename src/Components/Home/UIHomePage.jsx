import React, { Component } from "react";
import './HomePage.css'
import page from '../Assets/page.jpg'
import truck from '../Assets/truck.png'
import phone24 from '../Assets/phone24.png'
import messeage from '../Assets/messeage.png'
import payment from '../Assets/payment.png'
import { severGET } from '../AppContext'

import * as FeatherIcon from "react-feather";

export class UIHomePage extends Component {
  info;
  constructor(props) {
    super(props);
    severGET('/info', {}, (bean) => {
      this.info = bean;
      this.forceUpdate();
    })
  }

  render() {
    if (!this.info) return;
    return (
      <div className="home-page">
        <img className="home-page-img" src={page} alt="" />
        <div className="home-page-shipment-main">
          <div className="home-page-shipment">
            <div className="flex-hbox">
              <img src={truck} alt="" />
              <div className="flex-vbox">
                <h4>Hỗ trợ phí ship</h4>
                <p>Nội thành TP.Hà Nội</p>
              </div>
            </div>
            <div className="flex-hbox">
              <img src={phone24} alt="" />
              <div className="flex-vbox">
                <h4>Hỗ trợ tư vấn</h4>
                <p>{this.info.mobile}</p>
              </div>
            </div>
            <div className="flex-hbox">
              <img src={messeage} alt="" />
              <div className="flex-vbox">
                <h4>Chat với chúng tôi</h4>
                <p>Trả lời trong vòng 24h</p>
              </div>
            </div>
            <div className="flex-hbox">
              <img src={payment} alt="" />
              <div className="flex-vbox">
                <h4>Nhận hàng & Thanh toán</h4>
                <p>Thu tiền COD – Chuyển khoản</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-info">
          <h2>{this.info.website_name}</h2>
          <div className="flex-hbox">
            <FeatherIcon.Home size={18} />
            <span>{this.info.address}</span>
          </div>
          <div className="flex-hbox">
            <FeatherIcon.Phone size={18} />
            <span>{this.info.mobile}</span>/
            <span>Zalo:{this.info.zalo}</span>
          </div>
          <div className="flex-hbox">
            <FeatherIcon.Mail size={18} />
            <span>{this.info.email}</span> |
            <FeatherIcon.Globe size={18} />
            <span>{this.info.website}</span>
          </div>
        </div>
      </div>
    )
  }
}