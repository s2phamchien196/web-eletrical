import React from 'react'

const UIPolicy = (props) => {
  let { policy } = props;
  return (
    <div className='flex-grow-1'>
      {policy.note}
    </div>
  )
}

export default UIPolicy