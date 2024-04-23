import React, { Component } from 'react'
import './AddMenu.css'
import upload_area from '../assets/upload_area.svg'
import { host, severPOST, severGET, severImagePOST } from '../../Components/AppContext'

export class AddMenu extends Component {
  menuDetails = {
    name: "",
    items: "",
  }

  changeHandler = (e) => {
    this.menuDetails[e.target.name] = e.target.value;
    this.forceUpdate();
  }

  addMenu = async () => {
    let menu = this.menuDetails;
    let items = this.menuDetails.items.split(',');
    severPOST('/addmenu', { name: menu.name, items: items }, (bean) => {
      this.menuDetails = {
        name: "",
        items: "",
      };
      alert("Menu Success Added")
      this.forceUpdate();
    });
  }
  // saveProduct = async () => {
  //   let { onModify } = this.props;
  //   severPOST('/saveproduct', this.productDetails, (bean) => {
  //     alert("Product Update Success ")
  //     this.productDetails = bean;
  //     if (onModify) {
  //       onModify(bean);
  //     } else {
  //       this.forceUpdate();
  //     }
  //   }
  //   );
  // }

  // onRenderMenu = () => {
  //   let options = [];
  //   for (let sel of this.allmenus) {
  //     options.push(
  //       <option value={sel.name}>{sel.name}</option>
  //     )
  //   }
  //   return options;
  // }

  render() {
    return (
      <div className='add-product'>
        <div className="addproduct-itemfield">
          <p>Name</p>
          <input value={this.menuDetails.name} onChange={this.changeHandler} type='text' name='name' placeholder='' />
          <p>Items</p>
          <input value={this.menuDetails.items} onChange={this.changeHandler} type='text' name='items' placeholder='' />
        </div>
        <div className='flex-hbox' style={{ justifyContent: 'end' }}>
          {this.menuDetails['_id'] ?
            <button onClick={this.addMenu} className='addproduct-bnt'>SAVE</button>
            :
            <button onClick={this.addMenu} className='addproduct-bnt'>ADD</button>
          }
        </div>
      </div >
    )
  }
}