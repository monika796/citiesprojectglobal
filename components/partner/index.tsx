

import { Anton } from "next/font/google";
import { gql } from "@apollo/client";
import React from "react";
import Image from 'next/image';
const anton = Anton({ weight: "400", subsets: ["latin"] });
import client from 'apollo-client';
const POSTS_QUERY = gql`
  query {
    page(id: "cG9zdDoxNg==") {
      patnerssection {
      linknithbox
        mainheading
        firstsubtitlepatner
        imagefirst {
          node {
            link
          }
        }
        image2 {
          node {
            link
          }
        }
        image3 {
          node {
            link
          }
        }
        image4 {
          node {
            link
          }
        }
        image5 {
          node {
            link
          }
        }
        image6 {
          node {
            link
          }
        }
        image7 {
          node {
            link
          }
        }
        image8 {
          node {
            link
          }
        }
        textninthbox
        linktextninthbox
      }
      homesixthsection {
        heading
        paragraph
        author
        designations
        rightimage {
          node {
            link
          }
        }
      }
    }
  }
`;
async function fetchData() {
  const { data } = await client.query({
    query: POSTS_QUERY,
  });
  return data;
}
export default async function Partner() {
  const data = await fetchData();

  const { patnerssection, homesixthsection } = data.page;

  return (
    <div className="container mx-auto max-w-[1280px]" > 
         <section className="md:pt-[150px] pt-[50px] border border-x-0 border-y-stroke py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h5 className="md:text-[64px] text-[30px] text-black text-center md:pb-[30px] font-bold pb-2">{data.page.patnerssection.mainheading}</h5>
          <h5 className="text-[15px] text-black text-center">{data.page.patnerssection.firstsubtitlepatner}</h5>
          <div className=" md:hidden grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 md:w-[63%] mx-auto pt-[29px]">
            <Image src={data.page.patnerssection.imagefirst?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <Image src={data.page.patnerssection.image2?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <Image src={data.page.patnerssection.image3?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <Image src={data.page.patnerssection.image4?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <Image src={data.page.patnerssection.image5?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

            <Image src={data.page.patnerssection.image6?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <Image src={data.page.patnerssection.image7?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <Image src={data.page.patnerssection.image8?.node?.link} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

            <div className=" relative bg-black text-white p-[27px] w-[150px] h-[150px] flex items-center justify-center mx-auto">
              <div className="text-left absolute bottom-[15px] w-[89%]">
                <h5 className="text-[12px] font-bold pb-2">{data.page.patnerssection.textninthbox}</h5>
                <a href={data.page.patnerssection.linknithbox}><h3 className="text-[10px] font-bold">{data.page.patnerssection.linktextninthbox}</h3></a>
              </div>
            </div>

          </div>

          {/* desktop div start */}
          <div className="hidden md:block py-10 ">
            <div className="flex justify-center mx-auto w-fit mb-3 gap-3 md:w-10/12">
              <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <Image  src={data.page.patnerssection.imagefirst?.node?.link} className="w-[80px]" alt='' width={800} height={500}  />
              </div>
              <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33]  ">
              <Image  src={data.page.patnerssection.image2?.node?.link}  className="w-[80px]" alt='' width={800} height={500} />
              </div>
              <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <Image  src={data.page.patnerssection.image3?.node?.link}  className="w-[80px]" alt='' width={800} height={500} />
              </div>
              <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <Image  src={data.page.patnerssection.image4?.node?.link} className="w-[80px]" alt='' width={800} height={500}/>
              </div>
              <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <Image src={data.page.patnerssection.image5?.node?.link}  className="w-[80px]" alt='' width={800} height={500} />
              </div>
            </div>

            <div className="flex justify-center items-center mx-auto w-fit mb-3 gap-3 md:w-8/12">
            <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <Image src={data.page.patnerssection.image6?.node?.link}  className="w-[80px]" alt='' width={800} height={500} />
                </div>
                <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <Image  src={data.page.patnerssection.image7?.node?.link}  className="w-[80px]" alt='' width={800} height={500}  />
                </div>
                <div className="max-w-[257px] w-full aspect-square p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <Image  src={data.page.patnerssection.image8?.node?.link}  className="w-[80px]" alt='' width={800} height={500}  />
                </div>
             
              <div className="relative bg-black text-white p-[27px] w-full aspect-square max-w-[257px] flex items-center justify-center hover:border-[#A1CF5F33]  ">
                <div className="text-left absolute bottom-[15px] w-[89%]">
                  <h5 className="text-[20px] font-bold pb-2">{data.page.patnerssection.textninthbox}</h5>
                  <a className="text-[16px] underline" href={data.page.patnerssection.linknithbox}>{data.page.patnerssection.linktextninthbox}</a>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop div end */}
          {/* / */}

        

        </div>
      </section>
      </div>
  );
}
