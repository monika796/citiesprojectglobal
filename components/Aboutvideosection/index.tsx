"use client";

import dynamic from "next/dynamic";
import { gql, useQuery } from '@apollo/client';
import client from 'apollo-client';
import { useState } from 'react';

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

const handleClick = (videoElement: HTMLVideoElement, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>) => {
  if (videoElement) {
    if (videoElement.paused) {
      videoElement.play(); // Play the video if it is paused
      setIsPlaying(true); // Set state to true if the video is playing
    } else {
      videoElement.pause(); // Pause the video if it is playing
      setIsPlaying(false); // Set state to false if the video is paused
    }
  }
};

const VideoPlayer = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  const [isPlaying, setIsPlaying] = useState(false); // Track video play state

  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="md:py-[32px]" 
    onClick={(e) => {
      // Ensure handleClick is triggered on section click as well
      const videoElement = document.querySelector("video");
      if (videoElement) {
        handleClick(videoElement, setIsPlaying); // Only trigger handleClick if video element is clicked
      }
    }}>
      <h1 className="md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%] md:p-5 mx-auto leading-[49px]">
        {data.page.aboutussections.videosectionheading}
      </h1>
      <div className="relative mx-auto table md:w-[80%]">
        <video
          className="w-full rounded-lg"
          poster={data.page.aboutussections.videosectionbackground?.node?.link}
          loop
          onClick={(e) => handleClick(e.currentTarget, setIsPlaying)} // Pass the clicked video element and setIsPlaying
        >
          <source src="https://digitractive.com/cityprojectglobal/wp-content/uploads/2024/12/3249935-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Conditionally render images */}
        <div className="md:absolute bottom-0 p-5 text-center md:text-left">
          <h2 className="md:text-[64px] text-[30px] font-bold text-black md:text-white md:w-[32%] leading-[65px]">
            {data.page.aboutussections.videosectiontitle}
          </h2>
          <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
            {data.page.aboutussections.videosectiondescription}
          </p>
        </div>

        <div className=" absolute md:bottom-5 bottom-[57%] right-0  md:right-[5%] md:p-5" >
          {isPlaying ? (
            <Image  src="/117.png" className="md:w-[80%] w-[60%]" alt="Playing" / width="200" height="200" /> // Image when video is playing
          ) : (
            <Image  src="/73.png" className="md:w-[80%] w-[60%]" alt="Paused" / width="200" height="200" /> // Default image
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
