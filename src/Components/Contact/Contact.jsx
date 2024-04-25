import React from 'react'
import './Contact.css'
const banner_data = {};
const Contact = () => {
  return (
    <div className='contact'>
      <a className='text-secondary' href={banner_data.bannerInfo.zaloLink} target="_blank" rel="noopener noreferrer">Chat Zalo</a>
      <a className='text-secondary' href={banner_data.bannerInfo.messageLink} target="_blank" rel="noopener noreferrer">Messenger</a>
    </div >
  )
}

export default Contact