"use client";

import dynamic from "next/dynamic";
import { gql, useQuery } from '@apollo/client';
import client from 'apollo-client';
import { useState } from 'react';
import Image from "next/image";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo0MzM=") {
     bookPageFeilds {
        bookSixthSectionVideoDescription
            bookSixthSectionVideoHeading
            bookSixthSectionVideoLink
            bookSixthSectionVideoMainHeading
         bookSixthSectionVideoThumbnail {
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
      <h1 className="md:text-[40px] text-[25px] font-bold text-center text-black md:w-[60%] md:p-5 mx-auto leading-[49px]">
        {data.page.bookPageFeilds.bookSixthSectionVideoMainHeading}
      </h1>
      <div className="relative mx-auto table md:w-[80%]">
        <video
          className="w-full rounded-lg"
          poster='/119.png'
          loop
          onClick={(e) => handleClick(e.currentTarget, setIsPlaying)} // Pass the clicked video element and setIsPlaying
        >
          <source src="https://digitractive.com/cityprojectglobal/wp-content/uploads/2024/12/3249935-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Conditionally render images */}
        <div className="md:absolute bottom-0 p-10 text-center md:text-left">
        <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[40%] leading-[70px] mb-5">
        CPG Outcomes
          </h2>
          <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
          For decades now, I have witnessed the near non-existence of the practical intersection between faith and work.
          </p>
        </div>
        <div className=" absolute w-[95px] top-0 right-0 md:w-auto  md:top-5 md:right-[3%] p-5">
          <Image alt="" width={700} height={700} src="/120.png" className="w-[80%]" /></div>
        <div className=" absolute md:bottom-5 bottom-[57%] right-0  md:right-[5%] md:p-5" >
          {isPlaying ? (
            <Image  width={700} height={700}  src="/117.png" className="md:w-[80%] w-[60%]" alt="Playing" /> // Image when video is playing
          ) : (
            <Image  width={700} height={700}  src="/73.png" className="md:w-[80%] w-[60%]" alt="Paused" /> // Default image
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
