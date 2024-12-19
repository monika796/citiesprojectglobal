import React from 'react'
import Image from 'next/image'
import Imageone from '/public/leader-image1.png';
import Imagetwo from '/public/leader-image2.png';
import Divider from '/public/design-divider.png';
import Leaderbg from '/public/leader-bg.png';
import Threeimg from '/public/32.png';
import fourimg from '/public/cover.png';
import Pcover from '/public/city.png';
import Integrated from '/public/Integrated.png';
import Calling from '/public/calling.png';
import Avatar from '/public/avatar.png';
import Union from '/public/union-icon.png';
import Collective from '/public/collective.png';
import VideoPlayer from '@/components/Leadershipvideosection'
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import { gql } from '@apollo/client';
import client from 'apollo-client';

const POSTS_QUERY = gql 
`query MyQuery2 {
  page(id: "cG9zdDo2MDg=") {
    leadershipPageFeilds {
      leadershipEightSectionFields {
        leadershipEightSectionFirstRowFirstColumnDescription
        leadershipEightSectionFirstRowFirstColumnHeading
        leadershipEightSectionFirstRowSecondColumnImage {
          node {
            link
          }
        }
        leadershipEightSectionFirstRowThirdDescription
        leadershipEightSectionFirstRowThirdHeading
        leadershipEightSectionMainDescription
        leadershipEightSectionMainHeading
        leadershipEightSectionSecondRowFirstImage {
          node {
            link
          }
        }
        leadershipEightSectionSecondRowSecondDescription
        leadershipEightSectionSecondRowSecondHeading
        leadershipEightSectionSecondRowThirdImage {
          node {
            link
          }
        }
      }
      leadershipEleventhSection {
        leadershipEleventhSectionFirstSection {
          leadershipEleventhFirstText
          leadershipEleventhFirstImage {
            node {
              link
            }
          }
        }
        leadershipEleventhSectionMainHeading
        leadershipEleventhSectionSecondButtonLink
        leadershipEleventhSectionSecondButtonText
        leadershipEleventhSectionSecondDescription
        leadershipEleventhSectionSecondImage {
          node {
            link
          }
        }
      }
      leadershipFifthSectionFields {
        leadershipFifthSectionFirstColumnDescription
        leadershipFifthSectionFirstColumnHeading
        leadershipFifthSectionFirstColumnImages {
          node {
            link
          }
        }
        leadershipFifthSectionSecondColumnDescription1
        leadershipFifthSectionSecondColumnDescription2
        leadershipFifthSectionSecondColumnDescription3
        leadershipFifthSectionSecondColumnDescriptionHeading1
        leadershipFifthSectionSecondColumnDescriptionHeading2
        leadershipFifthSectionSecondColumnDescriptionHeading3
        leadershipFifthSectionSecondColumnMainHeading
        leadershipFifthSectionThirdColumnImage {
          node {
            link
          }
        }
      }
      leadershipFirstSectionFeilds {
        leadershipFirstSectionSecondColumnDescription1
        leadershipFirstSectionSecondColumnDescription2
        leadershipFirstSectionSecondColumnHeading
        leadershipFirstSectionFirstColumnImage {
          node {
            link
          }
        }
        leadershipFirstSectionThirdColumnImage {
          node {
            link
          }
        }
      }
      leadershipFourthSectionFields {
        leadershipFourthSectionFirstColumnImage {
          node {
            link
          }
        }
        leadershipFourthSectionMainHeading
        leadershipFourthSectionSecondColumnDescription1
        leadershipFourthSectionSecondColumnDescription2
        leadershipFourthSectionThirdColumnDescription1
        leadershipFourthSectionThirdColumnDescription2
      }
      leadershipMainHeading
      leadershipNinthSection {
        leadershipNinthSectionFirstColumnImage {
          node {
            link
          }
        }
        leadershipNinthSectionMainHeading
        leadershipNinthSectionSecondColumnText
        leadershipNinthSectionThirdColumnImage {
          node {
            link
          }
        }
      }
      leadershipSecondSectionFields {
        leadershipSecondSectionFirstColumnButtonLink
        leadershipSecondSectionFirstColumnButtonText
        leadershipSecondSectionFirstColumnDescription
        leadershipSecondSectionFirstColumnHeading
        leadershipSecondSectionSecondColumnBackgroundImage {
          node {
            link
          }
        }
        leadershipSecondSectionSecondColumnBox {
          leadershipSecondSectionSecondColumnBoxButtonLink
          leadershipSecondSectionSecondColumnBoxButtonText
          leadershipSecondSectionSecondColumnBoxDescription
          leadershipSecondSectionSecondColumnBoxHeading
        }
      }
      leadershipSeventhSectionFields {
        leadershipSeventhSectionButtonLink
        leadershipSeventhSectionButtonText
        leadershipSeventhSectionDescription
        leadershipSeventhSectionMainHeading
        leadershipSeventhSectionMainImage {
          node {
            link
          }
        }
        leadershipSeventhSectionSubheading
      }
      leadershipSixthSectionFields {
        leadershipSixthSectionFirstRowFirstColumnImage {
          node {
            link
          }
        }
        leadershipSixthSectionFirstRowSecondColumnDescription
        leadershipSixthSectionFirstRowSecondColumnHeading
        leadershipSixthSectionMainDescription
        leadershipSixthSectionMainHeading
        leadershipSixthSectionSecondRowSecondColumnDescription
        leadershipSixthSectionSecondRowFirstColumnImage {
          node {
            link
          }
        }
        leadershipSixthSectionSecondRowSecondColumnHeading
        leadershipSixthSectionSecondRowThirdColumnImages {
          node {
            link
          }
        }
        leadershipSixthSectionThirdRowFirstColumnImages {
          node {
            link
          }
        }
        leadershipSixthSectionThirdRowSecondsColumnDescription
        leadershipSixthSectionThirdRowSecondsColumnHeading
      }
      leadershipTenthSection {
        leadershipTenthSectionFirstColumnText
        leadershipTenthSectionSecondColumnDescription1
        leadershipTenthSectionSecondColumnDescription2
        leadershipTenthSectionSecondColumnDescription3
        leadershipTenthSectionSecondColumnDescriptionGreenColor
        leadershipTenthSectionSecondColumnHeading
      }
      leadershipThirdSectionFields {
        leadershipThirdSectionBox {
          leadershipThirdSectionBoxDescription
          leadershipThirdSectionBoxHeading
          leadershipThirdSectionBoxImages {
          node {
            link
          }
        }
        }
        leadershipThirdSectionMainHeading
      }
      leadershipThirteenSection {
        leadershipThirteenSectionButtonLink
        leadershipThirteenSectionButtonText
        leadershipThirteenSectionHeading
      }
      leadershipTwelfthSection {
        leadershipTwelfthSectionFirstRowFirstColumn
        leadershipTwelfthSectionFirstRowSecondColumnDescription
        leadershipTwelfthSectionMainHeading
        leadershipTwelfthSectionSecondRowFirstColumnDescription
        leadershipTwelfthSectionSecondRowFirstColumnHeading
        leadershipTwelfthSectionSecondRowSecondColumnImage1 {
          node {
            link
          }
        }
        leadershipTwelfthSectionSecondRowSecondColumnImage2 {
          node {
            link
          }
        }
      }
      leadershipVideoSection {
      leadershipVideoSectionMainHeading
        leadershipVideoSectionBackgroundImage {
          node {
            link
          }
        }
        leadershipVideoSectionDescripiton
        leadershipVideoSectionHeading
        leadershipVideoSectionTopImage {
          node {
            link
          }
        }
      }
      vantageFormThirdSection {
        vantageFormThirdSectionImage1 {
          node {
            link
          }
        }
        vantageFormThirdSectionImage2 {
          node {
            link
          }
        }
        vantageFormThirdSectionImage3 {
          node {
            link
          }
        }
        vantageFormThirdSectionImage4 {
          node {
            link
          }
        }
        vantageFormThirdSectionImage5 {
          node {
            link
          }
        }
      }
    }
  }
}`;

