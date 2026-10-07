import podcaster from '../../assets/podcaster_diorama_gray.png'
import diorama from '../../assets/studio_diorama_gray.png'
import microphoneIcon from '../../assets/microphone-icon.svg'
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
            message: 'Vinyl • Instruments • Turntables • Synth • Tape • Microphones • Preamps • Interfaces • DI Boxes'
        },
        {
            id: crypto.randomUUID(),
            icon: microphoneIcon,
            title: 'Process',
            message: 'Mixers • Patching • Routing • Monitoring • DAWs • Plugins • EQ • Compression • Effects • Hardware • Software'
        },
        {
            id: crypto.randomUUID(),
            icon: microphoneIcon,
            title: 'LISTEN',
            message: 'Studio Monitors • Headphones • Room Acoustics • Calibration'
        },
        {
            id: crypto.randomUUID(),
            icon: microphoneIcon,
            title: 'CREATE',
            message: 'Content • Music Tracks • Albums • Podcasts • Voiceovers • Archives • Everything Else!'
        },
    ]


  return (
    <main>
        <section>
            <div className="podcaster-container">
                <img className="podcaster" src={podcaster} alt="Podcaster in a home studio illustration" />
            </div>
            <div className="diorama-container">
                <img className="diorama" src={diorama} alt="Diorama of an in-home studio illustration" />
            </div>
            <div className="about-cards-container">
                <img className="card-grid" src={cardGrid} alt="" />
                {aboutCards.map(card=>{
                    return <div className="about-card" key={card.id}>
                        <img src={card.icon} alt={`${card.title} icon`} />
                        <h3>{card.title}</h3>
                        <p>{card.message}</p>
                    </div>
                })}
            </div>
        </section>
    </main>
  )
}

export default About