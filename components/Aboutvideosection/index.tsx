"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const handleClick = (videoElement: HTMLVideoElement) => {
  if (videoElement) {
    if (videoElement.paused) {
      videoElement.play(); // Play the video if it is paused
    } else {
      videoElement.pause(); // Pause the video if it is playing
    }
  }
};
const VideoPlayer = ({ url, dataVal }: { url: string; dataVal?: string }) => {
  return (
    <div>
                          <video
                          className="w-full rounded-lg"
                          poster={dataVal}
                          onClick={(e) => handleClick(e.currentTarget)} // Pass the clicked video element
                        >
                          <source src={url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
     
    </div>
  );
};

export default VideoPlayer;
