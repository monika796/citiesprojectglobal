"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MainComponent from '@/components/LightboxPdf'

const FifthSection = ({ data, Video_gif }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [Played, setPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    // Open the modal
    const openModal = () => setIsModalOpen(true);
  
    // Close the modal
    const closeModal = () => setIsModalOpen(false);
  // const handleButtonClick = () => {
 //   setPlayed(!Played); // Toggle the state between true and false
 // };
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
    setPlayed(true);
  };

  return (
 
    

    <div className="container mx-auto max-w-[1481px]">
      <div
        className="flex flex-col md:flex-row w-[100%] pb-[10px] mx-auto items-center rounded-[5px]"
        style={{ backgroundColor: "rgb(3, 4, 2)" }}
      >
        {/* Left Content */}
        <div className="md:w-5/12 w-full p-[40px] md:p-[40px] mt-10 md:mt-0">
          <span className="text-[18px] bg-[#fff] text-black font-bold mx-auto md:mx-0 text-center w-[45%] rounded-[20px] px-4 py-1 font-bold">
            {data.page.homefifthsection.fifthfirstsubtitle}
          </span>
          <h5 className="md:text-[45px] text-[26px] text-[#A1CF5F] md:text-left text-left pb-[15px] font-bold pt-[20px] md:leading-10">
            {data.page.homefifthsection.mainheadingfifth}
          </h5>
          <p className="md:text-[45px] md:w-[87%] text-[22px] md:text-left text-left text-white md:leading-normal font-bold">
            {data.page.homefifthsection.fifthheadingsimple}
          </p>
          <Image
            src={data.page.homefifthsection.authorimage?.node?.link}
            className="md:h-[150px] mx-unset mt-10 md:mt-0 md:mx-0 h-[83px]"
            alt="image"
            width={800}
            height={500}
          />
          <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-5">
            {data.page.homefifthsection.authortitle}
          </h5>
          <h5 className="text-[12px] text-white md:text-left text-left font-bold">
            {data.page.homefifthsection.authordesignation}
          </h5>
        </div>

        {/* Right Content */}
        <div className="md:w-8/12 md:py-[30px] relative">
          {/* Black Box for Video */}
          <div className="bg-[rgb(3, 4, 2)] md:pr-5 rounded-lg">
            {isPlaying ? (
              <button
                className="absolute inset-0 flex items-center justify-center text-white text-3xl rounded-full"
              >
                <svg
                  fill="#fff"
                  height="50px"
                  width="50px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6C218.6,448,224,442.6,224,435.8z" />
                    <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1C384,69.4,378.6,64,371.8,64z" />
                  </g>
                </svg>
              </button>
            ) : (
              <Image
                src={Video_gif}
                className="w-[224px] video-gif cursor-pointer"
                alt="Video gif"
                width={100}
                height={100}
                onClick={handleVideoClick}
              />
            )}
            {/* Conditionally render the thumbnail or video */}
            {!isPlaying && !Played && (
              <Image
                src={data.page.homefifthsection.fifthfirstimage?.node?.link}
                alt="Video Thumbnail"
                width={1000}
                height={563}
                className="w-full cursor-pointer"
                onClick={handleVideoClick}
              />
            )}
            {Played &&(
              <video
                ref={videoRef}
                className="w-full"
                src="videos.mp4"
                onClick={handleVideoClick}
                autoPlay
              ></video>
            )}
          </div>

          {/* Buttons */}
          <div className="md:float-right md:mt-[-50px] md:mr-3 mt-5 z-999 relative">
            <Link href={data.page.homefifthsection.buttonlinkone}>
              <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                {data.page.homefifthsection.fifthbuttonone}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M1 13 13 1M4 1h9v9"></path>
                  </g>
                </svg>
              </button>
            </Link>
            {/* <Link href={data.page.homefifthsection.buttonlinksecond}> */}
              <div onClick={openModal} className=" mx-auto mt-[21px] md:mx-0 md:mt-4 flex items-center gap-3 text-black bg-white font-bold p-2 rounded-[5px]">
                <MainComponent  extraclass=''
                buttonText={data.page.homefifthsection.textbuttonsecond}  // Pass dynamic text as prop
                pdfUrl="/SampleChapter.pdf#scrollbar=0"  // Pass the dynamic PDF URL
              />
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M1 13 13 1M4 1h9v9"></path>
                  </g>
                </svg>
              </div>
             
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>

  );
};

export default FifthSection;
