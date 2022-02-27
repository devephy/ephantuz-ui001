import React from 'react'
import './Nav.css'
import {GoHome} from 'react-icons/go'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className="">
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}
