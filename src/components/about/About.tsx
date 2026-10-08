import podcaster from '../../assets/podcaster_diorama_gray.png'
import diorama from '../../assets/studio_diorama_gray.png'
import microphoneIcon from '../../assets/microphone-icon.svg'
import softwareIcon from '../../assets/software-icon.svg'
import listenIcon from '../../assets/listen-icon.svg'
import rockIcon from '../../assets/rock-icon.svg'
import cardGrid from '../../assets/card-grid.svg'
import './About.css'    

const About = () => {
    interface AboutCard {
        id: string,
        icon: string,
        title: string,
        message: string
        }

    const aboutCards:AboutCard[]=[
        {
            id: crypto.randomUUID(),
            icon: microphoneIcon,
            title: 'Capture',
            message: 'Vinyl • Instruments • Turntables • Synthesizers • Tape • Microphones • Preamps • Interfaces • DI Boxes • and More!'
        },
        {
            id: crypto.randomUUID(),
            icon: softwareIcon,
            title: 'Process',
            message: 'Mixers • Patching • Routing • Monitoring • DAWs • Plugins • EQ • Compression • Effects • Hardware • Software'
        },
        {
            id: crypto.randomUUID(),
            icon: listenIcon,
            title: 'LISTEN',
            message: 'Studio Monitors • Headphones • Room Acoustics • Calibration • Set-Up'
        },
        {
            id: crypto.randomUUID(),
            icon: rockIcon,
            title: 'CREATE',
            message: 'Content Creation • Audio Tracks • Albums • Podcasts • Voiceovers • Deployment • Archives • and Everything Else!'
        },
    ]


  return (
    <main id="about">
        <section>
            <img className="podcaster" src={podcaster} alt="Podcaster in a home studio illustration" />
            <img className="diorama" src={diorama} alt="Diorama of an in-home studio illustration" />
            <div className="about-container">
                <h3>ABOUT <span>  Home Studio Consultants helps home audio professionals and enthusiasts get off the couch, out of the box, and into creating. Through expert consulting, training, and hands-on guidance, we make the gear and software less intimidating and the creative process more productive.</span></h3>
                <p>Ready?<a href="#">LET'S GET STARTED  →</a></p>
                <div className="about-cards-container">
                    <img className="card-grid" src={cardGrid} alt="" />
                    {aboutCards.map(card=>{
                        return <div className="about-card" key={card.id}>
                            <img src={card.icon} alt={`${card.title} icon`} />
                            <p><span>{card.title} </span>{card.message}</p>
                        </div>
                    })}
                </div>
            </div>  
        </section>
    </main>
  )
}

export default About