import React, { Component } from "react";
import seafood from '../Assets/logo_seafood.png';
import cart_icon from '../Assets/cart_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './Navbar.css';
import { Link } from "react-router-dom";

export class NavbarComponent extends Component {
  listSeafood = [
    {
      name: 'homePage',
      label: 'Trang Chủ',
      link: "/"
    },
    {
      name: 'oneSun',
      label: 'Hải Sản 1 Nắng',
      link: "/one-sun"
    },
    {
      name: 'freshSeafood',
      label: 'Hải Sản Tươi',
      link: "/fresh-seafood"
    },
    {
      name: 'driedSeafood',
      label: 'Hải Sản khô',
      link: "/dried-seafood"
    },
    {
      name: 'fishSauce',
      label: 'Nước mắm Cát Hải',
      link: "/fish-sauce"
    },
  ];
  bean = {
    currentMenu: "homePage",
    contact: '098.178.0453',
    contactDescription: 'Hỗ Trợ 24/7',
    shopName: 'Hải Sản Minh Chiến',
    shopDescription: 'Đơn vị cung cấp số 1'
  }

  renderListMenu() {
    let contents = [];
    this.listSeafood.forEach(sel => {
      let hr = this.bean.currentMenu === sel.name ? <hr /> : null;
      contents.push(
        <li onClick={() => {
          this.bean.currentMenu = sel.name;
          this.forceUpdate();
        }}>
          <Link to={sel.link} style={{ textDecoration: 'none', color: '#626262' }}>{sel.label}</Link>{hr}
        </li>
      )
    });
    return contents;
  }

  render() {
    return (
      <div className={"navbar banner"}>
        <div className="nav-logo">
          <img src={seafood} style={{ height: 60, width: 60 }} alt="" />
          <div className="flex-vbox">
            <div className="flex-hbox" style={{ fontFamily: 'fantasy', marginTop: 15 }}>
              <h5 className="px-1 name-shop">{this.bean.shopName}</h5>
            </div>
            <div style={{ color: 'green', fontStyle: 'italic', fontFamily: 'fantasy', fontSize: 15 }}>{this.bean.shopDescription}</div>
          </div>
        </div>
        <ul className="nav-menu ">
          {this.renderListMenu()}
        </ul>
        <div className="nav-cart flex-grow-1 ">
          <div className='flex-grow-1 text-end'>
            <input
              type="search" className="search flex-grow-1" value="" placeholder="Tìm sản phẩm ...">
            </input>
          </div>
          <div className="flex-hbox flex-grow-0">
            <img className="mx-2 my-3" style={{ height: 30, width: 30 }} src={whatsapp_icon} alt="" />
            <div className="flex-vbox align-items-start ">
              <div>{this.bean.contactDescription}</div>
              <h4 style={{ color: 'royalblue' }}>
                {this.bean.contact}
              </h4>
            </div>
          </div>
          <Link to={'/cart'}>
            <img src={cart_icon} alt="" style={{ height: 30 }} />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div >
    )
  }
}