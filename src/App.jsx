import React, { Component } from "react";
import './App.css';

import { UIFooter } from './Components/Footer/Footer';
import policies from './Components/Assets/policies';
import UIPolicy from './Pages/UIPolicy';
import { NavbarComponent } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UIProduct } from './Pages/UIProduct';
import { UIHomePage } from './Components/Home/UIHomePage';

import { UIStore } from "./Pages/Store";
import Navbar from "./AdminComponent/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import { UILogin } from "./AdminComponent/Login/Login";
import { severGET, setUser, getUser, setInfo } from './Components/AppContext'

export class App extends Component {
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
            <div>
              <BrowserRouter>
                <NavbarComponent user={getUser()} />
                <div className="main">
                  <Routes>
                    <Route path='/' element={<UIHomePage onModify={() => this.forceUpdate()} />}></Route>
                    <Route path='/cua-hang' element={<UIStore onAddToCart={(item) => {
                      this.onRegister();
                    }} />}>
                      <Route path=':search' element={<UIStore onAddToCart={(item) => {
                        this.onRegister();
                      }} />} />
                    </Route>
                    <Route path='/product' element={<UIProduct />}>
                      <Route path=':productId' element={<UIProduct />} />
                    </Route>
                    <Route path='/login' element={<UILogin onModify={() => this.forceUpdate()} />}></Route>
                    {/* <Route path='/cart' element={<UI onModify={() => this.forceUpdate()} />}></Route> */}
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

export default App;
