import React from 'react'
import './Footer.css'
import FeatherIcon from 'feather-icons-react';
import Contact from '../Contact/Contact';
import policies from '../Assets/policies';

const info_data = {};
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
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.7723232076067!2d106.38879676963009!3d20.420406355644502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135fb0002bc2b75%3A0xc4f28b6645a50b92!2zTXIuIENoaeG6v24!5e0!3m2!1svi!2s!4v1712299335262!5m2!1svi!2s" width="300" height="300"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ marginLeft: 20 }}></iframe>
    </div>
  )
}

export default Footer