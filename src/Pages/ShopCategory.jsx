import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import drop_icon from '../Components/Assets/dropdown_icon.png'
import { UIItems } from '../Components/Item/UIItems';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt='' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={drop_icon} alt='' />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (item && item.category === props.category) {
            return (
              <UIItems key={index} id={item.id} item={item} onModify={props.onModify} />
            )
          }
        }
        )}
      </div>
    </div>
  )
}

export default ShopCategory