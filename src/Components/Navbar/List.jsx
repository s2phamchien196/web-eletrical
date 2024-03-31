import React from 'react'
import './List.css'
import seafood_data from '../Assets/info_data';
import { Link } from 'react-router-dom';
import Blog from './Blog';


const renderListMenu = () => {
  let contents = [];
  seafood_data.menu.forEach(sel => {
    contents.push(
      <li onClick={() => {
      }}>
        <Link to={sel.link}>{sel.label}</Link>
      </li>
    )
  });
  return contents;
}

const List = () => {
  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css' />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
      <body>
        <div className="content">
          <ul className="exo-menu">
            <li className="drop-down"><a href='/'><i className="fa fa-list"></i>Danh Mục Sản Phẩm</a>
              <ul className="drop-down-ul animated fadeIn">
                {renderListMenu()}
              </ul>
            </li>
            <li><a className="active" href="/"><i className="fa fa-home"></i> Trang Chủ</a>
            </li>
            <li><a href="/product">Đổi Trả Miễn Phí Tại Nhà</a></li>
            <li><a href="/truyen-hinh">Giao Hàng Từ 150.000Đ</a></li>
            <li><a href="/phan-hoi">Hệ Thống Cửa Hàng</a></li>
            <li className="blog-drop-down"><a href="/blog">Khuyến Mại</a>
              <Blog />
            </li>
          </ul>
        </div>
      </body >
    </div >
  )
}
export default List