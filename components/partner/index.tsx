

import { Anton } from "next/font/google";
import { gql } from "@apollo/client";
import React from "react";
import Image from 'next/image';
const anton = Anton({ weight: "400", subsets: ["latin"] });
import client from 'apollo-client';
import Link from "next/link";
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
         partnerImages {
        partnerImages {
          addPartnersImages {
            node {
              link
            }
          }
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
  const partner_immm =data.page.patnerssection.partnerImages.partnerImages;
console.log(partner_immm);

  return (
    <div className="container mx-auto max-w-[1280px]" > 
         <section className="md:pt-[150px] pt-[50px] border border-x-0 border-y-stroke py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto  px-4 md:px-8 2xl:px-0">
          <h5 className="md:text-[64px] text-[30px] text-black text-center md:pb-[30px] font-bold pb-2">{data.page.patnerssection.mainheading}</h5>
          <h5 className="text-[15px] text-black text-center">{data.page.patnerssection.firstsubtitlepatner}</h5>
          <div className="  grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 md:w-[63%] mx-auto pt-[29px]">
          {partner_immm.map((partner_images, index) => (
           <Image src={partner_images.addPartnersImages?.node?.link || '/No_Image.jpg'} alt='' width={800} height={500} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" /> 

        ))}
   
              
            <div className=" relative bg-black text-white p-[27px] w-[150px] h-[150px] flex items-center justify-center mx-auto">
              <div className="text-left absolute bottom-[15px] w-[89%]">
                <h5 className="text-[12px] font-bold pb-2">{data.page.patnerssection.textninthbox}</h5>
                <Link href={data.page.patnerssection.linknithbox}><h3 className="text-[10px] font-bold">{data.page.patnerssection.linktextninthbox}</h3></Link>
              </div>
            </div>

          </div>

        </div>
      </section>
      </div>
  );
}
