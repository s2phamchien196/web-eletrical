import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import UIItems from '../Item/UIItems'

export const Popular = () => {
  return (
    <div className='popular'>
      <h1>Phổ Biến</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item, index) => {
          return (
            <UIItems key={index} id={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Popular;
