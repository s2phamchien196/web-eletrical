import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import new_collections from '../Assets/new_collections'
import UIItems from '../Item/UIItems'
import Footer from '../Footer/Footer'

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
      <h1 className='pt-5'>Best Sale</h1>
      <hr />
      <div className='popular-item'>
        {new_collections.map((item, index) => {
          return (
            <UIItems key={index} id={item.id} item={item} />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Popular;
