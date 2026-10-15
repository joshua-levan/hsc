import './Pricing.css'
import oneHour from '../../assets/one-hour.svg'
import halfDay from '../../assets/half-day.svg'
import fullDay from '../../assets/full-day.svg'
import bigProject from '../../assets/big-project.svg'
import Button from '../button/Button'
import ContactForm from './contactForm/ContactForm'
import remote from '../../assets/remote.svg'

const Pricing = () => {
    interface PriceCard {
        id: number,
        icon: string,
        title: string,
        copy: string,
        price: string,
        className: string
    }

    const pricingCards: PriceCard[] = [
        {
            id: 5,
            icon: oneHour,
            title: 'Per Hour',
            copy: 'Base rate for on-site consultation.* Perfect for that quick fix',
            price: '150',
            className: 'per-hour'
        },
        {
            id: 6,
            icon: halfDay,
            title: 'Half Day',
            copy: 'Up to 4 hours of on-site consultation*',
            price: '400',
            className: 'half-day'
        },
        {
            id: 7,
            icon: fullDay,
            title: 'Full Day',
            copy: 'Up to 8 hours of on-site consultation*',
            price: '600',
            className: 'full-day'
        },
        {
            id: 8,
            icon: bigProject,
            title: 'Got a Big Project?',
            copy: 'Let\'s chat below! We offer custom solutions',
            price: 'empty',
            className: 'big-project'
        }
    ]

  return (
    <div className="pricing" id="pricing" aria-labelledby="pricing-heading">
        <section className='pricing-section'>
            <div className="cards-container">
                {pricingCards.map(card => {
                    return (
                        <div className={`${card.className} card`} key={card.id}>
                            <img src={card.icon} alt="" />
                            <div className="copy-container">
                                <h3>{card.title}</h3>
                                <p>{card.copy}</p>
                            </div>
                            <h2>{`$${card.price}`}</h2>
                        </div>
                    )
                })}
            </div>
            <div className="remote-card">
                <img src={remote} alt="remote icon" />
                <div className="copy-container">
                    <h3>Remote Consults</h3>
                    <p>Receive a consult remotely from literally anywhere!</p>
                </div>
                <h2>$150/ hr</h2>
            </div>
        </section>
        <section className='button-section'>
            <Button color="black" message="Are you ready? Let's do this!" navStatus=''/>
        </section>
        <section className='contact-form' id="contact">
            <div className="contact-header">
                <h3>Contact us<span> Chat or book an appointment below →</span></h3>
            </div>
            <ContactForm />
        </section>
    </div>
  )
}

export default Pricing