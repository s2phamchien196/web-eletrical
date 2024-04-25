import React from 'react'
import './List.css'

const List = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
      <body>
        <div className="navbar-content">
          <ul className="exo-menu">
            <li>
              <a className="active" href="/"><i className="fa fa-home my-2"></i>Trang Chủ</a>
            </li>
            <li>
              <a className="active" href="/cua-hang">Cửa Hàng</a>
            </li>
            <li>
              <a className="active" href="/thuong-hieu">Thương Hiệu</a>
            </li>
            <li>
              <a className="active" href="/bang-gia">Bảng Giá</a>
            </li>
            <li>
              <a className="active" href="/tin-tuc">Tin Tức</a>
            </li>
            <li>
              <a className="active" href="/tuyen-dung">Tuyển Dụng</a>
            </li>
            <li>
              <a className="active" href="/lien-he">Liên Hệ</a>
            </li>
          </ul>
        </div>
      </body >
    </div >
  )
}
export default List