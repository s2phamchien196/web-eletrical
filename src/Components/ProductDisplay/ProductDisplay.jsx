import React, { Component } from 'react'
import './ProductDisplay.css'
import start_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png'

export class UIProductDisplay extends Component {
  render() {
    let { product } = this.props;
    let price = product.price[0];
    return (
      <div className='productdisplay'>
        <div className='productdisplay-left'>
          <img className="productdisplay-main-img" src={product.path} alt='' />
          <UIMiniScrollItems items={[product.path, product.path, product.path, product.path, product.path, product.path, product.path]} />
        </div>
        <div className="productdisplay-right">
          <h1>{product.label}</h1>
          <div className="productdisplay-right-start">
            <img src={start_icon} alt='' />
            <img src={start_icon} alt='' />
            <img src={start_icon} alt='' />
            <img src={start_icon} alt='' />
            <img src={start_dull_icon} alt='' />
            <p>{product.start}</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              {price.oldPrice}
            </div>
            <div className="productdisplay-right-price-new">
              {price.newPrice}
            </div>
            <div className="productdisplay-right-description">
              description
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class UIMiniScrollItems extends Component {
  scrollContainerRef;
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef();
  }

  scrollToLeft = (val) => {
    const scrollContainer = this.scrollContainerRef.current;
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth) {
      const currentScrollPosition = scrollContainer.scrollLeft;
      const targetScrollPosition = currentScrollPosition + val;
      scrollContainer.scrollTo({
        left: targetScrollPosition,
        behavior: 'smooth'
      });
    } else {
      scrollContainer.scrollLeft = 0;
    }
    this.forceUpdate();
  };

  scrollToRight = (val) => {
    const scrollContainer = this.scrollContainerRef.current;
    if (!scrollContainer) return;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    } else {
      const currentScrollPosition = scrollContainer.scrollLeft;
      const targetScrollPosition = currentScrollPosition - val;
      scrollContainer.scrollTo({
        left: targetScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  render() {
    let { items } = this.props;
    return (
      <div className='flex-hbox' style={{ width: 300, height: 60 }}>
        <div className='mini-scroll-button'>
          <button className='button' onClick={() => this.scrollToRight(50)}>
            <i class="fa fa-angle-left"></i>
          </button>
        </div>
        <div ref={this.scrollContainerRef} className='mini-scroll-item flex-grow-1' style={{ height: 80, width: 300, paddingBottom: 20 }}>
          {items.map(sel => {
            return (
              <img src={sel} alt='' />
            )
          })}
        </div>
        <div className='mini-scroll-button'>
          <button className='button button-right' onClick={() => this.scrollToLeft(50)}> <i class="fa fa-angle-right"></i></button>
        </div>
      </div>
    )
  }
}