import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  let { product } = props;
  return (
    <div className='breadcrum'>
      CỬA HÀNG <img src={arrow_icon} alt='' />
      {product.menu_name} <img src={arrow_icon} alt='' />
      {product.group}
    </div>
  )
}

export default Breadcrum