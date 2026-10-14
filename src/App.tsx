import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import CTA from './components/CTA/CTA'
import Footer from './components/footer/Footer'
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
      <Banner />
      <Pricing />
      {/*^^^contact form in pricing^^^*/}
      <Footer />
    </>
  )
}

export default App