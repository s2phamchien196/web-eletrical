import React, { Component, useEffect, useState } from "react";
import * as FeatherIcon from "react-feather";
import './style.css';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export class BBMultiField extends Component {
  changeHandler = (e, index) => {
    let { bean, fieldName, onInputChange } = this.props;
    let items = bean[fieldName];
    items[e.target.name] = e.target.value;
    if (onInputChange) onInputChange(bean);
    this.forceUpdate();
  }

  onAddItems = () => {
    let { bean, fieldName } = this.props;
    bean[fieldName].push('');
    this.forceUpdate();
  }

  onRenderInput = () => {
    let { bean, fieldName } = this.props;
    let items = bean[fieldName];
    if (items.length === 0) {
      bean[fieldName] = [''];
      items = bean[fieldName];
    }
    let contents = []
    items.forEach((item, index) => {
      contents.push(
        <input value={item} onChange={(e) => this.changeHandler(e, index)} type='string' name={index} placeholder='' />
      )
    });
    contents.push(
      <FeatherIcon.Plus style={{ marginTop: 'auto', marginBottom: 'auto', cursor: 'pointer' }} size={18}
        onClick={this.onAddItems} />
    )
    return contents;
  }

  render() {
    let { label } = this.props;
    return (
      <div className="py-1">
        <div className="form-label">{label}</div>
        <div className="form-multi-field">
          {this.onRenderInput()}
        </div>
      </div>
    )
  }
}

export class ButtonDialogShow extends Component {
  render() {
    let { laf, name, header, body, width, height } = this.props;
    if (!width) width = 120;
    if (!height) height = 45;

    return (
      <div>
        <button style={{ width: width, height: height, padding: 0 }} type="button" className={`${laf} btn-lg`} data-toggle="modal" data-target={`#${name}`}>{name}</button>
        <div className="modal fade" id={name} role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title flex-grow-1 text-start">{header}</h3>
                <button type="button" className="close flex-grow-0" data-dismiss="modal">
                  <FeatherIcon.X size={20} />
                </button>
              </div>
              <div className="modal-body">
                {body}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

const Notification = (props) => {
  let { content, type } = props;
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDismissed(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  let label = 'Success!'
  if (type === 'warning') {
    label = 'Warning!'
  }
  if (type === 'danger') {
    label = 'Danger!'
  }

  return dismissed ? null : (
    <div className={`alert alert-${type}`} style={{ position: 'fixed', margin: 10, top: 0, right: 0, zIndex: 1001 }}>
      <strong>{label}</strong>  {content}
    </div>
  );
};

export const showNotification = (content, type) => {
  const root = document.getElementById('root');
  let notification = document.createElement('div');
  ReactDOM.render(<Notification content={content} type={type} />, notification);
  root.appendChild(notification);
}

export const showDialog = (name, label, html) => {
  const root = document.getElementById('root');
  let content = document.createElement('div');
  ReactDOM.render(
    <Dialog name={name} header={label} body={html} />, content
  );
  root.appendChild(content);
}

export class Dialog extends Component {
  render() {
    let { name, header, body } = this.props;
    return (
      <div className="modal fade" id={name} role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title flex-grow-1 text-start">{header}</h3>
              <button type="button" className="close flex-grow-0" data-dismiss="modal">
                <FeatherIcon.X size={20} />
              </button>
            </div>
            <div className="modal-body">
              {body}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export class ButtonOffCanvas extends Component {
  show = false;

  handleClose = () => {
    this.show = false;
    this.forceUpdate();
  };
  handleShow = () => {
    this.show = true;
    this.forceUpdate();
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch
        </Button>

        <Offcanvas show={this.show} onHide={this.handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

export function BBOffcanvas(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { icon, label, html, header, color } = props;

  return (
    <>
      <Button variant={color} onClick={handleShow}>
        {icon}<span className="mx-1">{label}</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{header}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {html}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
