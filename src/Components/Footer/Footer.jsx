import React from 'react'
import './Footer.css'
import FeatherIcon from 'feather-icons-react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='shop-address'>
        <div className='py-1'>
          <FeatherIcon icon="home" size={22} className='pb-1' /><span>CHI NHÁNH QUẢNG NINH </span> : Cảng Cá Cái Rồng, thị trấn Cái Rồng, huyện Vân Đồn, tỉnh Quảng Ninh
        </div>
        <div className='py-1'>
          <FeatherIcon icon="home" size={22} className='pb-1' /><span>CHI NHÁNH HẢI PHÒNG </span> : Chợ Minh Đức, thị trấn Minh Đức, huyện Thủy Nguyên, TP.Hải Phòng
        </div>
        <div>
          HOTLINE: <span style={{ fontSize: '15px' }}>0981.780.453 – 0962.945.536</span>
        </div>
      </div>
      <div className='rule'>
        {'Chinh Sach'}
      </div>
      <div className='contact'>
        {'Contact'}
      </div>
    </div>
  )
}

export default Footer