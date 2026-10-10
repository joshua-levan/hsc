import './Pricing.css'
import oneHour from '../../assets/one-hour.svg'
import halfDay from '../../assets/half-day.svg'
import fullDay from '../../assets/full-day.svg'
import bigProject from '../../assets/big-project.svg'

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
            copy: '',
            price: '50',
            className: 'per-hour'
        },
        {
            id: crypto.randomUUID(),
            icon: halfDay,
            title: 'Half Day',
            copy: '',
            price: '190',
            className: 'half-day'
        },
        {
            id: crypto.randomUUID(),
            icon: fullDay,
            title: 'Full Day',
            copy: '',
            price: '370',
            className: 'full-day'
        },
        {
            id: crypto.randomUUID(),
            icon: bigProject,
            title: 'Got a Big Project?',
            copy: '',
            price: 'empty',
            className: 'big-project'
        }
    ]

  return (
    <div className="pricing" id="pricing">
        <section>
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
    </div>
  )
}

export default Pricing