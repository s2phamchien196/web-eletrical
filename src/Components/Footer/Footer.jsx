import React, { Component } from 'react'
import './Footer.css'
import { severGET } from '../AppContext'
import panasonic from '../Assets/panasonic.webp'
import ariston from '../Assets/ariston.png'
import rangdong from '../Assets/rang-dong.webp'
import mpe from '../Assets/mpe.webp'
import han from '../Assets/han.webp'


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
      <div className='flex-vbox'>
        <div className='footer-brand'>
          <div className='footer-brand-img'>
            <img src={panasonic} alt='' />
          </div>
          <div className='footer-brand-img'>
            <img src={ariston} alt='' />
          </div >
          <div className='footer-brand-img'>
            <img src={rangdong} alt='' />
          </div>
          <div className='footer-brand-img'>
            <img src={mpe} alt='' />
          </div>
          <div className='footer-brand-img'>
            <img src={han} alt='' />
          </div>
        </div>
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
      </div>

    )
  }
}
