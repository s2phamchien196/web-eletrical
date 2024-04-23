import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
import add_product_item from '../assets/Product_Cart.svg'
import product_list_icon from '../assets/Product_list_icon.svg'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/admin/addproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_item} alt='' />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/admin/listproduct'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={product_list_icon} alt='' />
          <p>Product List</p>
        </div>
      </Link>
      <Link to={'/admin/addmenu'} style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_item} alt='' />
          <p>Add Menu</p>
        </div>
      </Link>
    </div>
  )
}

export default SideBar