import React, { Component } from "react";
import './App.css';

import Footer from './Components/Footer/Footer';
import policies from './Components/Assets/policies';
import UIPolicy from './Pages/UIPolicy';
import { NavbarComponent } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UIProduct } from './Pages/UIProduct';

import { UIStore } from "./Pages/Store";
import Navbar from "./AdminComponent/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import { UILogin } from "./AdminComponent/Login/Login";

const renderRoutePolicy = () => {
  let policyContents = [];
  for (let key in policies) {
    let policy = policies[key];
    policyContents.push(
      <Route path={policy.path} element={<UIPolicy policy={policy} />}></Route>
    )
  }
  return policyContents;
}

export class App extends Component {
  render() {
    const currentURL = window.location.href;
    let checkAdmin = currentURL.includes('admin') ? true : false;
    return (
      <div className="App body flex-vbox" style={{ height: '100vh' }}>
        <div className='flex-grow-1'>
          {!checkAdmin ?
            <BrowserRouter className='main'>
              <NavbarComponent />
              <Routes>
                <Route path='/' element={<UIStore onModify={() => this.forceUpdate()} />}></Route>
                {renderRoutePolicy()}
                <Route path='/cua-hang' element={<UIStore onModify={() => this.forceUpdate()} />}>
                  <Route path=':search' element={<UIStore onModify={() => this.forceUpdate()} />} />
                </Route>
                <Route path='/product' element={<UIProduct />}>
                  <Route path=':productId' element={<UIProduct />} />
                </Route>
                <Route path='/login' element={<UILogin onModify={() => this.forceUpdate()} />}></Route>
                {/* <Route path='/cart' element={<UI onModify={() => this.forceUpdate()} />}></Route> */}
              </Routes>
            </BrowserRouter>
            :
            <BrowserRouter>
              <Navbar />
              <Admin />
            </BrowserRouter>
          }
        </div>
        <div className='flex-grow-0'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
