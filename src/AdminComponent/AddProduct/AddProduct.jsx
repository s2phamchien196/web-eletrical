import React, { Component } from 'react'
import './AddProduct.css'
import upload_area from '../assets/upload_area.svg'
import { host, severPOST, severGET, severImagePOST } from '../../Components/AppContext'
import { showNotification } from '../../Lib/input'

export class AddProduct extends Component {
  productDetails = {
    menu_name: "",
    group: "",
    code: "",
    label: "",
    image: "",
    unit: "",
    description: "",
    retail_price: 0,
    capital_price: 0
  }
  image;
  allmenus = [];

  constructor(props) {
    super(props);
    let { product } = this.props;
    severGET('/allmenus', {}, (data) => {
      this.allmenus = data;
      if (!product) {
        this.productDetails.menu_name = data[0].name;
      } else {
        this.productDetails = product;
        this.image = product.image
      }
      this.forceUpdate();
    });
  }

  imageHandler = (e) => {
    this.image = e.target.files[0];
    this.forceUpdate();
  };

  changeHandler = (e) => {
    this.productDetails[e.target.name] = e.target.value;
    if (e.target.name === 'menu_name') {
      let group = this.allmenus.find(sel => sel.name == this.productDetails.menu_name);
      this.productDetails['group'] = group['items'][0];
    }
    this.forceUpdate();
  }

  addProduct = async () => {
    let product = this.productDetails;

    let formData = new FormData();
    formData.append('product', this.image);
    severImagePOST('/upload', formData, (data) => {
      if (data.success) {
        product.image = data.image_url;
        severPOST('/addproduct', this.productDetails, (bean) => {
          if (data.success) {
            showNotification('Product Success Added', 'success')
            this.productDetails = {
              ...this.productDetails,
              code: "",
              label: "",
              image: "",
              unit: "",
              description: "",
              retail_price: 0,
              capital_price: 0
            };
            this.forceUpdate();
          } else {
            showNotification('Product Failed Added', 'danger')
          };
        })
      }
    })
  }
  saveProduct = async () => {
    let { onPostCommit } = this.props;
    severPOST('/saveproduct', this.productDetails, (bean) => {
      showNotification('Product Update Added', 'success')
      this.productDetails = bean;
      if (onPostCommit) {
        onPostCommit(bean);
      } else {
        this.forceUpdate();
      }
    }
    );
  }

  onRenderMenu = () => {
    let options = [];
    for (let sel of this.allmenus) {
      options.push(
        <option value={sel.name}>{sel.name}</option>
      )
    }
    return options;
  }

  onRenderGroups = () => {
    let options = [];
    let group = this.allmenus.find(sel => sel.name == this.productDetails.menu_name);
    if (!group) return options;
    for (let sel of group['items']) {
      options.push(
        <option value={sel} >{sel}</option>
      )
    }
    return options;
  }
  render() {
    if (this.allmenus.length == 0) return;
    return (
      <div className='add-product'>
        <div className="addproduct-itemfield">
          <div className='flex-hbox'>
            <div className='w-50'>
              <p>Danh Mục Sản Phẩm</p>
              <select value={this.productDetails.menu_name} onChange={this.changeHandler} name='menu_name' className='add-menu-name-selector'>
                {this.onRenderMenu()}
              </select>
            </div>
            <div div className='w-50 mx-1'>
              <p>Nhóm Hàng</p>
              <select value={this.productDetails.group} onChange={this.changeHandler} name='group' className='add-menu-name-selector'>
                {this.onRenderGroups()}
              </select>
            </div>
          </div>
          <div className='flex-hbox'>
            <div className='w-50'>
              <p>Mã Hàng</p>
              <input value={this.productDetails.code} onChange={this.changeHandler} type='text' name='code' placeholder='' />
            </div>
            <div className='w-50 mx-1'>
              <p>Tên Hàng</p>
              <input value={this.productDetails.label} onChange={this.changeHandler} type='text' name='label' placeholder='' />
            </div>
          </div>
          <p>Đơn Vị Tính</p>
          <input value={this.productDetails.unit} onChange={this.changeHandler} type='text' name='unit' placeholder='' />
          <div className='flex-hbox'>
            <div className='w-50'>
              <p>Đơn Giá Vốn </p>
              <input className='text-end' value={Math.round(Number(this.productDetails.capital_price))} onChange={this.changeHandler} type='text' name='capital_price' placeholder='' />
            </div>
            <div className='w-50 mx-1'>
              <p>Giá Bán Lẻ</p>
              <input className='text-end' value={Math.round(Number(this.productDetails.retail_price))} onChange={this.changeHandler} type='text' name='retail_price' placeholder='' />
            </div>
          </div>
        </div>
        <div className="flex-hbox addproduct-itemfield">
          <div style={{ marginTop: 20 }}>
            <label htmlFor='file-input'>
              {this.productDetails['_id'] ?
                <img src={host + this.image} className='addproduct-thumnail-img' alt='' />
                :
                <img src={this.image ? URL.createObjectURL(this.image) : upload_area} className='addproduct-thumnail-img' alt='' />
              }
            </label>
          </div>
          <input onChange={this.imageHandler} type='file' name='image' id='file-input' hidden />
          <div className='mx-2 flex-grow-1'>
            <p>Mô Tả</p>
            <textarea value={this.productDetails.description} onChange={this.changeHandler} type='text' name='description'
              className='flex-grow-1' style={{ height: 115, width: '100%' }} />
          </div>
        </div>
        <div className='flex-hbox' style={{ justifyContent: 'end' }}>
          {this.productDetails['_id'] ?
            <button onClick={this.saveProduct} className='addproduct-bnt' data-dismiss="modal">SAVE</button>
            :
            <button onClick={this.addProduct} className='addproduct-bnt'>ADD</button>
          }
        </div>
      </div >
    )
  }
}