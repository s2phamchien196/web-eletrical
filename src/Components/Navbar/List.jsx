import React, { useEffect, useState } from 'react'
import './List.css'
import { BBOffcanvas } from '../../Lib/input'
import * as FeatherIcon from 'react-feather'

export const OffCanvasList = () => {
  let html = (
    < div className="navbar-content" >
      <ul>
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
    </div >
  )
  return (<BBOffcanvas icon={<FeatherIcon.List />} html={html} />)
}

const List = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowSize.width < 768) {
    return null;
  }

  return (
    <div>
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
            {windowSize.width > 992 ?
              <li>
                <a className="active" href="/tuyen-dung">Tuyển Dụng</a>
              </li> : null
            }
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