import { useState, useEffect } from 'react'
import './Nav.css'

import hscLogo from '../../assets/hscLogo.svg'
import hamburgerIcon from '../../assets/hamburger.svg'

import Button from '../button/Button'
import MobileNav from './MobileNav'

const Nav = () => {
  const [navStatus, setNavStatus] = useState<string>('full')
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavStatus('condensed')
      } else {
        setNavStatus('full')
      }
    }

    window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])

  const toggleNav = () => {
    setMobileNav(prev => !prev)
  }

  return (
    <>
    {mobileNav && <MobileNav toggleNav={toggleNav}/>}
      <nav className={navStatus} aria-label="Main navigation">
            <div className="top-bar">
              <p>Home Studio Consultants offer expert guidance at any stage. Check out <a href="#about">WHAT WE'RE ALL ABOUT <span>→</span></a></p>
            </div>
            <div className={`navbar ${navStatus}`}>
              <a href="#top" aria-label="Home Studio Consultants home">
                <img src={hscLogo} alt="Home Studio Consultants" />
              </a>
              <img
              src={hamburgerIcon}
              alt=""
              aria-labelledby='toggle navigation'
              className="hamburger"
              onClick={toggleNav}/>
            <ul>
                <li><a href="#about">about/ services</a></li>
                <li><a href="#service-area">service area</a></li>
                <li><a href="#pricing">pricing</a></li>
                <li><a href="#contact">let's chat</a></li>
            </ul>
            <Button color={'red'} message={'let\'s make my studio'} navStatus={navStatus}/>
          </div>
      </nav>
    </>
  )
}

export default Nav