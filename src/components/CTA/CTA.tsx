import './CTA.css'
import topTriangle from'../../assets/top-triangle.svg'

const CTA = () => {
  return (
    <div className="cta">
            <img className="triangle-top" src={topTriangle} alt="decorative triangle" />
        <section>
            <h1>plug<br/>in!</h1>
        </section>
    </div>
  )
}

export default CTA