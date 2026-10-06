import { useState, useEffect } from 'react'
import './Nav.css'
import hscLogo from '../assets/hscLogo.svg'

const Nav = () => {
const [navStatus, setNavStatus] = useState<string>('full')

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
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

  return (
    <nav className={navStatus}>
        <img src={hscLogo} alt="HSC Logo" />
        <ul>
            <li>ABout</li>
        </ul>
        <button>hi</button>
    </nav>
  )
}

export default Nav