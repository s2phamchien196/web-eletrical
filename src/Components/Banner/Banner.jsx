
import React, { Component } from 'react'
import './Banner.css'
import all_product from '../Assets/all_product';

export class UIBanner extends Component {
  TIMEOUT = 700;
  data = [];
  imageList = [];
  bean = {
    index: 1,
    maxReturn: 4,
  }
  intervalId;

  constructor() {
    super([]);
    all_product.forEach(sel => {
      if (sel.banner === true) {
        this.data.push(sel);
      }
    });
  }

  componentDidMount = () => {
    this.intervalId = setInterval(this.handleNext, 10000);
  }

  handleNext = () => {
    let currIndex = this.bean.index;
    let maxReturn = this.bean.maxReturn;
    if (currIndex > maxReturn) {
      currIndex = 1;
      this.bean.index = currIndex;
    } else {
      currIndex = currIndex + 0.5;
      this.bean.index = currIndex;
    }
    if (currIndex % 1 === 0) this.forceUpdate();
  };

  renderSlideItems = () => {
    let contents = [];
    for (let index = 0; index < this.data.length; index++) {
      let sel = this.data[index];
      let images = sel['image'];
      let image = '';
      if (images.length > 0) image = images[0];
      contents.push(
        <div className={`slider slide-${index + 1}`}>
          <img src={image} alt="" />
          <div className="slider-content">
            <h4>Bán Chạy</h4>
            <h2>{sel['ten-hang']}</h2>
            <button type="button" className="buy-now-btn" name="button">{sel['mo-ta']}</button>
          </div>
          <div className="number-pagination">
            <span>{index + 1}</span>
          </div>
        </div>
      )
    }

    return contents;
  }

  render() {
    let getChecked = (index) => {
      if (this.bean.index === index) return true;
      return false;
    }

    let onClickChecked = (index) => {
      this.bean.index = index;
      clearInterval(this.intervalId);
      this.forceUpdate();
    }

    return (
      <div className='banner-img'>
        <div className="css-slider-wrapper">
          <input type="radio" name="slider" className="slide-radio1" checked={getChecked(1)} id="slider_1"
            onClick={() => onClickChecked(1)} />
          < input type="radio" name="slider" className="slide-radio2" checked={getChecked(2)} id="slider_2"
            onClick={() => onClickChecked(2)} />
          <input type="radio" name="slider" className="slide-radio3" checked={getChecked(3)} id="slider_3"
            onClick={() => onClickChecked(3)} />
          <input type="radio" name="slider" className="slide-radio4" checked={getChecked(4)} id="slider_4"
            onClick={() => onClickChecked(4)} />
          <div className="slider-pagination">
            <label for="slider_1" className="page1"></label>
            <label for="slider_2" className="page2"></label>
            <label for="slider_3" className="page3"></label>
            <label for="slider_4" className="page4"></label>
          </div>
          {this.renderSlideItems()}
        </div>
      </div >
    )
  }
}

