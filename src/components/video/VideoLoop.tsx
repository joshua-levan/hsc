import './VideoLoop.css'
import bottomTriangle from '../../assets/bottom-triangle.svg'
import location from '../../assets/location.svg'
import videoLoop from '../../assets/hsc-480p.mp4'
import Button from '../button/Button';

const VideoLoop: React.FC = () => {
  return (
    <div className="video-container"  id="service-area">
      <img className="triangle-bottom" src={bottomTriangle} alt="decorative triangle" />
      <section>
        <div className="service-area-copy">
          <div className="service-area">
            <img className='location-icon' src={location} alt="location icon" />
            <h3>EXPERT HELP, WHEREVER YOU ARE <span>  Home Studio Consultants provides on-site consulting throughout Northeast Ohio* and remote support for studios anywhere in the world. Whether you need hands-on setup, software training, or help troubleshooting your gear, we're here to get you back to creating.<span><br/>**Available Monday-Friday, 9 AM-5 PM Eastern Time.</span></span></h3>
          </div>
          <p><span>*MILAGE POLICY </span>Locations oustside of Cuyahoga County will incur a $1 per mile charge for on-site services.</p>
        </div>
        <div className="button-container">
          <Button color="red" message={'unleash the beast'} navStatus={''}/>
        </div>
      </section>
      <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    >
        <source src={videoLoop} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoLoop;