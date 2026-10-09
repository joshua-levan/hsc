import sparky from '../../assets/sparky3.png'
import ohioSeal from '../../assets/ohioSeal.svg'
import Button from '../button/Button'
import './Header.css'

const Header = () => {
  return (
    <header id="top">
        <section>
            <p>See our<a href="#about">LIST OF SERVICES <span>→</span></a></p>
            <h2>with HOME STUDIO CONSULTANTS</h2>
            <Button color="black" message="unleash the beast" navStatus={""}/>
            <img className="sparky" src={sparky} alt="Sparky the Friendly Sasquatch" />
            <img className="ohio-seal" src={ohioSeal} alt="Home Studio Consultants Ohio Seal" />
            <h1>make it<br/>happen</h1>
        </section>
    </header>
  )
}

export default Header