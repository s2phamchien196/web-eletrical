import React, { Component } from 'react'
import './Popular.css'
import { UIItems } from '../Item/UIItems';
import { scrollUpHeader } from '../../Lib/utils'
export class Popular extends Component {
  currentIndex = 0;
  breakPages = [];

  constructor(props) {
    super(props);
    let { products } = this.props;

    const chunkSize = 20;
    const chunkedLists = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      const chunk = products.slice(i, i + chunkSize);
      chunkedLists.push(chunk);
    }
    this.breakPages = chunkedLists;
    this.forceUpdate();
  }

  renderItems = (products) => {
    let { onModify } = this.props;
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

  onClick = (index) => {
    this.currentIndex = index;
    scrollUpHeader();
    this.forceUpdate();
  }

  renderButton = () => {
    let buttons = []
    if (this.breakPages.length < 1) return;
    this.breakPages.forEach((sel, index) => {
      buttons.push(
        <button className='btn-info btn-md p-3 m-2' key={`popular-pages-btn-${index}`} onClick={() => this.onClick(index)}>
          {index + 1}
        </button>
      )
    });
    return buttons;
  }

  render() {
    return (
      <div className=''>
        <div className='popular-body popular popular-items'>
          {this.renderItems(this.breakPages[this.currentIndex])}
        </div>
        <div className='popular-pages'>
          {this.renderButton()}
        </div>
      </div>
    )
  }
}