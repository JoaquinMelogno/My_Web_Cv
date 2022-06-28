import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import Me from '../../assets/me.jpg'
import Headersocials from './headersocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

          <h1>Hola mi nombre es Joaquin Melogno</h1>
          <h1 className="text-light">FullStack Developer</h1>
          <CTA/>
          <Headersocials/>
          <div className="me">
            <img src={Me} alt="Mi foto" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header