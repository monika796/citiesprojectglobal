'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Book({ data }) {
    return (
        <div
            className="container mx-auto relative overflow-hidden md:h-[650px] rounded p-5"
            style={{ backgroundColor: 'rgb(3, 4, 2)' }}
        >
            <div
                className="flex flex-col md:flex-row w-[100%] mx-auto items-center relative z-10 h-full"

                // data.page.homefifthsection.fifthfirstimage?.node?.link
            >
                <div className="md:w-5/12 w-full p-[40px] md:p-[40px] mt-10 md:mt-0">
                    <span className="text-[18px] bg-white text-black font-bold mx-auto md:mx-0 text-center w-[45%] rounded-full px-4 py-2">
                        {data.page.homefifthsection.fifthfirstsubtitle}
                    </span>
                    <h5 className="md:text-[45px] text-[26px] w-max text-[#A1CF5F] md:text-left text-left font-bold pt-[20px] pb-[10px] md:leading-10 ">
                        {data.page.homefifthsection.mainheadingfifth}
                    </h5>
                    <p className="md:text-[45px] md:w-[80%] text-[22px] md:text-left text-left text-white md:leading-tight font-bold">
                        {data.page.homefifthsection.fifthheadingsimple}
                    </p>
                    <Image
                        src={data.page.homefifthsection.authorimage?.node?.link}
                        className="md:h-[150px] mx-unset mt-10 md:mt-0 md:mx-0 h-[83px]"
                        alt=""
                        width="200"
                        height="200"
                        objectFit="cover"
                    />

                    <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-5 mt-14">
                        {data.page.homefifthsection.authortitle}
                    </h5>
                    <h5 className="text-[12px] text-white md:text-left text-left font-bold">
                        {data.page.homefifthsection.authordesignation}
                    </h5>
                </div>
                <div className="md:w-8/12 h-full relative">
                    <Link
                        href={'javascript:void(0)'}
                        onClick={() => {
                            alert('Video player should replace images');
                        }}
                    >
                        <Image
                            src="/video.gif"
                            className="w-[224px] video-gif cursor-pointer"
                            alt=""
                            width="200"
                            height="200"
                        />
                    </Link>
                    <div className="md:float-right md:mt-[-50px] md:mr-3 mt-5 z-99999 absolute bottom-6 right-6">
                        <Link
                            href={data.page.homefifthsection.buttonlinkone}
                            className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold py-2 px-4 rounded-md text-sm"
                        >
                            {data.page.homefifthsection.fifthbuttonone}{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                id="arrow"
                            >
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
                        </Link>
                        <Link
                            href={data.page.homefifthsection.buttonlinksecond}
                            className=" mx-auto mt-[21px] md:mx-0 md:mt-4   flex items-center  gap-3 text-black bg-white font-bold py-2 px-4 rounded-md text-sm"
                        >
                            {data.page.homefifthsection.textbuttonsecond}{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                id="arrow"
                            >
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
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                src={data.page.homefifthsection.fifthfirstimage?.node?.link}
                className="w-[70%] h-full object-contain absolute top-4 right-0 z-0 aspect-video "
                quality={100}
                alt=""
                width="1000"
                height="800"
            />
        </div>
    );
}
