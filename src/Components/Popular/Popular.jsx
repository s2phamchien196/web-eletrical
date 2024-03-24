import React from 'react'
import './Popular.css'
import data_best_sale from '../Assets/basket/data'
import { UIItems } from '../Item/UIItems';

export const Popular = (props) => {
  let { onModify } = props;
  return (
    <div className='popular-body'>
      <div className='popular'>
        <h4>Hải Sản Bán Chạy</h4>
        <div className='popular-item'>
          {data_best_sale.map((item, index) => {
            return (
              <UIItems key={index} id={item.id} item={item} onModify={onModify} />
            )
          })}
          {data_best_sale.map((item, index) => {
            return (
              <UIItems key={index} id={item.id} item={item} onModify={onModify} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Popular;
