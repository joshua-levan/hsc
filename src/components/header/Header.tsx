import sparky from '../../assets/sparky3.png'
import ohioSeal from '../../assets/ohioSeal.svg'
import Button from '../button/Button'
import './Header.css'

const Header = () => {
  return (
    <header>
        <section>
            <h2>with HOME STUDIO CONSULTANTS</h2>
            <Button color="black" message="unleash the beast" navStatus={""}/>
            <img className="sparky" src={sparky} alt="Sparky the Friendly Sasquatch" />
            <div className="seal-container">
                <img className="ohio-seal" src={ohioSeal} alt="Home Studio Consultants Ohio Seal" />
            </div>
        </section>
    </header>
  )
}

export default Header