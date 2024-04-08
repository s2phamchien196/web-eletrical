import React, { Component } from 'react'
import './Sale.css'
import { UIItems } from '../Item/UIItems';
import all_product from '../Assets/all_product';
import flash_sale_img from '../Assets/flash-sale.jpg'

export class UISale extends Component {
  render() {
    let { onModify } = this.props;
    let data_best_sale = all_product.filter(sel => sel.sale);
    let currentWidth = window.innerWidth;
    let flashContent = <p className='py-4 px-3'>Kết Thúc Trong</p>;
    if (currentWidth < 700) flashContent = null;
    return (
      <div className='flex-vbox' style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div className='sale-items'>
          <div className='sale-flash'>
            <img src={flash_sale_img} alt='' />
            {flashContent}
            <div>
              <UICountDown />
            </div>
          </div>
          <ScrollItems scrollSize={220} renderItems={() => {
            return (
              <div className='flex-hbox' style={{ gap: 20 }}>
                {data_best_sale.map((item, index) => {
                  return (
                    <UIItems key={index} id={item['ma-hang']} item={item} onModify={onModify} />
                  )
                })}
              </div>
            )
          }} />
        </div>
      </div>
    )
  }
}

export class ScrollItems extends Component {
  TIMEOUT = 6000;
  intervalId;
  index = 0;
  componentDidMount() {
    let { scrollSize } = this.props;
    this.intervalId = setInterval(() => this.scrollToLeft(scrollSize), this.TIMEOUT);
  }

  scrollContainerRef;
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef();
  }

  scrollToLeft = (val) => {
    const scrollContainer = this.scrollContainerRef.current;
    if (!scrollContainer || this.index % 2 !== 0) {
      this.index++;
      return;
    }
    this.index++;
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth) {
      const currentScrollPosition = scrollContainer.scrollLeft;
      const targetScrollPosition = currentScrollPosition + val;
      scrollContainer.scrollTo({
        left: targetScrollPosition,
        behavior: 'smooth'
      });
    } else {
      scrollContainer.scrollLeft = 0;
      this.index = 0;
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
    let { renderItems, scrollSize } = this.props;
    return (
      <div className='flex-hbox'>
        <div className='scroll-button'>
          <button className='button' onClick={() => this.scrollToRight(scrollSize)}>
            <i class="fa fa-angle-left"></i>
          </button>
        </div>
        <div ref={this.scrollContainerRef} className='container flex-grow-1'>
          {renderItems()}
        </div>
        <div className='scroll-button'>
          <button className='button button-right' onClick={() => this.scrollToLeft(scrollSize)}> <i class="fa fa-angle-right"></i></button>
        </div>
      </div>
    )
  }
}

class UICountDown extends Component {
  endTime = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  componentDidMount() {
    let dateEnd = new Date();
    dateEnd.setHours(23);
    dateEnd.setMinutes(59);
    dateEnd.setSeconds(59);
    this.endTime = dateEnd.getTime();

    this.updateCountdown = this.updateCountdown.bind(this);
    setInterval(this.updateCountdown, 1000);
  }

  updateCountdown() {
    let now = new Date();
    let rm = this.endTime - now.getTime();
    rm = rm / 1000;

    if (rm <= 0) {
      let dateEnd = new Date();
      dateEnd.setHours(23);
      dateEnd.setMinutes(59);
      dateEnd.setSeconds(59);
      this.endTime = dateEnd.getTime();
    }

    this.hours = Math.round(rm / 3600);
    this.minutes = Math.round((rm % 3600) / 60);
    this.seconds = Math.round(rm % 60);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="countdown">
        <div className='px-1'>
          {this.hours.toString().padStart(2, '0')} Giờ
        </div>
        <p>:</p>
        <div className='px-1'>
          {this.minutes.toString().padStart(2, '0')} Phút
        </div>
        <p>:</p>
        <div className='px-1'>
          {this.seconds.toString().padStart(2, '0')} Giây
        </div>
      </div>
    );
  }
}