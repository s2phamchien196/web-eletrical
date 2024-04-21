import React, { Component } from 'react';
import './Popup.css'
import * as FeatherIcon from 'react-feather'

export class UIPopup extends Component {
  isOpen = false;
  openPopup = () => {
    this.isOpen = true;
    this.forceUpdate();
  };

  closePopup = () => {
    this.isOpen = false;
    this.forceUpdate();
  };

  render() {
    let { content, label, header } = this.props;
    return (
      <div className="popup-container" >
        <button className='link-button' onClick={this.openPopup}>{label}</button>
        {this.isOpen && (
          <div className="popup-main md">
            <div className="flex-hbox popup-header">
              <div className='flex-grow-1 text-start px-2' style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <h4>
                  {header}
                </h4>
              </div>
              <FeatherIcon.X size={18} className='popup-close' onClick={this.closePopup} />
            </div>
            <div className="popup-content flex-grow-1">
              {content}
            </div>
          </div>
        )}
      </div >
    );
  };
}
