import './Footer.css'
import rockLogo from '../../assets/rock-logo.svg'
import ohioLogo from '../../assets/ohio-logo.svg'

const Footer = () => {
  return (
    <footer>
        <div className='footer-info'>
            <div>
                <p>Home Studio Consultants</p>
                <p>University Heights, OH</p>
                <a href="tel:6159250495">615.925.0495</a>
            </div>
            <p>© {new Date().getFullYear()} Home Studio Consultants</p>
        </div>
        <div className='img-container'>
            <img src={rockLogo} alt="HSC alt logo" />
            <img src={ohioLogo} alt="HSC seal logo" />
        </div>
    </footer>
  )
}

export default Footer