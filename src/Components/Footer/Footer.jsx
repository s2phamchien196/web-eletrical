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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26267.054811415735!2d105.57441080218797!3d21.0759104607758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313459006345c88f%3A0xa005ccf66500cfc1!2zU2hvd3Jvb20gVuG6rXQgdMawICYgWMOieSBs4bqvcCBTw6FuZyBRdXnDqm4!5e0!3m2!1svi!2s!4v1714627668202!5m2!1svi!2s" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

    )
  }
}
