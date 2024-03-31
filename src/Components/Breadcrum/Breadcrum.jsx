import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  let {product} = props;
  return (
    <div className='breadcrum'>
      TRANG CHU <img src={arrow_icon} alt='' />
      SHOP <img src={arrow_icon} alt='' />
      {product.category} <img src={arrow_icon} alt='' />
      {product.label}
    </div>
  )
}

export default Breadcrum