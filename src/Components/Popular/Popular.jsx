import React, { Component } from 'react'
import './Popular.css'
import data_best_sale from '../Assets/basket/data'
import { UIItems } from '../Item/UIItems';

export class Popular extends Component {
  renderItems = () => {
    let { onModify } = this.props;
    let contents = [];
    for (let sel of data_best_sale) {
      contents.push(
        <div>
          <UIItems key={sel.id} id={sel.id} item={sel} onModify={onModify} />
        </div>
      )
    }
    return contents;
  }

  render() {
    return (
      <div className='popular-body'>
        <div className='popular'>
          <h4 className='px-2'>Hải Sản Bán Chạy</h4>
          <div className='popular-items'>
            {this.renderItems()}
            {this.renderItems()}
            {this.renderItems()}
          </div>
        </div>
      </div>
    )
  }
}