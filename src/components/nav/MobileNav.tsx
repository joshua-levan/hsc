import exitIcon from '../../assets/exit.svg'
import './MobileNav.css'

type MobileNavProps = {
  toggleNav: () => void;
};

const MobileNav = ({ toggleNav }: MobileNavProps) => {
  return (
    <>
        <div className="mobile-nav">
            <div className="exit-container">
                <img
                src={exitIcon}
                alt=""
                aria-labelledby='exit navigation'
                className="exit-icon"
                onClick={toggleNav}
                />
            </div>
            <ul>
                <li><a href="#top" onClick={toggleNav}>home</a></li>
                <li><a href="#about" onClick={toggleNav}>about/ services</a></li>
                <li><a href="#service-area" onClick={toggleNav}>service area</a></li>
                <li><a href="#pricing" onClick={toggleNav}>pricing</a></li>
                <li><a href="#contact" onClick={toggleNav}>let's chat</a></li>
            </ul>
        </div>  
    </>
  )
}

export default MobileNav