import React, { Component } from "react";
import './App.css';
import Footer from './Components/Footer/Footer';
import UITv from './Pages/UITv';
import UINews from './Pages/UINews';
import UIFeedback from './Pages/UIFeedback';
import policies from './Components/Assets/policies';
import UIPolicy from './Pages/UIPolicy';
import { NavbarComponent } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UISeafoodMain } from './Pages/UISeafood';
import { UIProduct } from './Pages/UIProduct';
import { UICart } from './Pages/UICart';

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
    console.log('Log');
    return (
      <div className="App body flex-vbox" style={{ height: '100vh' }}>
        <div className='flex-grow-1'>
          <BrowserRouter>
            <NavbarComponent />
            <Routes>
              <Route path='/' element={<UISeafoodMain onModify={() => this.forceUpdate()} />}></Route>
              {renderRoutePolicy()}
              <Route path='/shop' element={<UISeafoodMain />}></Route>
              <Route path='/truyen-hinh' element={<UITv />}></Route>
              <Route path='/bao-tri' element={<UINews />}></Route>
              <Route path='/phan-hoi' element={<UIFeedback />}></Route>
              <Route path='/product' element={<UIProduct />}>
                <Route path=':productId' element={<UIProduct />} />
              </Route>
              <Route path='/cart' element={<UICart />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <div className='flex-grow-0'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
