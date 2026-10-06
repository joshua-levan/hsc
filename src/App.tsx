import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
      <Nav navStatus />
      <Header navStatus />
      <div style={{ height: '200vh', width: '100vw' }}></div>
    </>
  )
}

export default App