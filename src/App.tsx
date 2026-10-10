import './App.css'
import About from './components/about/About'
import CTA from './components/CTA/CTA'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Pricing from './components/pricing/Pricing'
import VideoLoop from './components/video/VideoLoop'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <CTA />
      <VideoLoop />
      <Pricing /> {/*// contact form in pricing*/}
    </>
  )
}

export default App