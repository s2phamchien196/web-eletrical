import React from 'react'
import './Footer.css'
import FeatherIcon from 'feather-icons-react';
import Contact from '../Contact/Contact';
import info_data from '../Assets/info_data'
import policies from '../Assets/policies';


const renderContact = () => {
  let contents = [];
  for (let sel of info_data.address) {
    contents.push(
      <div className='py-1'>
        <FeatherIcon icon="home" size={22} className='pb-1' />
        <span>{sel.name}</span> : {sel.address}
      </div>
    )
  }
  contents.push(
    <div>
      HOTLINE: <span>{info_data.hotline}</span>
    </div>
  )

  return contents;
}

const renderPolicies = () => {
  let contents = [];
  for (let key in policies) {
    let policy = policies[key];
    contents.push(
      <div>
        <a href={policy.path}>{policy.label}</a>
        <hr />
      </div>
    )
  }
  return contents;
}

const Footer = () => {
  return (
    <div className='footer'>
      <div className='shop-address'>
        {renderContact()}
      </div>
      <div className='policy'>
        <h6 style={{ fontWeight: 600 }}>CHÍNH SÁCH</h6>
        <hr className='policy-hr' />
        {renderPolicies()}
      </div>
      <Contact />
    </div>
  )
}

export default Footer