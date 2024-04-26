import React, { Component } from 'react'
import './Menu.css'
import { severGET } from '../../Components/AppContext'
import { AddMenu } from './AddMenu'
import { showDialog } from '../../Lib/input'

export class MenuList extends Component {
  menus = [];
  constructor(props) {
    super(props);
    this.onReloadData();
  }

  onReloadData() {
    severGET('/allmenus', {}, (beans) => {
      console.log('onReloadData');
      this.menus = beans;
      this.forceUpdate();
    })

  }

  render() {
    if (!this.menus) return;
    return (
      <div className='list-menu'>
        <div className='flex-hbox w-100'>
          <h3 className='flex-grow-1'>List Menu {`(${this.menus.length})`}</h3>
          <button type="button" className={`btn btn-info btn-lg`} data-toggle="modal" data-target="#add-menu" onClick={() => {
            showDialog('add-menu', 'New Menu', <AddMenu onPostCommit={(bean) => {
              this.onReloadData();
            }} />)
          }}>
            {'Add'}
          </button>
        </div>
        <div className="listmenu-format-main">
          <div>Name</div>
          <div>Items</div>
        </div>
        <div className="listmenu-allmenus">
          <hr />
          {this.menus.map((menu, index) => {
            return (
              <div>
                <div key={index} className='listmenu-format-main listmenu-format'>
                  <button type="button" className={`btn-link`} data-toggle="modal" data-target={`#menu-${index}`} onClick={() => {
                    showDialog(`menu-${index}`, 'Detail', <AddMenu menu={menu} onPostCommit={() => this.onReloadData()} />)
                  }}>
                    {menu.name}
                  </button>
                  <div className='flex-hbox' style={{ alignItems: 'center', justifyContent: 'center' }}>[
                    {menu.items.map((item, index) => {
                      return (
                        <span className='px-2'>{`${item},`}</span>
                      )
                    })}
                    ]
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}