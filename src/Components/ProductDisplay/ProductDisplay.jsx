import React, { Component } from 'react'
import './ProductDisplay.css'
import select_icon from '../Assets/select_icon.svg';

export class UIProductDisplay extends Component {
  img;
  currentSelectOption = 0;
  oldPrice;
  newPrice;
  sale;
  option;

  constructor(props) {
    super(props);
    let { product } = this.props;
    let options = product['options'];
    let option = options[0];
    let exchange = option['ty-le'];
    let oldPrice = Number(product['gia']);
    let newPrice = Number(product['gia-ban']);
    this.oldPrice = oldPrice * exchange;
    this.newPrice = newPrice * exchange;
    if (oldPrice) {
      this.sale = Math.round((oldPrice - newPrice) / oldPrice * 100);
    }
    this.option = option['qui-cach'];
  }

  renderSale = () => {
    if (!this.oldPrice) return;
    return (
      <div className="flex-hbox align-items-end py-1 px-2 my-2" style={{ lineHeight: '20px' }}>
        <div className="item-price-old ">
          {this.oldPrice.toLocaleString()}
        </div>
        <div className="sale mx-2">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23077 0H4.23077L0 7.82222L3.5 9.14286V16L10 5.68889L6.53846 4.62222L9.23077 0Z" fill="url(#paint0_linear_2216_10611)"></path><defs><linearGradient id="paint0_linear_2216_10611" x1="0" y1="0" x2="0" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#EE4D2D"></stop><stop offset="1" stop-color="#FF7337"></stop></linearGradient></defs></svg>
          -{this.sale}%
        </div>
      </div>
    )
  }

  renderOptions = () => {
    let { product } = this.props;
    let options = product['options'];
    let buttons = [];
    let onClick = (selectIndex) => {
      this.currentSelectOption = selectIndex;
      let option = options[selectIndex];
      let exchange = option['ty-le'];
      let oldPrice = Number(product['gia']);
      let newPrice = Number(product['gia-ban']);
      this.oldPrice = oldPrice * exchange;
      this.newPrice = newPrice * exchange;

      if (oldPrice) {
        this.sale = Math.round((oldPrice - newPrice) / oldPrice * 100);
      }
      this.option = option['qui-cach'];
      this.forceUpdate();
    }
    for (let i = 0; i < options.length; i++) {
      let option = options[i];
      if (i === this.currentSelectOption) {
        buttons.push(
          <button key={`options-${i}`} className='button-select'>
            {option['qui-cach']}
            <img src={select_icon} alt='select' />
          </button>
        )
      } else {
        buttons.push(<button key={`options-${i}`} className='button-unselect' onClick={() => onClick(i)}>
          {option['qui-cach']}
        </button>
        )
      }
    }
    return (
      <div class="dropdown px-2">
        {buttons}
      </div>
    );
  }

  render() {
    let { product } = this.props;
    if (!this.img) this.img = product.image[0];
    return (
      <div className='productdisplay'>
        <div className='productdisplay-left'>
          <img className="productdisplay-main-img" src={this.img} alt='' />
          <UIMiniScrollItems items={product.image} onModify={(img) => {
            this.img = img;
            this.forceUpdate();
          }} />
        </div>
        <div className="productdisplay-right mx-5">
          <h3>{product['ten-hang']}</h3>
          <div>
            <b>{'Mã SP'}</b> : <span>{product['ma-hang']}</span>
          </div>
          <div>
            <b>{'Quy Cách'}</b> : <span>{product['quy-cach']}</span>
          </div>
          <div>
            <b>{'Xuất xứ'}</b> : <span>{product['xuat-xu']}</span>
          </div>
          {product['mon-ngon'] ?
            <div>
              <b>{'Món ngon'}</b> : <span>{product['mon-ngon']}</span>
            </div> : null
          }
          <div className="flex-hbox">
            <div className="price-new">
              {this.newPrice.toLocaleString()}{'đ'}<span>/{`${this.option}`}</span>
            </div>
            {this.renderSale()}
          </div>
          <div className='flex-hbox'>
            <b>{'Chọn : '}</b>
            {this.renderOptions()}
          </div>
          <div className="quantity_wrap my-2">
            <span className="btn_quan btn_minus">-</span>
            <input min="1" type="number" title="Số lượng" readonly="" id="quantity" className="quantity" name="quantity" value="1" />
            <span className="btn_quan btn_plus">+</span>
          </div>
        </div>
      </div>
    )
  }
}

class UIMiniScrollItems extends Component {

  render() {
    let { items, onModify } = this.props;
    return (
      <div className='flex-hbox my-2' style={{ width: 300, height: 70 }}>
        <div className='mini-scroll-item flex-grow-1'>
          {items.map(sel => {
            return (
              <img src={sel} alt='' onClick={() => onModify(sel)} />
            )
          })}
        </div>
      </div>
    )
  }
}