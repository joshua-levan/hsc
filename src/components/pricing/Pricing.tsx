import './Pricing.css'
import oneHour from '../../assets/one-hour.svg'
import halfDay from '../../assets/half-day.svg'
import fullDay from '../../assets/full-day.svg'
import bigProject from '../../assets/big-project.svg'
import Button from '../button/Button'
import ContactForm from './contactForm/ContactForm'

const Pricing = () => {
    interface PriceCard {
        id: string,
        icon: string,
        title: string,
        copy: string,
        price: string,
        className: string
    }

    const pricingCards: PriceCard[] = [
        {
            id: crypto.randomUUID(),
            icon: oneHour,
            title: 'Per Hour',
            copy: 'Base rate for on-site consultation.* Perfect for that quick fix',
            price: '50',
            className: 'per-hour'
        },
        {
            id: crypto.randomUUID(),
            icon: halfDay,
            title: 'Half Day',
            copy: 'Up to 4 hours of on-site consultation*',
            price: '190',
            className: 'half-day'
        },
        {
            id: crypto.randomUUID(),
            icon: fullDay,
            title: 'Full Day',
            copy: 'Up to 8 hours of on-site consultation*',
            price: '370',
            className: 'full-day'
        },
        {
            id: crypto.randomUUID(),
            icon: bigProject,
            title: 'Got a Big Project?',
            copy: 'Let\'s chat below! We offer custom solutions',
            price: 'empty',
            className: 'big-project'
        }
    ]

  return (
    <div className="pricing" id="pricing">
        <section className='pricing-section'>
            <div className="cards-container">
                {pricingCards.map(card => {
                    return (
                        <div className={`${card.className} card`} key={card.id}>
                            <img src={card.icon} alt={`${card.title} Icon`} />
                            <div className="copy-container">
                                <h3>{card.title}</h3>
                                <p>{card.copy}</p>
                            </div>
                            <h2>{`$${card.price}`}</h2>
                        </div>
                    )
                })}
            </div>
        </section>
        <section className='button-section'>
            <Button color="black" message="Are you ready? Let's do this!" navStatus=''/>
        </section>
        <section className='contact-form' id="contact">
            <div className="contact-header">
                <h3>Contact us<span> Let's set up an appointment! No question is too small.</span></h3>
            </div>
            <ContactForm />
        </section>
    </div>
  )
}

export default Pricing