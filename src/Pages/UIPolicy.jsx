import React from 'react'
import './stylecss.css'

const UIPolicy = (props) => {
  let { policy } = props;
  return (
    <div className='flex-grow-1'>
      {policy.note}
    </div>
  )
}

export default UIPolicy