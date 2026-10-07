import './App.css'
import About from './components/about/About'
import CTA from './components/CTA/CTA'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <CTA />
    </>
  )
}

export default App