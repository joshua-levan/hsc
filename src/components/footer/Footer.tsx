import './Footer.css'
import rockLogo from '../../assets/rock-logo.svg'
import ohioLogo from '../../assets/ohio-logo.svg'
import pps from '../../assets/pps.svg'
import ppsSeal from '../../assets/pps-seal.svg'

const Footer = () => {
  return (
    <footer>
        <div className='footer-info'>
            <div>
                <p>Home Studio Consultants</p>
                <p>University Heights, OH</p>
                <a href="tel:3305551234">330.555.1234</a>
            </div>
            <p>© {new Date().getFullYear()} Home Studio Consultants | A proud suppoter of Papp's Piano Service</p>
        </div>
        <div className='img-container'>
            <img src={rockLogo} alt="HSC alt logo" />
            <img src={ohioLogo} alt="HSC seal logo" />
            <img src={pps} alt="Papp's Piano Service Cleveland logo" />
            <img src={ppsSeal} alt="Papp's Piano Service Cleveland seal logo" />
        </div>
    </footer>
  )
}

export default Footer