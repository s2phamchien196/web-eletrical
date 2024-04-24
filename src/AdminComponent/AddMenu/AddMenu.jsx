import React, { Component } from 'react'
import './Menu.css'
import { severPOST } from '../../Components/AppContext'
import { BBMultiField, showNotification } from '../../Lib/input'

export class AddMenu extends Component {
  menuDetails = {
    name: "",
    items: [],
  }

  constructor(props) {
    super(props);
    let { menu } = this.props;
    if (menu) {
      this.menuDetails = menu;
      this.forceUpdate();
    }
  }

  changeHandler = (e) => {
    this.menuDetails[e.target.name] = e.target.value;
    this.forceUpdate();
  }

  saveMenu = async () => {
    let { onPostCommit } = this.props;
    let menu = this.menuDetails;
    let items = menu['items'].filter(sel => sel);
    menu['items'] = items;
    severPOST('/savemenu', menu, (bean) => {
      this.menuDetails = {
        name: "",
        items: "",
      };
      if (onPostCommit) {
        console.log(onPostCommit);
        onPostCommit(bean);
      }
      showNotification('Menu Success Added', 'success')
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className='add-menu'>
        <div className="addmenu-itemfield">
          <p>Name</p>
          <input value={this.menuDetails.name} onChange={this.changeHandler} type='text' name='name' placeholder='' />
          <BBMultiField label={'Items'} bean={this.menuDetails} fieldName={'items'} />
        </div>
        <div className='flex-hbox' style={{ justifyContent: 'end' }}>
          <button onClick={this.saveMenu} className='addmenu-bnt' data-dismiss="modal">SAVE</button>
        </div>
      </div >
    )
  }
}