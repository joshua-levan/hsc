import podcaster from '../../assets/podcaster_diorama_gray.webp'
import diorama from '../../assets/studio_diorama_gray.webp'

import microphoneIcon from '../../assets/microphone-icon.svg'
import softwareIcon from '../../assets/software-icon.svg'
import listenIcon from '../../assets/listen-icon.svg'
import rockIcon from '../../assets/rock-icon.svg'
import cardGrid from '../../assets/card-grid.svg'

import './About.css'    

const About = () => {
    interface AboutCard {
        id: number;
        icon: string;
        title: string;
        message: string;
        }

    const aboutCards:AboutCard[]=[
        {
            id: 1,
            icon: microphoneIcon,
            title: 'Capture',
            message: 'Microphones, audio interfaces, preamps, and recording signal chains'
        },
        {
            id: 2,
            icon: softwareIcon,
            title: 'Process',
            message: 'DAW setup, plugins, mixing workflows, and audio routing'
        },
        {
            id: 3,
            icon: listenIcon,
            title: 'LISTEN',
            message: 'Studio monitors, headphones, room acoustics, and calibration'
        },
        {
            id: 4,
            icon: rockIcon,
            title: 'CREATE',
            message: 'Podcast production, music recording, voiceovers, and content workflows'
        },
    ]


  return (
    <main id="about">
        <section aria-labelledby="about-heading">
            <img className="podcaster" src={podcaster} alt="Podcaster in a home studio illustration" />
            <img className="diorama" src={diorama} alt="Diorama of an in-home studio illustration" />
            <div className="about-container">
                <h3>TRAINING & AUDIO SETUP <span>  Home Studio Consultants helps home recording enthusiasts, musicians, podcasters, and audio professionals get more from their recording studio equipment and software. Get expert guidance on audio interfaces, studio monitors, digital audio workstations (DAWs), signal routing, room acoustics, and more.</span></h3>
                <p>Ready?<a href="#contact">LET'S GET STARTED <span>→</span></a></p>
                <div className="about-cards-container" aria-labelledby="services-heading">
                    <img className="card-grid" src={cardGrid} alt="" />
                    {aboutCards.map(card=>{
                        return <div className="about-card" key={card.id}>
                            <img src={card.icon} alt="" />
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