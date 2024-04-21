import React, { Component, useEffect, useState } from 'react'
import './Menu.css';
import * as FeatherIcon from 'react-feather';

import { severGET } from '../AppContext'
import { Popular } from '../Popular/Popular';

export class Menu extends Component {
  allMenus = [];
  selected = 'Cửa Hàng';
  products = [];
  constructor(props) {
    super(props);
    let { filter } = props;
    severGET('/allmenus', {}, (data) => {
      this.allMenus = data;
      this.forceUpdate()
    });

    severGET('/product', {}, (beans) => {
      if (filter) {
        console.log(filter);
        for (let sel of beans) {
          let label = sel['label'];
          if (label.includes(filter)) this.products.push(sel);
        }
      } else {
        this.products = beans;
      }
      this.forceUpdate();
    })
  }

  onChange = (sel, collapse) => {
    sel['collapse'] = collapse;
    this.forceUpdate();
  }

  onRenderItems = (items) => {
    let menus = [];
    for (let sel of items) {
      menus.push(
        <li onClick={() => this.onShowItems(sel, 'group')}>
          {sel}
        </li>
      )
    }
    return menus;
  }

  onShowItems = (name, fieldName) => {
    this.selected = name;
    severGET('/product', { name: name, fieldName: fieldName }, (beans) => {
      this.products = beans;
      this.forceUpdate();
    })
  }

  onRenderLi = () => {
    let menus = [];
    for (let sel of this.allMenus) {
      let collapse = sel['collapse'] ? true : false;
      sel['collapse'] = collapse;

      menus.push(
        <li className='flex-vbox' style={{ cursor: 'pointer' }}>
          <div className='flex-hbox'>
            <div className='flex-grow-1' onClick={() => this.onShowItems(sel.name, 'menu_name')}>
              {sel.name}
            </div>
            {collapse ?
              <FeatherIcon.ChevronUp size={12} style={{ margin: 'auto' }} onClick={() => this.onChange(sel, false)} />
              :
              <FeatherIcon.ChevronDown size={12} style={{ margin: 'auto' }} onClick={() => this.onChange(sel, true)} />
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
    }
    return menus;
  }
  render() {
    let { onModify, filter } = this.props;
    let h = 38;
    let height = this.allMenus.length * h;
    for (let sel of this.allMenus) {
      if (sel['collapse']) height += (sel['items'].length * h);
    }
    return (
      <div className='flex-hbox'>
        <div className='menu' style={{ height: height }}>
          <div className='menu-header'>
            Danh Mục Sản Phẩm
          </div>
          <ul className='menu-items'>
            {this.onRenderLi()}
          </ul>
        </div >
        <Popular products={this.products} filter={filter} menuName={this.selected} onModify={onModify} />
      </div>
    )
  }
}