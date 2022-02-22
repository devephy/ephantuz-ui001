import React from 'react'
import './Header.css'
import CTA from './Cta'
import photo from './../../assets/cover01.jpg'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Ephantus Mwangi</h1>
            <h5 className="text-light">Software Developer</h5>  
            
            {/* download cv component */}
            <CTA />
            {/* ********* */}

            {/* Header socials */}
            <HeaderSocials />
            {/* ********* */}

            <div className="me">
                <img src={photo} alt="" />
            </div>

            <a href="#Contact" className="scroll__down">Scroll Down</a>
        </div> 
    </header>
  )
}
