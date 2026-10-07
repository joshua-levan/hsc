import './VideoLoop.css'

import videoLoop from '../../assets/hsc-480p.mp4'

const VideoLoop: React.FC = () => {
  return (
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
  );
};

export default VideoLoop;