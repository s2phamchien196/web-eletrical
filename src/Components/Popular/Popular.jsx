import React, { Component } from 'react'
import './Popular.css'
import { UIItems } from '../Item/UIItems';
import all_product from '../Assets/all_product';

export class Popular extends Component {
  renderItems = () => {
    let { onModify } = this.props;
    let contents = [];
    for (let sel of all_product) {
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
          </div>
        </div>
      </div>
    )
  }
}