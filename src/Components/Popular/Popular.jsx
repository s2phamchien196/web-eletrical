import React, { Component } from 'react'
import './Popular.css'
import { UIItems } from '../Item/UIItems';
export class Popular extends Component {
  renderItems = () => {
    let { onModify, products } = this.props;
    let contents = [];
    for (let sel of products) {
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
          <div className='popular-items'>
            {this.renderItems()}
          </div>
        </div>
      </div>
    )
  }
}