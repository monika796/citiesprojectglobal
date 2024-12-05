"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoPlayer = ({ url, dataVal }: { url: string; dataVal?: string }) => {
  return (
    <div>
      <ReactPlayer
        className="aboutus_video_player absolute h-auto"
        url={url}
        light={dataVal}
        controls
        width="100%"
      />
    </div>
  );
};

export default VideoPlayer;
