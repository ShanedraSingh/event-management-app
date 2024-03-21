import React from 'react'
import { Link } from 'react-router-dom';
import './Parent.css'
const Parent = () => {
  return (
    <>
    <div className="parent_container">
      <div className="parent_page">
        <Link><button className='parent_btn'>Breakfast</button></Link>
        <Link><button className='parent_btn'>Lunch</button></Link>
        <Link><button className='parent_btn'>Tea Party</button></Link>
        <Link><button className='parent_btn'>Dinner</button></Link>
      </div>
    </div>
    </>
  )
}

export default Parent