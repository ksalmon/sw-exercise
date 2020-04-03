import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../logo.svg'

export default function AppNav() {
  
  return (
    <div className='nav-container'>
      <div className='top-nav-container'>
        <Link to={`/`}><div className='logo'><img src={logo}/></div></Link>
        <div className='avatar'></div>
      </div>
      <div className='left-nav-container'>
        <div className='link-container'>
          <Link to={`/people`} className='char-link'>Characters</Link>
        </div>
      </div>
    </div>
  )
}