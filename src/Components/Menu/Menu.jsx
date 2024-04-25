import React, { Component } from 'react'
import './Menu.css';
import * as FeatherIcon from 'react-feather';

import { severGET } from '../AppContext'
import { Popular } from '../Popular/Popular';
import { scrollUpHeader } from '../../Lib/utils'

export class Menu extends Component {
  allMenus = [];
  selected = 'Cửa Hàng';
  products = [];
  filterProducts = [];
  uikey = 0;

  constructor(props) {
    super(props);
    let { filter } = props;
    severGET('/allmenus', {}, (data) => {
      this.allMenus = data;
    });

    severGET('/product', {}, (beans) => {
      if (filter) {
        for (let sel of beans) {
          let label = sel['label'];
          if (label.includes(filter)) this.products.push(sel);
        }
      } else {
        this.products = beans;
      }
      this.filterProducts = this.products;
      this.forceUpdate();
    })
  }

  onChange = (sel, collapse) => {
    sel['collapse'] = collapse;
    this.forceUpdate();
  }

  onRenderItems = (items) => {
    let menus = [];
    let i = 0;
    for (let sel of items) {
      menus.push(
        <li key={`menu-item-${i}`} onClick={() => this.onShowItems(sel, 'group')}>
          {sel}
        </li>
      )
      i++;
    }
    return menus;
  }

  onShowItems = (name, fieldName) => {
    this.selected = name;
    this.filterProducts = this.products.filter(sel => sel[fieldName] == name);
    this.uikey++;
    scrollUpHeader();
    this.forceUpdate();
  }

  onRenderLi = () => {
    let menus = [];
    let i = 0;
    for (let sel of this.allMenus) {
      let collapse = sel['collapse'] ? true : false;
      sel['collapse'] = collapse;
      let filter = this.products.filter(p => p.menu_name === sel.name);
      let count = filter ? filter.length : 0;

      menus.push(
        <li key={`menu-${i}`} className='flex-vbox' style={{ cursor: 'pointer' }}>
          <div className='flex-hbox'>
            <div className='flex-grow-1' onClick={() => this.onShowItems(sel.name, 'menu_name')}>
              {sel.name}
            </div>
            <span className='menu-count'>({count})</span>
            {collapse ?
              <FeatherIcon.ChevronUp size={20} style={{ margin: 'auto' }} onClick={() => this.onChange(sel, false)} />
              :
              <FeatherIcon.ChevronDown size={20} style={{ margin: 'auto' }} onClick={() => this.onChange(sel, true)} />
            }
          </div>
          {collapse ?
            <ul className='menu-items my-1'>
              {this.onRenderItems(sel['items'])}
            </ul>
            : null
          }
        </li>
      )
      i++;
    }
    return menus;
  }
  render() {
    let { onModify, filter } = this.props;
    let h = 56;
    let height = this.allMenus.length * h;
    for (let sel of this.allMenus) {
      if (sel['collapse']) height += (sel['items'].length * h);
    }
    if (this.filterProducts.length == 0) return;
    return (
      <div className='flex-vbox'>
        <div className='menu-breadcrum flex-hbox'>
          <span>{'Trang chủ /'}</span>
          <span className='px-2' style={filter ?? { fontWeight: 500 }}>{this.selected}
            {filter ? <span>/<span style={{ fontWeight: 500 }}>{filter}</span></span> : <></>}</span>
        </div>
        <div className='flex-hbox'>
          <div className='menu flex-grow-0' style={{ height: height }}>
            <div className='menu-header'>
              Danh Mục Sản Phẩm
            </div>
            <ul className='menu-items'>
              {this.onRenderLi()}
            </ul>
          </div >
          <div className='flex-grow-1'>
            <Popular key={`popular-${this.uikey}`} products={this.filterProducts} filter={filter} menuName={this.selected} onModify={onModify} />
          </div>
        </div>
      </div>
    )
  }
}