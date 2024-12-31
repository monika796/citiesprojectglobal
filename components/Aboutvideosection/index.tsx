"use client";

import dynamic from "next/dynamic";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDoyNjY=") {
      aboutussections {
        videosectionheading
        videosectiontitle
        videosectiondescription
        videosectionbackground {
          node {
            link
          }
        }
      }
    }
  }
`;

const VideoPlayer = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  const [isPlaying, setIsPlaying] = useState(false); // Track video play state
  const [isPlayed, setPlayed] = useState(false);

  const handleClick = (videoElement: HTMLVideoElement) => {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play(); // Play the video if it is paused
        setIsPlaying(true); // Set state to true if the video is playing
      } else {
        videoElement.pause(); // Pause the video if it is playing
        setIsPlaying(false); // Set state to false if the video is paused
      }
      setPlayed(true);
    }
  };

  const handleSectionClick = () => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      handleClick(videoElement); // Trigger handleClick with the video element
    }
  };

  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section
      className="md:py-[32px]"
      onClick={handleSectionClick} // Play video on section click
    >{!isPlaying  && (
      <h1 className="md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%] md:p-5 mx-auto leading-[49px]">
        {data.page.aboutussections.videosectionheading}
      </h1>
        )}
      <div className="relative mx-auto table md:w-[80%]">
        {/* Use Image component for the video poster */}
        {!isPlayed && (
          <Image
            src={data.page.aboutussections.videosectionbackground?.node?.link}
            alt="Video Poster"
            width={1000}
            height={563}
            className="w-full rounded-lg relative"
          />
        )}

        <video
          className={`w-full rounded-lg ${isPlayed ? "" : "hidden"}`}
          loop
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering section click
            handleClick(e.currentTarget); // Play or pause video
          }}
        >
          <source src="videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying  && (
        <div className="md:absolute bottom-0 p-5 text-center md:text-left">
          <h2 className="md:text-[64px] text-[30px] font-bold text-black md:text-white md:w-[32%] leading-[65px]">
            {data.page.aboutussections.videosectiontitle}
          </h2>
          <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
            {data.page.aboutussections.videosectiondescription}
          </p>
        </div>
        )}
        <div className="absolute md:bottom-5 bottom-[57%] right-0 md:right-[5%] md:p-5">
          {isPlaying ? (
            <Image
              width={800}
              height={500}
              src="/117.png"
              className="md:w-[80%] w-[60%]"
              alt="Playing"
            />
          ) : (
            <Image
              width={800}
              height={500}
              src="/73.png"
              className="md:w-[80%] w-[60%]"
              alt="Paused"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
