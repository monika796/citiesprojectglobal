"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* footer start */} 
<br>
</br>
<footer>
  <div className=" hidden md:flex w-[89%] mx-auto flex flex-wrap items-center justify-between mx-auto border-t border-b border-solid border-black">
        
        <div className="flex gap-[10px] md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="px-4 py-6 md:flex md:items-center md:justify-between">
           
          </div>
          <button type="button" className="text-black ">
            Book
          </button>
          <button type="button" className="  m-[13px] text-black ">
            Donate Now
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Program
              </a>
            </li>
            {/* <li>
              <button onClick={toggleDropdown} id="doubleDropdownButton" type="button" className="flex items-center justify-between w-full px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Program
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div id="doubleDropdown" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Overview
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        My downloads
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Billing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Rewards
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li> */}
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      
    <div className="mx-auto w-full">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div className="grid justify-center items-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Programs</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Global Leadership <br className="md:hidden block" /> Circle</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">VantagePoint™</a>
                </li>
                
            </ul>
        </div>
        <div className=" flex justify-center items-center">
          <div className="grid justify-center items-center">  <h2 className="  mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About the Book</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Read a Sample  <br className="md:hidden block" />  Chapter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Buy Book</a>
                </li>
            </ul></div>
            <div className="items-end  hidden md:flex">
              <img src='/25.png'  className='w-[116px]'/>
            </div>
        </div>
        <div className="grid justify-center items-center">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Stay Connected</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Linkedin</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Instagram</a>
                </li>
            </ul>
        </div>
        <div className="grid justify-center items-start">
          
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms of Use</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Statement</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">© Copyright 2024</a>
                </li>
            </ul>
        </div>
    </div>
    
    </div>


</footer>
    </>
  );
};

export default Footer;
