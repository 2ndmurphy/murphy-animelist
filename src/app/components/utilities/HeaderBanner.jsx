import React from 'react'

const HeaderBanner = ({title}) => {
  return (
    <div className='banner'>
      <div className='p-8 text-center'>
        <h3 className='text-color-primary text-2xl'>{title}</h3>
      </div>
    </div>
  )
}

export default HeaderBanner