import podcaster from '../../assets/podcaster_diorama_gray.png'
import './About.css'

const About = () => {
  return (
    <main>
        <section>
            <div className="podcaster-container">
                <img className="podcaster" src={podcaster} alt="Podcaster in a home studio illustration" />
            </div>
        </section>
    </main>
  )
}

export default About