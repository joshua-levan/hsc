import './Nav.css'
import hscLogo from '../../assets/hscLogo.svg'
import Button from '../button/Button'

interface Prop {
  navStatus: string
}

const Nav = ({ navStatus }:Prop) => {
  return (
    <nav className={navStatus}>
          <div className="top-bar">
            Dolor san quasi-vini. Dolor ipsum sans dolor ipsum sans <a href="#">LOREM IPSUM  →</a>
          </div>
          <div className={`navbar ${navStatus}`}>
            <img src={hscLogo} alt="HSC Logo" />
          <ul>
              <li><a href="#">about/ services</a></li>
              <li><a href="#">service area</a></li>
              <li><a href="#">pricing</a></li>
              <li><a href="#">let's chat</a></li>
          </ul>
          <Button color={'red'} message={'let\'s make my studio'}/>
        </div>
    </nav>
  )
}

export default Nav