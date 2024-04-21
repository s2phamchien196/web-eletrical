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
            <li>
              <a className="active" href="/"><i className="fa fa-home"></i>Trang Chủ</a>
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