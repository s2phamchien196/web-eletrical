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
    let { menuName, filter } = this.props;
    return (
      <div className='popular-body'>
        <div className='popular'>
          <h4 className='px-2'>{menuName}  {filter ? <span style={{ fontSize: 15 }}>/ {filter}</span> : <></>}</h4>

          <div className='popular-items'>
            {this.renderItems()}
          </div>
        </div>
      </div>
    )
  }
}