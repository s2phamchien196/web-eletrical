import React, { Component } from 'react'
import './Footer.css'
import FeatherIcon from 'feather-icons-react';
import { severGET } from '../AppContext'


export class UIFooter extends Component {
  info;
  constructor(props) {
    super(props)
    severGET('/info', {}, (bean) => {
      this.info = bean;
      this.forceUpdate();
    })
  }

  render() {
    if (!this.info) return;
    return (
      <div className='footer'>
        <div className='footer-contact'>
          <h3>{this.info.website_name}</h3>
          <p>{this.info.address}</p>
          <p>Điện thoại:{this.info.mobile}</p>
          <p>Email:{this.info.email}</p>
          <p>Website:{this.info.website}</p>
        </div>
        <div className='footer-our'>
          <h3>{'VỀ CHÚNG TÔI'}</h3>
          <p>Trang chủ</p>
          <p>Về chúng tôi</p>
          <p>Tuyển dụng</p>
          <p>Bảo mật thông tin</p>
          <p>Liên hệ</p>
          <p>Bản đồ</p>
        </div>
        <div className='footer-info'>
          <h3>THÔNG TIN</h3>
          <p>Bảng giá</p>
          <p>Khuyến mãi</p>
          <p>Tin tức</p>
          <p>Tìm kiếm</p>
        </div>
        <div className='footer-policy'>
          <h3>CHÍNH SÁCH</h3>
          <p>Tra cứu đơn hàng</p>
          <p>Thanh toán & Vận chuyển</p>
          <p>Bảo hành & Đổi trả</p>
          <p>Ý kiến phản hồi</p>
        </div>
        <div className='footer-maps'>
          <h3>MAPS</h3>
        </div>
      </div>
    )
  }
}
