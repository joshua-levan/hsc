import sparky from '../../assets/sparky3.png'
import ohioSeal from '../../assets/ohioSeal.svg'
import Button from '../button/Button'
import './Header.css'

const Header = () => {
  return (
    <header>
        <section>
            <p>Sans dolor ipsum sans<a href="#">LOREM IPSUM  →</a></p>
            <h2>with HOME STUDIO CONSULTANTS</h2>
            <Button color="black" message="unleash the beast" navStatus={""}/>
            <img className="sparky" src={sparky} alt="Sparky the Friendly Sasquatch" />
            <div className="seal-container">
                <img className="ohio-seal" src={ohioSeal} alt="Home Studio Consultants Ohio Seal" />
            </div>
            <div className="make-it-container">
                <h1>make it<br/>happen</h1>
            </div>
        </section>
    </header>
  )
}

export default Header