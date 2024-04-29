import React, { Component } from "react";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import phone from '../Assets/phone.png';
import zalo from '../Assets/zalo.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import List from "./List";
import { severGET, setUser, getUser, getInfo } from '../AppContext'
import { showDialog } from "../../Lib/input";
import { UILogin } from "../Login/Login";
import Cookies from "js-cookie";

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
    });
  }

  onRegister = () => {
    severGET('/userinfo/token', {}, (bean) => {
      setUser(bean);
      this.forceUpdate();
    })
  }

  render() {
    let info = getInfo();
    let user = getUser();
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
    let quantity = user['total_quantity'] ? user['total_quantity'] : 0;
    return (
      <div className="nav-header">
        <div className="navbar-main">
          <div className="flex-vbox header">
            <div className={"nav-banner"}>
              <div className="flex-hbox">
                <img src={logo} style={{ width: 80, height: 80 }} alt="" />
              </div>
              <div className='text-start'>
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
              {user['_id'] ?
                <div className="flex-hbox btn-userinfo">
                  <button type="button" className="btn btn-link btn-md">
                    {user.username}
                  </button> /
                  <button type="button" className="btn btn-link btn-md" onClick={() => {
                    Cookies.set('user', '', 0);
                    localStorage.removeItem('auth-token');
                    user = null;
                    window.location.reload();
                  }}>
                    {'Đăng Xuất'}
                  </button>
                </div>
                :
                <button type="button" className="btn-login btn btn-primary btn-md" data-toggle="modal" data-target="#login" onClick={() => {
                  showDialog('login', 'Đăng Nhập', <UILogin onPostCommit={this.onRegister} />)
                }}>
                  {'Đăng Nhập'}
                </button>
              }
              <div className="nav-cart">
                <Link to={'/cart'}>
                  <img src={cart_icon} alt="" style={{ height: 30 }} />
                </Link>
                <div className="nav-cart-count">{quantity}</div>
              </div>
            </div >
            <List />
          </div>
        </div>
        <div className="menu-contact-zf">
          <div className="zalo-pulse">
            <a href={`https://zalo.me/${info.zalo}`} className="zalo-shake" style={{ cursor: 'pointer' }}>
              <img src={zalo} alt="" />
            </a>
          </div>
          <div className="phone-pulse">
            <a href={`tel:${info.mobile}`} className="phone-shake" style={{ cursor: 'pointer' }}>
              <img src={phone} alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}