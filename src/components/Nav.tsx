import { useState, useEffect } from 'react'
import './Nav.css'

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
    <nav className={navStatus}>Nav</nav>
  )
}

export default Nav