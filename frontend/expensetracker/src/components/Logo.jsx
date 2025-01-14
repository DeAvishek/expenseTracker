import React from 'react'

const Logo = ({ width = '70px', height = '70px' }) => {
  return (
    <div>
      <img id="logo"src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/204/672/datas/original.jpg" 
      alt="Girl in a jacket" 
      style={{width,height}}/>
    </div>
  )
}

export default Logo