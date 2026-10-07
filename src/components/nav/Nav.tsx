import { useState, useEffect } from 'react'
import './Nav.css'
import hscLogo from '../../assets/hscLogo.svg'
import Button from '../button/Button'

const Nav = () => {
  const [navStatus, setNavStatus] = useState<string>('full')

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

  return (
    <nav className={navStatus}>
          <div className="top-bar">
            Expert guidance at any stage. Come check out <a href="#">WHAT WE'RE ALL ABOUT  →</a>
          </div>
          <div className={`navbar ${navStatus}`}>
            <img src={hscLogo} alt="HSC Logo" />
          <ul>
              <li><a href="#">about/ services</a></li>
              <li><a href="#">service area</a></li>
              <li><a href="#">pricing</a></li>
              <li><a href="#">let's chat</a></li>
          </ul>
          <Button color={'red'} message={'let\'s make my studio'} navStatus={navStatus}/>
        </div>
    </nav>
  )
}

export default Nav