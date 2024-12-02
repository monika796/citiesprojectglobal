"use client"; 
import { useEffect, useState } from "react";
import {  Anton } from "next/font/google";
const anton = Anton({ weight: '400', subsets: ["latin"] }); 
import { gql, useQuery } from '@apollo/client';
const POSTS_QUERY = gql `
query    {
 page(id: "cG9zdDoxODQ=") {
   
      newsletter{
        mainheading
        mainsubheading
        leftheading   
        leftsubheading
       
    } 
   }    
}
`;


export default function Newsletter() {
  const {loading, error, data } = useQuery(POSTS_QUERY);
  console.log(data);
  if (loading) return ;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto mx-auto max-w-[1280px] " ><div className=" md:flex w-[100%] mx-auto bg-[#000000] p-5">
                    <div className="md:w-6/12 md:p-30">
                    <h3 className={`${anton.className} uppercase  text-center md:text-left md:text-[55px] text-[41px] text-white font-light leading-[50px]`}>
                    {data.page.newsletter.mainheading}
                    </h3>
                    <p className="text-white  text-center md:text-left">{data.page.newsletter.mainsubheading}</p>
                    </div>
                    <div className="md:w-6/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
                      <p className="text-white  pb-[20px]  text-center md:text-left font-extrabold text-[24px]">{data.page.newsletter.leftheading} <br /><span className=" text-center md:text-left font-normal text-[#A1CF5F]">{data.page.newsletter.leftsubheading}</span></p>
                      <form action="#" className="grid gap-[1px]">
                        <input type="text" placeholder="Name" className="bg-transparent border border-[#f6f6f626] p-[10px]" /><br/>
                        <input type="email" placeholder="Email" className="bg-transparent border border-[#f6f6f626] p-[10px]"  />
                        <label className="text-[16px] text-white pt-10 font-normal  text-left  decoration-slice">Please Confirm *</label>
                        <p className="text-[15px]  p-2 font-normal  text-left  decoration-slice"><input type="checkbox" className="me-3"/> I want to subscribe to all CPG emails</p>
                        <button type='submit' className="mx-auto mt-4 font-bold md:mx-0 md:w-[18%] w-[28%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[16px]">Submit</button>
                      </form>
                    </div>

                  </div>
                  </div>  
  );
}
