import React from 'react'
import Logo from '../assets/App-Logo.png'
import Title from '../assets/App-Title.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={Logo}/>
        <img className='title' src={Title}/>
    </div>
  )
}

export default Header