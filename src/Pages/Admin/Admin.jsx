import React from 'react'
import "./Admin.css"
import { Routes, Route } from 'react-router-dom'
import ListProduct from '../../AdminComponent/ListProduct/ListProduct'
import SideBar from '../../AdminComponent/Sidebar/SideBar'
import { AddProduct } from '../../AdminComponent/AddProduct/AddProduct'
import { AddMenu } from '../../AdminComponent/AddMenu/AddMenu'

const Admin = () => {
  return (
    <div className='admin'>
      <SideBar />
      <Routes>
        <Route path='/admin/addproduct' element={<AddProduct />} />
        <Route path='/admin/listproduct' element={<ListProduct />} />
        <Route path='/admin/addmenu' element={<AddMenu />} />
      </Routes>
    </div>
  )
}

export default Admin