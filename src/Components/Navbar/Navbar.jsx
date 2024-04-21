import React, { Component } from "react";
import seafood from '../Assets/logo_seafood.png';
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
      <div className="flex-vbox header">
        <div className={"navbar banner"}>
          <div className="nav-logo">
            <img src={seafood} style={{ height: 60, width: 60 }} alt="" />
            <div className="flex-vbox">
              <div className="flex-hbox" style={{ marginTop: 15 }}>
                {/* <h5 className="px-1 name-shop">{bean.shopName}</h5> */}
              </div>
              {/* <div style={{ color: 'green', fontStyle: 'italic', fontSize: 15 }}>{bean.shopDescription}</div> */}
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
              <div className="flex-vbox align-items-start ">
                <div>{bean.contactDescription}</div>
                <h4 style={{ color: 'royalblue' }}>
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
    )
  }
}