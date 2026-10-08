import './CTA.css'
import topTriangle from'../../assets/top-triangle.svg'
import djBackdrop from '../../assets/dj-backdrop.svg'

const CTA = () => {
  return (
    <div className="cta">
            <img className="triangle-top" src={topTriangle} alt="decorative triangle" />
            <img  className="dj-backdrop" src={djBackdrop} alt="" />
        <section>
            <h1>plug<br/>in!</h1>
            <h2>LET'S MAKE<br/> THE DREAM WORK</h2>
            <div className="cta-container">
              <div className="cta-copy-container">
                <h3>HOME STUDIO CONSULTANTS IS YOUR SOLUTION!</h3>
                <p className='cta-copy'>Your Gear Is Only Half the Story.
The rest is knowing how to make it all work together.
Whether you've got a room full of vintage hardware, a laptop and one good microphone, or an absolutely irresponsible amount of audio equipment, we'll help you turn it into a system you actually enjoy using.
Less guessing. Less gear shuffling. More recording.</p>
                <p>What are you waiting for?<a href="#">REACH YOUR GOAL  →</a></p>
              </div>
              <div className="photos-container">
              
              </div>
            </div>
        </section>
    </div>
  )
}

export default CTA