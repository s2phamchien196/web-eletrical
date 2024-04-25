import React, { Component } from "react";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import List from "./List";
import { severGET } from '../AppContext'

export class NavbarComponent extends Component {
  param = {
    search: '',
  }
  infoData;
  constructor(props) {
    super(props)
    severGET('/info', {}, (bean) => {
      this.infoData = bean;
      this.forceUpdate();
    })
  }

  render() {
    if (!this.infoData) return;
    const handleChange = (event) => {
      this.param.search = event.target.value;
      this.forceUpdate();
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        window.location.href = `/cua-hang/${this.param.search}`;
      }
    };
    let buy = 0;
    return (
      <div className="navbar-main">
        <div className="flex-vbox header">
          <div className={"nav banner"}>
            <div className="flex-hbox">
              <img src={logo} style={{ width: 80, height: 80 }} alt="" />
            </div>
            <div className="nav-cart flex-grow-1 ">
              <div className='flex-grow-1 text-start'>
                <input
                  type="search" className="search flex-grow-1" value={this.param.search}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Tìm sản phẩm ...">
                </input>
              </div>
              <div className="flex-vbox flex-grow-0 text-start" style={{ color: 'white', fontWeight: 600 }}>
                <span>{'Liên Hệ 24/7'}</span>
                <div className="flex-hbox">
                  <img className="my-2" style={{ height: 15, width: 15 }} src={whatsapp_icon} alt="" />
                  <span className="px-1">{this.infoData.mobile}</span>/
                  <span className="px-1">Zalo:{this.infoData.zalo}</span>
                </div>
              </div>
              <Link to={'/cart'}>
                <img src={cart_icon} alt="" style={{ height: 30 }} />
              </Link>
              <div className="nav-cart-count">{buy}</div>
            </div>
          </div >
          <List />
        </div>
      </div>
    )
  }
}