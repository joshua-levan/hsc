import './VideoLoop.css'
import bottomTriangle from '../../assets/bottom-triangle.svg'

import videoLoop from '../../assets/hsc-480p.mp4'

const VideoLoop: React.FC = () => {
  return (
    <div className="video-container"  id="service-area">
      <img className="triangle-bottom" src={bottomTriangle} alt="decorative triangle" />
      <section>
        <div className="service-area">
          <h3>EXPERT HELP, WHEREVER YOU ARE <span>  Home Studio Consultants provides on-site consulting throughout Northeast Ohio* and remote support for studios anywhere in the world. Whether you need hands-on setup, software training, or help troubleshooting your gear, we're here to get you back to creating.<br/>Available Monday-Friday, 9 AM-5 PM Eastern Time.</span></h3>
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