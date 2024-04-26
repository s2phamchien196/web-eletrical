import React, { Component } from "react";
import './HomePage.css'
import page from '../Assets/page.jpg'
import truck from '../Assets/truck.png'
import phone24 from '../Assets/phone24.png'
import messeage from '../Assets/messeage.png'
import payment from '../Assets/payment.png'

import home_info1 from '../Assets/home_info1.png'
import home_info2 from '../Assets/home-info2.png'
import home_info3 from '../Assets/home-info3.png'
import home_info4 from '../Assets/home-info4.png'
import home_info5 from '../Assets/home-info5.png'
import home_info6 from '../Assets/home-info6.png'
import home_info7 from '../Assets/home-info7.png'

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
          <div className="flex-hbox  align-items-center">
            <FeatherIcon.Home className="m-2" size={18} />
            <span>{this.info.address}</span>
          </div>
          <div className="flex-hbox  align-items-center">
            <FeatherIcon.Phone className="m-2" size={18} />
            <a className="text-primary px-1" href="https://mail.google.com/mail/" target="_blank" rel="noopener noreferrer">{this.info.mobile}</a>/
            <a className="text-primary px-1" href="https://mail.google.com/mail/" target="_blank" rel="noopener noreferrer">Zalo:{this.info.zalo}</a>
          </div>
          <div className="flex-hbox align-items-center" style={{ alignItems: 'center' }}>
            <FeatherIcon.Mail className="mx-1" size={18} />
            <a className="text-primary px-1" href="https://mail.google.com/mail/" target="_blank" rel="noopener noreferrer">{this.info.email}</a>
            |<FeatherIcon.Globe className="m-2" size={18} />
            <a className="text-primary" href={this.info.website} target="_blank" rel="noopener noreferrer">{this.info.website}</a>
          </div>
          <div style={{ fontWeight: 300, whiteSpace: 'pre-line', textAlign: 'start' }}>{this.info.description}</div>
        </div>
        <UIHomeService />
      </div>
    )
  }
}

class UIHomeService extends Component {
  render() {
    return (
      <div className="home-service">
        <img src={home_info7} alt="" />
        <div className="home-service-items">
          <div className="flex-hbox">
            <img src={home_info1} alt="" />
            <div className="flex-vbox">
              <h3>{'Phân phối Sỉ & Lẻ'}</h3>
              <hr />
              <p>{'GIÁ SỈ BÁN LẺ'}</p>
              <p>{'Phân phối và Bán lẻ thiết bị điện dân dụng/công nghiệp. Hỗ trợ vẫn chuyển đến các tỉnh thành.'}</p>
            </div>
          </div>
          <div className="flex-hbox">
            <img src={home_info2} alt="" />
            <div className="flex-vbox">
              <h3>{'Sửa chữa và Lắp đặt'}</h3>
              <hr />
              <p>{'Hệ thống điện công nghiệp\nHệ thống điện tự động\nHệ thống điện dân dụng\nHệ thống Nhà thông minh'}</p>
            </div>
          </div>
          <div className="flex-hbox">
            <img src={home_info4} alt="" />
            <div className="flex-vbox">
              <h3>{'Dịch vụ & Tư vấn'}</h3>
              <hr />
              <p>{'Tư vấn sản phẩm đầy đủ rõ ràng kèm thông số kỹ thuật và hình ảnh, hướng dẫn lắp đặt, vận hành, sử dụng.'}</p>
            </div>
          </div>
          <div className="flex-hbox">
            <img src={home_info3} alt="" />
            <div className="flex-vbox">
              <h3>{'Giá sản phẩm'}</h3>
              <hr />
              <p>{'Cam kết tốt nhất so với sản phẩm cùng chất lượng trên thị trường trong khu vực.'}</p>
            </div>
          </div>
          <div className="flex-hbox">
            <img src={home_info5} alt="" />
            <div className="flex-vbox">
              <h3>{'Chất lượng sản phẩm'}</h3>
              <hr />
              <p>{'Mới, đúng nhãn hiệu, đúng xuất xứ, đúng thông số kỹ thuật mà nhà sản xuất, nhập khẩu đã cung cấp.'}</p>
            </div>
          </div>
          <div className="flex-hbox">
            <img src={home_info6} alt="" />
            <div className="flex-vbox">
              <h3>{'Bảo hành'}</h3>
              <hr />
              <p>{'Đổi mới theo đúng điều khoản bảo hành của nhà sản xuất hoặc theo qui định bảo hành của công ty.'}</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}