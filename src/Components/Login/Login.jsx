import React, { Component } from "react";
import './Login.css'
import { severPOST } from '../AppContext'

export class UILogin extends Component {
  mode = 'login';
  users = {
    username: '',
  }
  changeHandler = (e) => {
    this.users[e.target.name] = e.target.value;
    this.forceUpdate();
  }

  onSignUp = () => {
    let { onPostCommit } = this.props;
    severPOST('/signup', this.users, (bean) => {
      const jsonData = JSON.stringify(bean);
      localStorage.setItem("auth-token", jsonData);
      this.mode = 'login';
      if (onPostCommit) onPostCommit(bean);
      window.location.reload();
    })
  }

  onLogin = () => {
    let { onPostCommit } = this.props;
    severPOST('/login', this.users, (bean) => {
      const jsonData = JSON.stringify(bean);
      localStorage.setItem("auth-token", jsonData);
      if (onPostCommit) onPostCommit(bean);
      window.location.reload();
    })
  }

  render() {
    return (
      <div>
        {this.mode === 'login' ?
          <div className="login">
            <div>Tài Khoản</div>
            <input value={this.users.username} onChange={this.changeHandler} type='text' name='username' placeholder='' />
            <div>Mật Khẩu</div>
            <input value={this.users.password} onChange={this.changeHandler} type='password' name='password' placeholder='' />
            <button className="btn btn-info btn-lg login-login" data-dismiss="modal" onClick={this.onLogin}>{'Đăng Nhập'}</button>
          </div>
          :
          <div className="login">
            <div>Tài Khoản</div>
            <input value={this.users.username} onChange={this.changeHandler} type='text' name='username' placeholder='' />
            <div>Mật Khẩu</div>
            <input value={this.users.password} onChange={this.changeHandler} type='password' name='password' placeholder='' />
            <div>Mobile</div>
            <input value={this.users.mobile} onChange={this.changeHandler} type='text' name='mobile' placeholder='' />
            <div>Email</div>
            <input value={this.users.email} onChange={this.changeHandler} type='text' name='email' placeholder='' />
            <button className="btn btn-info btn-lg login-login" data-dismiss="modal" onClick={this.onSignUp}>{'Đăng Kí'}</button>
          </div>
        }
        <div className="flex-hbox login-sign">
          <button className="btn btn-link mx-1" onClick={() => {
            this.mode = 'sign';
            this.forceUpdate();
          }}>{'Đăng Kí'}</button>/
          <button className="btn btn-link  mx-1" onClick={() => {
            this.mode = 'login';
            this.forceUpdate();
          }}>{'Đăng Nhập'}</button>
        </div>
      </div>
    )
  }
}