import sparky from '../../assets/sparky3.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <section>
            <img src={sparky} alt="Sparky the Friendly Sasquatch" />
        </section>
    </header>
  )
}

export default Header