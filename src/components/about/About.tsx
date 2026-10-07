import podcaster from '../../assets/podcaster_diorama_gray.png'
import diorama from '../../assets/studio_diorama_gray.png'
import './About.css'

const About = () => {
  return (
    <main>
        <section>
            <div className="podcaster-container">
                <img className="podcaster" src={podcaster} alt="Podcaster in a home studio illustration" />
            </div>
            <div className="diorama-container">
                <img className="diorama" src={diorama} alt="Diorama of an in-home studio illustration" />
            </div>
        </section>
    </main>
  )
}

export default About