async function fetchData() {
  const { data } = await client.query({
    query: POSTS_QUERY,
  });
  return data;
}

const page = async () => {
  const data = await fetchData();
  console.log(data);
  return (
    <div>
      <div className="container mx-auto max-w-[1480px]">
        <section>
          <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[1178px] md:text-[64px] text-[25px] leading-[38px]  font-bold text-center text-black  p-5 mx-auto md:leading-[77px] ">
            {data.page.leadershipPageFeilds.leadershipMainHeading}
          </h1>
        </section>
        <section>
          <div className=" font-sans bg-white">
            <div className="flex md:flex-nowrap justify-between gap-5 flex-wrap gap-12 mt-5">
              <div className="relative max-w-[30%]">
                <Image
                  src={data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionFirstColumnImage?.node?.link}
                  alt="Group Discussion"
                  width={337}
                  height={247}
                  className=" object-cover"
                />
              </div>

              <div className="text-left max-w-[40%]">
                <h1 className="text-[32px] font-light leading-tight text-gray-900 mb-6">
                {data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionSecondColumnHeading} 
                </h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                {data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionSecondColumnDescription1}
                </p>
                <p className="text-gray-700 leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionSecondColumnDescription2}
                
                </p>
              </div>
              <div className=" px-12 pb-0 flex justify-end items-end max-w-[20%]">
                <Image
                  src={data.page.leadershipPageFeilds.leadershipFirstSectionFeilds.leadershipFirstSectionThirdColumnImage?.node?.link}
                  alt="Woman in church"
                  width={240}
                  height={149}
                  className="rounded-md "
                />
              </div>
            </div>

            {/* Bottom Right Small Image */}

          </div>
        </section>

        <section className='my-20'>
          <div className="font-sans bg-white grid grid-cols-3 gap-3 py-20">
            {/* Left Section */}
            <div className="bg-[#121212]  text-white flex flex-col items-center justify-center px-15 py-25 h-[751px]">
              <h1 className="text-3xl font-bold mb-6 text-center">
              {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionFirstColumnHeading} 
              </h1>
              <div className="flex justify-center mb-10 mt-5">
                <Image
                  src={Divider}
                  alt="Faith Icon"
                  width={300}

                  height={50}
                />
              </div>
              <p className="text-gray-300 text-center leading-relaxed mb-8">
              {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionFirstColumnDescription}
              </p>
              <a
                href={data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionFirstColumnButtonLink}
                className="bg-[#A1CF5F] hover:bg-green-600 text-black font-semibold py-2 px-4 rounded flex items-center justify-center"
              >
               {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionFirstColumnButtonText}
                <span className="ml-2">↗</span>
              </a>
            </div>

            {/* Right Section */}
            <div className="relative col-span-2">
              {/* Background Image */}
              <Image
                src={data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBackgroundImage?.node?.link}
                alt="Speaker Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />

              {/* Cards */}
              <div className="absolute bottom-8 right-8 space-y-6 w-[310px]">
                {/* Global Leadership Circle */}
                <div className="bg-[#B8EA81] p-6 rounded-[5px] shadow-md w-[310px]">
                <Image
                  src={Union}
                  alt="Faith Icon"
                  width={25}
                  height={29} className='ml-auto'
                />
                  <h2 className="text-black font-bold text-[23px] mb-2">
                  {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxHeading}

                  </h2>
                  <p className=" text-black mt-3 mb-8">
                  {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxDescription}

                  </p>
                  <Link
                    href={data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxButtonLink}
                    className="bg-white text-black font-medium py-2 px-4 rounded border border-gray-200  hover:bg-gray-100"
                  >
                    {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[0].leadershipSecondSectionSecondColumnBoxButtonText} <span className="ml-2">↗</span>
                  </Link>
                </div>

                {/* Denver Leadership Circle */}
                <div className="bg-white p-6  rounded-[5px]  shadow-md w-[310px]">
                <Image
                  src={Union}
                  alt="Faith Icon"
                  width={25}
className='ml-auto'
                  height={29}
                />
                  <h2 className="text-black font-bold text-[23px] mb-2">
                  {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxHeading}

                  </h2>
                  <p className="text-gray-600 mt-3 mb-8">
                  {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxHeading}

                  </p>
                  <a
                    href={data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxButtonLink}
                    className="bg-[#A1CF5F] hover:bg-green-600 text-black font-medium py-2 px-4 rounded "
                  >
                   {data.page.leadershipPageFeilds.leadershipSecondSectionFields.leadershipSecondSectionSecondColumnBox[1].leadershipSecondSectionSecondColumnBoxButtonText}
                   <span className="ml-2">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className=" mt-0  max-w-[900px] md:text-[48px] text-[25px] leading-[38px]  font-bold text-center text-black  mx-auto md:leading-[77px] ">
          {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionMainHeading}  
          </h1>
        </section>
        <section>
          <div className="max-w-[1155px] mx-auto bg-white py-16 ">
            {/* Card Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#F5F5F5] p-6 max-w-[355px]">
                {/* Icon and Image */}
                <div className="flex mb-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <Image
                    src={data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[0].leadershipThirdSectionBoxImages?.node?.link}
                    alt="Discussion Image"
                    width={120}
                    height={80}
                    className="rounded-md ml-auto"
                  />
                </div>
                {/* Content */}
                <h2 className="font-bold text-black text-lg mb-2 mt-20 w-[219px]"> {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[0].leadershipThirdSectionBoxHeading}  </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[0].leadershipThirdSectionBoxDescription}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F5F5F5] p-6 max-w-[355px]">
                {/* Icon and Image */}
                <div className="flex mb-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center ">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <Image
                    src={data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[1].leadershipThirdSectionBoxImages?.node?.link}
                    alt="Collaboration Image"
                    width={120}
                    height={80}
                    className="rounded-md ml-auto"
                  />
                </div>
                {/* Content */}
                <h2 className="font-bold text-black text-lg mb-2 mt-20 w-[219px]">
                {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[1].leadershipThirdSectionBoxHeading} 
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[1].leadershipThirdSectionBoxDescription} 
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F5F5F5] p-6 max-w-[355px]">
                {/* Icon and Image */}
                <div className="flex mb-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center ">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <Image
                    src={data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[2].leadershipThirdSectionBoxImages?.node?.link}
                    alt="Transformation Tools"
                    width={120}
                    height={80}
                    className="rounded-md ml-auto"
                  />
                </div>
                {/* Content */}
                <h2 className="font-bold text-black text-lg mb-2 mt-20 w-[270px]">
                {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[2].leadershipThirdSectionBoxHeading} 
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipThirdSectionFields.leadershipThirdSectionBox[2].leadershipThirdSectionBoxDescription} 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[800px] md:text-[48px] text-[25px] leading-[38px]  font-bold  text-black  md:leading-[58px] ">
          {data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionMainHeading}
          </h1>
        </section>
        <section>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-10 ">
            <div>
              <Image
                src={data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionFirstColumnImage?.node?.link}
                alt="Transformation Tools"
                width={539}
                height={418}
                className=""
              />

            </div>
            <div className='pt-3 px-5'>
            <p className='text-black'>
            {data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionSecondColumnDescription1}  </p>
              <p className='mt-5 text-black'>
              {data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionSecondColumnDescription2}  </p>
            </div>
            <div className='pt-3 px-5'>
              <p className='text-black'> {data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionThirdColumnDescription1}  </p>
              <p className='mt-5 text-black'>
              {data.page.leadershipPageFeilds.leadershipFourthSectionFields.leadershipFourthSectionThirdColumnDescription2}
             </p>
            </div>
          </div>
        </section>

        <section className='my-40'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className='w-[479px]'>
              <h2 className='text-[48px] leading-[58.09px] font-bold text-black'>{data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionFirstColumnHeading}</h2>
              <p className='text-[16px] leading-[22px] max-w-[382px] mb-13 mt-5'>{data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionFirstColumnDescription}</p>
              <Image
                src={data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionFirstColumnImages?.node?.link}
                alt="Transformation Tools"
                width={387}
                height={258}
                className=""
              />

            </div>
            <div className='col-span-2 md:pl-[50px]' >
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='col-span-2 px-10'>
                  <h3 className='font-bold text-[24px] leading-[20px] text-black mb-6'>Our city today</h3>
                  <p className='font-[16px] leading-[23px] text-black mt-6'>
                    <b>{data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionSecondColumnDescriptionHeading1}</b> 
                    {data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionSecondColumnDescription1} </p>
                  <p className='font-[16px] leading-[23px] text-black mt-6'>
                    <b>{data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionSecondColumnDescriptionHeading2}</b> 
                    {data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionSecondColumnDescription2}  </p>
                  <p className='font-[16px] leading-[23px] text-black mt-6'>
                    <b>{data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionSecondColumnDescriptionHeading3}</b> 
                    {data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionSecondColumnDescription3}  </p>
                </div>
                <div>
                  <Image src={data.page.leadershipPageFeilds.leadershipFifthSectionFields.leadershipFifthSectionThirdColumnImage?.node?.link}
                   alt="" width={356} height={550} ></Image>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section className='my-20'>
                <h2 className='text-[48px] text-black font-bold text-center'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionMainHeading}</h2>
                <p className='text-[16px] mt-10 text-center text-black'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionMainDescription}</p>
     
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20'>
            <div >              
              <Image src={data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionFirstRowFirstColumnImage?.node?.link} alt="" width={714} height={385} ></Image>            
            </div>
            <div className='flex justify-center items-start flex-col'>
              <div className='max-w-[545px]'>
                    <h2 className='text-[24px] text-black font-bold leading-[23px] mb-6'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionFirstRowSecondColumnHeading}</h2>
                    <p className='text-black'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionFirstRowSecondColumnDescription}</p>
              </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>

            <div className='flex justify-between items-center gap-5 '>
              <div className='md:w-[50%]'>
                <Image src={data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionSecondRowFirstColumnImage?.node?.link} alt="" width={319} height={375}></Image>
              </div>
              <div className='md:w-[50%]'>
                    <h2 className='text-[24px] text-black font-bold leading-[23px] mb-6'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionSecondRowSecondColumnHeading}</h2>
                    <p className='text-black'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionSecondRowSecondColumnDescription}</p>
              </div>
            </div>
            <div >              
              <Image src={data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionSecondRowThirdColumnImages?.node?.link} alt="" width={714} height={385} ></Image>            
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>

          <div className='flex justify-between items-center '>
            <div className='md:w-[50%]'>
            </div>
            <div className='md:w-[50%]'>
              <Image src={data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionThirdRowFirstColumnImages?.node?.link} alt="" width={319} height={375}></Image>
                 
            </div>
          </div>
          <div className='flex justify-center items-start flex-col' >  
            <div className='max-w-[454px]'>
          <h2 className='text-[24px] text-black font-bold leading-[23px] mb-6'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionThirdRowSecondsColumnHeading}</h2>
          <p className='text-black'>{data.page.leadershipPageFeilds.leadershipSixthSectionFields.leadershipSixthSectionThirdRowSecondsColumnDescription}</p>
              </div>            
          </div>
          </div>
        </section>

        <section className='my-[100px]'>
           <div className="mx-auto">
      <div className=" mx-auto bg-[#F5F5F5] relative   max-w-[986px] w-full">
        {/* Left Content */}
        <div className="lg:w-[100%] text-left  flex flex-col gap-3 justify-center items-start lg:items-start p-15 relative h-[510px]" style={{
    backgroundImage: "url('/bg.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}>
          <div className="flex items-center ">
            {/* Icon or Circle */}
            <div className="w-[52px] h-[52px] bg-[#A1CF5F] rounded-full"></div>
            <div className="ml-[-20px] w-[52px] h-[52px] bg-white rounded-full"></div>
          </div>
          <h3 className="text-[16px] font-bold text-bold text-black uppercase mt-5">
          {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionSubheading}
          </h3>
          <h1 className="text-[32px] font-bold text-black mt-0">
          {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionMainHeading}
          </h1>
          <p className="text-black text-[16px] w-[400px]">
          {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionDescription}
          </p>
          {/* Button */}
          <a
            href={data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionButtonLink}
            className="inline-flex items-center mt-20 justify-center w-[132px] h-[40px] text-sm font-bold text-black bg-[#A1CF5F] hover:bg-green-600 rounded-md transition duration-200"
          >
            {data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionButtonText}
            <span className="ml-2 text-lg">↗</span>
          </a>
          <Image src={data.page.leadershipPageFeilds.leadershipSeventhSectionFields.leadershipSeventhSectionMainImage?.node?.link}  width={603} height={510} alt='' className='absolute right-0 top-0 m-0 p-0'></Image>
        </div>

        {/* <div className="relative mt-8 lg:mt-0 lg:w-[60%]">
         
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "url('/path/to/blue-abstract-line.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              zIndex: -1,
            }}
          ></div>
        </div> */}
      </div>
    </div>
        </section>
          {/* Gurpreet Start */}
          <section className='pt-10 pb-10'>
          <h2 className='mx-auto text-center text-[48px] text-black font-bold text-center' >{data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionMainHeading}</h2>
          <p  className='text-[16px] mt-6 text-center text-black mx-auto text-center pb-10 '>{data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionMainDescription}</p>
          <div className='grid grid-cols-1 md:grid-cols-3 '>
            <div className=' py-24 px-[10px]'>
              <div className="h-[280px] grid items-center">
                <div>

               <h2 className=' text-left text-[20px] text-black font-bold leading-[23px] mb-3 w-[377px]' >{data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionFirstRowFirstColumnHeading}</h2>
               <p  className='  text-black text-[16px] leading-[23px] text-left mb-15 w-[377px]'>{data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionFirstRowFirstColumnDescription}</p>
                </div>
              </div>
              <Image src={data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionSecondRowFirstImage?.node?.link} alt="" width={453} height={280}></Image>
          </div>
            <div className=' py-24 px-[10px]'>  
            <Image src={data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionFirstRowSecondColumnImage?.node?.link} alt="" width={453} height={280}></Image>
            <div className="h-[280px] grid items-center">
              <div>

               <h2 className='text-left text-[20px] text-black font-bold leading-[23px] mb-3 w-[377px] mt-15' >{data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionFirstRowThirdHeading}</h2>
               <p  className='text-black text-[16px] leading-[23px] text-left  w-[377px]'>
               
               {data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionFirstRowThirdDescription}
               </p>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='py-24 px-[10px]'>
            <div className="h-[280px] grid items-center">
            <div>
               <h2 className='mx-auto text-left text-[24px] text-black font-bold leading-[23px] mb-6' >{data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionSecondRowSecondHeading}</h2>
               <p  className='mx-auto text-black text-left'>{data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionSecondRowSecondDescription}</p>
              </div>
              </div>  
               <Image src={data.page.leadershipPageFeilds.leadershipEightSectionFields.leadershipEightSectionSecondRowThirdImage?.node?.link} alt="" width={453} height={280}></Image>
          </div>
          </div>
          </div>
          
          </section>

          <VideoPlayer />

          <section className='mt-[6rem]'>
          <h2 className='md:text-[48px] text-[25px] font-bold text-left text-black md:w-[450px]  leading-[49px]'>
          {data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionMainHeading}
          </h2>
          <div className='flex mt-15'>
            <div className='flex md:w-8/12'>
              <div className='md:w-2/6 pt-0'>
              <Image className='' src={data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionFirstColumnImage?.node?.link} alt='' width={251} height={251} />
              </div>  
              <div className='md:w-4/6 p-10  pt-0' >{data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionSecondColumnText}
             </div>
            </div>
            <div className='md:w-4/12'>
            <Image className='' src={data.page.leadershipPageFeilds.leadershipNinthSection.leadershipNinthSectionThirdColumnImage?.node?.link} alt='' width={1000} height={1000} />
            </div>
          </div>

          </section>
            <section className='bg-[#000000]'>
            <div className='flex w-[90%] mx-auto md:py-20'>
              <div className='w-6/12 border-b border-[#252525]'>
              <h2 className='md:text-[15px] text-[10px] font-bold text-left text-white md:w-[50%] md:p-5 '>
             {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionFirstColumnText}
              </h2>
              
              </div>
              <div className='w-6/12 '>
              <h1 className="text-5xl font-semibold leading-tight text-white  mb-6">
              {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnHeading}
                </h1>
                <p className="text-white leading-relaxed mb-4">
                {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnDescription1} </p>
                <p  className="text-white leading-relaxed mb-4">
                {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnDescription2}<span className="text-[#A1CF5F] underline cursor-pointer">
                {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnDescriptionGreenColor}
                  </span> and more.
                </p>
                <p className="text-white leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipTenthSection.leadershipTenthSectionSecondColumnDescription3}  </p> <br />
              </div>
            </div>
            <div className=''>
            <h2 className="md:text-[47px] text-[25px] font-bold text-left text-white md:w-[40%] md:p-5 leading-[49px]">
             {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionMainHeading}
            </h2>
            <div className='flex'>
              
                    <div className="md:w-[30%]  md:pl-10 md:pr-10 md:pt-0 pt-20 relative">
                                      
                                       
                                       <div className='m-5 pb-3'>
                                          <Image width={50} height={50} alt="" src={data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[0].leadershipEleventhFirstImage?.node?.link} className="mx-auto md:mx-0"  />
                                          <h5 className="text-white text-[18px] w-[60%] md:text-left text-center">
                                          {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[0].leadershipEleventhFirstText}
                                          </h5>
                                          </div>
                                          <div className='m-5  pb-3'>
                                          <Image width={50} height={50} alt="" src={data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[1].leadershipEleventhFirstImage?.node?.link} className="mx-auto md:mx-0"  />
                                          <h5 className="text-white text-[18px] w-[60%] md:text-left text-center">
                                          {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[1].leadershipEleventhFirstText}
                                          </h5>
                                          </div>
                                          <div className='m-5  pb-3'>
                                          <Image width={50} height={50} alt="" src={data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[2].leadershipEleventhFirstImage?.node?.link} className="mx-auto md:mx-0"  />
                                          <h5 className="text-white text-[18px] w-[60%] md:text-left text-center">
                                          {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionFirstSection[2].leadershipEleventhFirstText}
                                          </h5>
                                          </div>
                                      </div>
               
                  <div className='w-9/12 pb-20'>
                      <Image className='' alt='' width={1000} height={1000} src={data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondImage?.node?.link} />

                      <p className=" w-[45%] text-gray-300 leading-relaxed my-8">
                      {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondDescription}
              </p>
              <Link
                href= {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondButtonLink}
                className="bg-[#A1CF5F] mb-10  text-black font-semibold py-2 px-4 rounded "
              >
                {data.page.leadershipPageFeilds.leadershipEleventhSection.leadershipEleventhSectionSecondButtonText}
                <span className="ml-2">↗</span>
              </Link>
              
                    </div>              
            </div>
            </div>
            </section>


            <section className='container w-[85%] mx-auto py-20'>
            <h1 className="text-5xl w-[40%] font-bold leading-tight text-[#000000] mb-6">
            {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading}
                </h1>
             <div className='flex'>
               <div className='w-1/2'>
                
                 <p className="text-[#000000] leading-relaxed mb-4"
                 
                >{data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionFirstRowFirstColumn}
                 </p>
                {/* <p className="text-[#000000] leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading}  </p>
                <p className="text-[#000000] leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading} </p>*/}
                </div> 
                <div className='w-1/2'>
                <p className="text-[#000000] leading-relaxed mb-4"
                 
                >{data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionFirstRowSecondColumnDescription}
                  </p>
                {/* <p className="text-[#000000] leading-relaxed">
                {data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionMainHeading}  </p> */}

                </div>
              </div>

              <div className='flex'>
                      <div className='w-1/2 grid p-[60px] items-center'>
                      <h2 className='text-[#000000] font-bold'>{data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionSecondRowFirstColumnHeading}</h2>
                      <hr className='w-[50%] '/>
                      <p className="text-[#000000] leading-relaxed">{data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionSecondRowFirstColumnDescription}
                      </p>
                      </div>
                      <div className='w-1/2 relative'>
                        <Image src={data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionSecondRowSecondColumnImage2?.node?.link} className='' alt='' width={1000} height={1000} />
                        <Image src={data.page.leadershipPageFeilds.leadershipTwelfthSection.leadershipTwelfthSectionSecondRowSecondColumnImage1?.node?.link} className='absolute top-[10px] left-[-70px]' alt='' width={200} height={200} />
                     </div>
              </div>
            </section>
            <section>
          <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[850px] md:text-[40px] text-[20px]  font-bold text-center text-black  p-5 mx-auto md:leading-[48px] ">
          {data.page.leadershipPageFeilds.leadershipThirteenSection.leadershipThirteenSectionHeading}</h1>
          <Link
                  href={data.page.leadershipPageFeilds.leadershipThirteenSection.leadershipThirteenSectionButtonLink}
                  className="mx-auto flex w-fit  items-center gap-2.5 inline-block  bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >
                {data.page.leadershipPageFeilds.leadershipThirteenSection.leadershipThirteenSectionButtonText}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </Link>
        </section>
        <section>
<div className="flex justify-center mx-auto w-fit mb-3 gap-3  mt-20">
  <div className=" ">
    <img
      className=""
      src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage1?.node?.link}
    />
  </div>
  <div className=" ">
    <img
      className=""
      src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage2?.node?.link}
    />
  </div>
  <div className=" ">
  <img
      className=""
      src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage3?.node?.link}
    />
  </div>
  <div className="] ">
  <img
      className=""
      src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage4?.node?.link}
    />
  </div>
  <div className="  ">
  <img
      className=""
      src={data.page.leadershipPageFeilds.vantageFormThirdSection.vantageFormThirdSectionImage5?.node?.link}
    />
  </div>
</div>

</section>

<Newsletter />
          {/* Gurpreet end */}
      </div>
    </div>





  )
}

export default page
