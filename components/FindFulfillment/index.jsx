import React from 'react';
import Image from 'next/image';

export default function FindFulfillment({ data }) {
    return (
        <div className="container max-w-[1480px] mx-auto">
            <div className="container w-[100%] mx-auto pt-[30px]  md:pt-[150px] md:pb-[100px]">
                <h1 className=" px-5 md:px-0 text-[25px] md:max-w-[1062px] md:mx-auto  md:text-[48px] pb-5 mt-10 md:mt-0 md:pb-15 text-black font-bold leading-[30.09px] md:leading-[46.09px] text-center">
                    {data.page.homefourtsection.mainheadingfourth}
                </h1>
                <div className=" flex items-center ">
                    <div className=" md:w-6/12 md:flex md:gap-3 md:items-center md:justify-center">
                        <div className=" md:w-6/12 p-2">
                            <Image
                                src={
                                    data.page.homefourtsection.firstimage?.node
                                        ?.link
                                }
                                alt=""
                                className="md:h-auto mx-auto w-full md:w-auto md:mx-0 h-[100%]"
                                width="200"
                                height="200"
                            />
                        </div>

                        <div className=" md:w-6/12 mt-4 md:mt-0 ">
                            <span className="mt-10 md:mt-0 text-[13px] bg-[#a1cf5f] text-black text-left mx-auto md:mx-0 w-[55%] rounded-[20px] px-3 py-1 font-bold">
                                {data.page.homefourtsection.firstsubtitle1}
                            </span>
                            <h5 className="text-[20px] pt-3 text-black  text-left md:text-left font-bold">
                                {data.page.homefourtsection.firstheading}
                            </h5>
                            <p className="text-[16px] text-black text-left md:text-left leading-tight mt-3">
                                {data.page.homefourtsection.firstparagraph}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end md:mt-[-80px]">
                    <div className="md:w-6/12 grid md:flex items-center justify-center md:relative left-30">
                        <div className="md:w-6/12 float-right md:order-1 order-2  mt-4 md:mt-0 ">
                            <span className="text-[13px] bg-[#a1cf5f] mx-auto md:mx-0 text-black text-left w-[55%] rounded-[20px] px-3 py-1 font-bold">
                                {data.page.homefourtsection.secondsubtitle}
                            </span>
                            <h5 className="text-[20px] pt-3 text-left md:text-left  text-black font-bold">
                                {data.page.homefourtsection.secondheading}
                            </h5>
                            <p className="text-[16px] text-left md:text-left text-black leading-normal mt-3 pe-6">
                                {data.page.homefourtsection.secondparagraph}
                            </p>
                        </div>
                        <div className="md:w-6/12 p-2 md:order-2">
                            <Image
                                src={
                                    data.page.homefourtsection.secondimage?.node
                                        ?.link
                                }
                                alt=""
                                className="mx-auto md:w-max md:mx-0 h-[300px] w-full"
                                width="200"
                                height="400"
                            />
                        </div>
                    </div>
                </div>

                <div className=" md:pl-[120px] flex items-center  md:mt-[-20px]">
                    <div className="md:w-6/12 md:flex md:items-center md:justify-center grid">
                        <div className="md:w-6/12 order-2 md:order-1  mt-4 md:mt-0 mb-10 md:mb-0">
                            <span className="text-[13px] bg-[#a1cf5f] text-black text-left mx-auto md:mx-0  w-[55%] rounded-[20px] px-3 py-1 font-bold">
                                {data.page.homefourtsection.thirdsubtitle}
                            </span>
                            <h5 className="text-[20px] pt-3  text-black text-left md:text-left font-bold">
                                {data.page.homefourtsection.thirdheading}
                            </h5>
                            <p className="text-[16px] text-black text-left md:text-left leading-normal  mt-3 ">
                                {data.page.homefourtsection.thirdparagraph}
                            </p>
                        </div>
                        <div className="md:w-6/12 p-2 order-1 md:order-2">
                            <Image
                                src={
                                    data.page.homefourtsection.thirdimage?.node
                                        ?.link
                                }
                                alt=""
                                className="md:w-[60%] md:h-auto mx-auto md:mx-0 h-[100%] w-full"
                                width="200"
                                height="200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
