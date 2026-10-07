import podcaster from '../../assets/podcaster_diorama_gray.png'
import diorama from '../../assets/studio_diorama_gray.png'
import './About.css'

const About = () => {
    interface AboutCard {
        id: string
        icon: null //React.ComponentType
        title: string
        message: string
        }

    const aboutCards:AboutCard[]=[
        {
            id: crypto.randomUUID(),
            icon: null,
            title: 'test',
            message: 'test'
        },
        {
            id: crypto.randomUUID(),
            icon: null,
            title: 'test',
            message: 'test'
        },
        {
            id: crypto.randomUUID(),
            icon: null,
            title: 'test',
            message: 'test'
        },
        {
            id: crypto.randomUUID(),
            icon: null,
            title: 'test',
            message: 'test'
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
                {aboutCards.map(card=>{
                    return <div className="about-card-container" key={card.id}>
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