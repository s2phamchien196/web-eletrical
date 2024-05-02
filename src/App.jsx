import React, { Component, useEffect } from "react";
import './App.css';
import { useLocation } from 'react-router-dom';

import { UIFooter } from './Components/Footer/Footer';
import { NavbarComponent } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UIProduct } from './Pages/UIProduct';
import { UIHomePage } from './Components/Home/UIHomePage';

import { UIStore } from "./Pages/Store";
import Navbar from "./AdminComponent/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import { UILogin } from "./AdminComponent/Login/Login";
import { severGET, setUser, getUser, setInfo } from './Components/AppContext'
import { UICart } from "./Components/Cart/UICart";
import { nextKey } from "./Lib/utils";
import { PaymentRequest } from "./Components/PaymentRequest/PaymentRequest";
import { PaymentRequestDetail } from "./Components/PaymentRequestDetail/PaymentRequestDetail";

export class UIApp extends Component {
  uikey = nextKey();

  constructor(props) {
    super(props);
    severGET('/info', {}, (bean) => {
      setInfo(bean);
      this.forceUpdate();
    })
    this.onRegister();
  }

  onRegister = () => {
    severGET('/userinfo/token', {}, (bean) => {
      setUser(bean);
      this.forceUpdate();
    })
  }

  render() {
    if (!getUser()) return;
    const currentURL = window.location.href;
    let checkAdmin = currentURL.includes('admin') ? true : false;
    return (
      <div className="App body flex-vbox">
        <div className='flex-grow-1'>
          {!checkAdmin ?
            <div className="flex-vbox">
              <BrowserRouter>
                <ScrollToTop />
                <NavbarComponent className={'flex-grow-0'} key={`nav-${this.uikey}`} user={getUser()} />
                <div className="main flex-grow-1">
                  <Routes>
                    <Route path='/' element={<UIHomePage onModify={() => this.forceUpdate()} />}></Route>
                    <Route path='/cua-hang' element={<UIStore onAddToCart={(item) => {
                      this.onRegister();
                    }} />}>
                      <Route path=':search' element={<UIStore onAddToCart={(item) => {
                        this.onRegister();
                      }} />} />
                    </Route>
                    <Route path='/product' element={<UIProduct onModify={() => this.forceUpdate()} />}>
                      <Route path=':productId' element={<UIProduct onModify={() => this.forceUpdate()} />} />
                    </Route>
                    <Route path='/login' element={<UILogin onModify={() => this.forceUpdate()} />}></Route>
                    <Route path='/cart' element={<UICart key={`cart-${nextKey()}`} onModify={() => this.forceUpdate()} />}></Route>
                    <Route path='/payment-request' element={<PaymentRequest onModify={() => {
                      this.uikey = nextKey();
                      this.forceUpdate();
                    }} />}></Route>
                    <Route path='/payment-request/order-received' element={<PaymentRequestDetail />}></Route>
                  </Routes>
                </div>
              </BrowserRouter>
            </div>
            :
            <div className="main">
              <BrowserRouter>
                <Navbar />
                <Admin />
              </BrowserRouter>
            </div>
          }
        </div>
        <div className='flex-grow-0'>
          <UIFooter />
        </div>
      </div>
    );
  }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
  return null;
};
