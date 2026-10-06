import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const App = () => {
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
    <>
      <Nav navStatus={navStatus}/>
      <Header />
      <div style={{ height: '200vh', width: '100vw' }}></div>
    </>
  )
}

export default App