import React from 'react'
import UIItems from '../Item/UIItems'
import './BestSale.css'
import new_collections from '../Assets/new_collections'

const BestSale = () => {
  return (
    <div className='best-sale'>
      <h1 className='pt-5'>Best Sale</h1>
      <hr />
      <div className='best-sale-item flex-grow-1'>
        {new_collections.map((item, index) => {
          return (
            <UIItems key={index} id={item.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}

export default BestSale