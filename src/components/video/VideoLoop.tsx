import './VideoLoop.css'
import bottomTriangle from '../../assets/bottom-triangle.svg'

import videoLoop from '../../assets/hsc-480p.mp4'

const VideoLoop: React.FC = () => {
  return (
    <div className="video-container">
      <img className="triangle-bottom" src={bottomTriangle} alt="decorative triangle" />
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