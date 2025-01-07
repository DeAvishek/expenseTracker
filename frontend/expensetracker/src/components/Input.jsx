
import React, { forwardRef, useId } from 'react';

const Input = ({
    label,
    type="text",
    className='',
    ...props
},ref) => {
    const id=useId()
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} className={`text-black ${className}`} {...props} ref={ref}></input>
    </div>
  )
}

export default forwardRef(Input)
