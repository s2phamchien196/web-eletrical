import React, { Component } from "react";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import List from "./List";
import info_data from '../Assets/info_data';


export class NavbarComponent extends Component {
  param = {
    search: '',
  }
  render() {
    const handleChange = (event) => {
      this.param.search = event.target.value;
      this.forceUpdate();
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        window.location.href = `/cua-hang/${this.param.search}`;
      }
    };
    let bean = info_data.bannerInfo;
    let buy = info_data.userBuy.total;
    return (
      <div className="navbar-main">
        <div className="flex-vbox header">
          <div className={"nav banner"}>
            <div className="nav-logo">
              <img src={logo} style={{ height: 60, width: 60 }} alt="" />
              <div className="flex-vbox">
                <div className="flex-hbox" style={{ marginTop: 15 }}>
                </div>
              </div>
            </div>
            <div className="nav-cart flex-grow-1 ">
              <div className='flex-grow-1 text-end'>
                <input
                  type="search" className="search flex-grow-1" value={this.param.search}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Tìm sản phẩm ...">
                </input>
              </div>
              <div className="flex-hbox flex-grow-0">
                <img className="mx-2 my-3" style={{ height: 30, width: 30 }} src={whatsapp_icon} alt="" />
                <div className="flex-vbox align-items-start" style={{ color: 'white' }}>
                  <div>{bean.contactDescription}</div>
                  <h4>
                    {bean.contact}
                  </h4>
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