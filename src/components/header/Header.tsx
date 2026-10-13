import sparky from '../../assets/sparky3.webp'
import ohioSeal from '../../assets/ohioSeal.svg'
import Button from '../button/Button'
import './Header.css'

const Header = () => {
  return (
    <header id="top" aria-labelledby="welcome-heading">
        <section>
            <p>See our<a href="#about">LIST OF SERVICES <span>→</span></a></p>
            <h1>make it<br/>happen</h1>
            <h2>with HOME STUDIO CONSULTANTS</h2>
            <Button color="black" message="unleash the beast" navStatus={""}/>
            <img
            className="sparky"
            src={sparky}
            alt="Sparky the Friendly Sasquatch"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            />
            <img className="ohio-seal" src={ohioSeal} alt="Home Studio Consultants Ohio Seal" />
        </section>
    </header>
  )
}

export default Header