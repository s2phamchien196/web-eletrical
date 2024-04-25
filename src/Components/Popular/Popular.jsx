import React, { Component } from 'react'
import './Popular.css'
import { UIItems } from '../Item/UIItems';
export class Popular extends Component {
  renderItems = () => {
    let { onModify, products } = this.props;
    let contents = [];
    let i = 0;
    for (let sel of products) {
      contents.push(
        <UIItems key={`items-${i}`} item={sel} onModify={onModify} />
      );
      i++;
    }
    return contents;
  }

  render() {
    return (
      <div className='popular-body popular popular-items'>
        {this.renderItems()}
      </div>
    )
  }
}