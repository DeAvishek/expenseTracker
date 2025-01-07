import React from 'react'

const Button = ({
    type='button',
    className='',
    ...props
}) => {
  return (
    <div>
       <button className={`btn btn-primary ${className}`}{...props}></button>
    </div>
  )
}

export default Button
