"use client";

import dynamic from "next/dynamic";
import { gql, useQuery } from '@apollo/client';
import client from 'apollo-client';
import { useState ,useEffect } from 'react';
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



const VideoPlayer = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  const [isPlaying, setIsPlaying] = useState(false); // Track video play state
  const [isPlayed, setPlayed] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
    
      // Function to update the state based on the window width
      const updateMobileView = () => {
        if (window.innerWidth <= 768) {
          setIsMobile(true);  // Mobile view
        } else {
          setIsMobile(false); // Desktop view
        }
      };
    
      // Update the view on component mount and on window resize
      useEffect(() => {
        updateMobileView(); // Check on initial render
    
        // Set up a resize event listener
        window.addEventListener("resize", updateMobileView);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener("resize", updateMobileView);
        };
      }, []);



  const handleClick = (videoElement: HTMLVideoElement, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (videoElement) { console.log(videoElement);
      if (videoElement.paused) {
        videoElement.play(); // Play the video if it is paused
        setIsPlaying(true); // Set state to true if the video is playing
      } else {
        videoElement.pause(); // Pause the video if it is playing
        setIsPlaying(false); // Set state to false if the video is paused
      }
    } setPlayed(true);
  };
  if (loading) return null;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="md:py-[32px]" 
    // onClick={() => {
    //   // Ensure handleClick is triggered on section click as well
    //   const videoElement = document.querySelector("video");
    //   if (videoElement) {
    //     handleClick(videoElement, setIsPlaying); // Only trigger handleClick if video element is clicked
    //   }
    // }}
    >
     {!isPlaying  && !isMobile  && ( <h1 className="md:text-[40px] mb-10 text-[25px] font-bold text-center text-black md:w-[60%] md:p-5 mx-auto leading-[30px] md:leading-[49px]">
        {data.page.bookPageFeilds.bookSixthSectionVideoMainHeading}
      </h1> )}
      {isMobile  && ( <h1 className="md:text-[40px] mb-10 text-[25px] font-bold text-center text-black md:w-[60%] md:p-5 mx-auto leading-[30px] md:leading-[49px]">
        {data.page.bookPageFeilds.bookSixthSectionVideoMainHeading}
      </h1> )}
      
      <div className="relative mx-auto table md:w-[80%]">

         {!isPlayed && (
                  <Image
                    src={data.page.bookPageFeilds.bookSixthSectionVideoThumbnail?.node?.link}
                    alt="Video Poster"
                    width={1000}
                    height={563}
                    className="w-full rounded-lg relative"
                    onClick={(e) => {
                    //  Ensure handleClick is triggered on section click as well
                     const videoElement = document.querySelector("video");
                      if (videoElement) {
                        handleClick(videoElement, setIsPlaying); // Only trigger handleClick if video element is clicked
                      }
                    }} // Pass the clicked video element and setIsPlaying
                  />
                )}
        <video
          className={`w-full rounded-lg ${isPlayed ? '' : 'hidden'}`}
         
          loop
          onClick={(e) => handleClick(e.currentTarget, setIsPlaying)} // Pass the clicked video element and setIsPlaying
        >
          <source src="videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Conditionally render images */}
        {!isPlaying  && !isMobile  &&  (  <div className="md:absolute bottom-0 p-5 text-center md:text-left">
        <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[40%] leading-[70px] mb-5">
          {data.page.bookPageFeilds.bookSixthSectionVideoHeading}
          </h2>
          <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
          {data.page.bookPageFeilds.bookSixthSectionVideoDescription}
          </p>
        </div>
      )}
 {isMobile  && (  <div className="md:absolute bottom-0 p-5 text-center md:text-left">
        <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[40%] leading-[70px] mb-5">
          {data.page.bookPageFeilds.bookSixthSectionVideoHeading}
          </h2>
          <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
          {data.page.bookPageFeilds.bookSixthSectionVideoDescription}
          </p>
        </div>
      )}


      {!isPlaying  &&(  <div className=" absolute w-[95px] top-0 right-0 md:w-auto  md:top-5 md:right-[3%] p-5">
          <Image alt="" width={700} height={700} src="/91.png" className="w-[80%]" /></div>  )}



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
