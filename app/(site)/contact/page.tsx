'use client';

import { useState, useEffect } from "react";
import { Anton } from "next/font/google";
import Partner from "@/components/partner";
import Newsletter from "@/components/Newsletter";
import { gql } from '@apollo/client';
import client from 'apollo-client';

const anton = Anton({ weight: '400', subsets: ["latin"] });

const POSTS_QUERY = gql`
query MyQuery2 {
  page(id: "cG9zdDozNjM=") {
    contactpagefeilds {
      firstMainHeadingPart1
      firstRightImage {
        node {
          link
        }
      }
      firstSubheading
      first_main_heading_part_2
      secondContactSectionDescription
      secondContactSectionFormHeading
      secondContactSectionImage {
        node {
          link
        }
      }
      secondContactSectionHeading
      thirdSectionCenterFirstButton
      thirdSectionCenterHeading
      thirdSectionCenterSecondButton
      thirdSectionCenterSubHeading
      thirdSectionCenterUppertext
      thirdSectionLeftImage {
        node {
          link
        }
      }
      thirdSectionRightImage {
        node {
          link
        }
      }
    }
  }
}`;

export default function Contact() {
  const [data, setData] = useState(null); // State for holding fetched data
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Fetch data from Apollo Client on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        });
        setData(data); // Set the data once fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://digitractive.com/cityprojectglobal/wp-json/newsletter/v1/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        // setMessage("Thank you for subscribing!");
        setSubmitted(true);
      } else {
        setMessage(result.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      // setMessage("There was an error. Please try again later.");
    }
  };

  // Display a loading message while data is being fetched
  if (!data) return ;

  return (
    <main className="md:w-[100%] mx-auto">
      <div className="container mx-auto pt-10 md:pt-20 max-w-[1480px]">
        <section className="md:flex">
          <div className="md:w-2/3">
            <h2 className="font-bold text-black md:text-left text-center md:text-[48px] text-[25px] leading-tight mb-4">
              {data.page.contactpagefeilds.firstMainHeadingPart1}
              <br />
              {data.page.contactpagefeilds.first_main_heading_part_2}
            </h2>
            <p className="font-normal md:text-[18px] text-[15px] text-center md:text-left float-left text-black p-2 pb-3">
              {data.page.contactpagefeilds.firstSubheading}
            </p>
          </div>
          <div className="md:w-1/3 pb-3 md:pb-0">
            <img
              src={data.page.contactpagefeilds.firstRightImage?.node?.link}
              className="w-[81%] mx-auto md:mx-0 p-2 md:p-0"
              alt=" "
            />
          </div>
        </section>

        {/* Form Section */}
        <div className="md:flex mx-auto bg-[#F7F7F7] md:mt-[-4%] pt-20 md:pt-40">
          <div className="md:w-8/12">
            <div className="md:flex items-center">
              <div className="md:w-1/2 table mx-auto md:block md:mx-0">
                <img
                  src={data.page.contactpagefeilds.secondContactSectionImage?.node?.link}
                  className=""
                  alt=" "
                />
              </div>
              <div className="md:w-1/2">
                <h3 className={`${anton.className} uppercase text-center md:text-left md:text-[55px] text-[30px] text-[#000000] font-light leading-[50px]`}>
                  {data.page.contactpagefeilds.secondContactSectionHeading}
                </h3>
                <p className="text-[#000000] text-center md:text-left">
                  {data.page.contactpagefeilds.secondContactSectionDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
            <p className="text-[#000000] pb-[20px] text-center md:text-left font-extrabold text-[18px]">
              {data.page.contactpagefeilds.secondContactSectionFormHeading}
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid gap-[1px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border border-[#3d3c3c26] p-[10px]"
                  required
                />
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border border-[#3d3c3c26] p-[10px]"
                  required
                />
                <label className="text-[20] text-black pt-8 pb-5 font-normal text-left decoration-slice">
                  Please Confirm*
                </label>
                <p className="text-[15px] p-2 font-normal text-left decoration-slice">
                  <input type="checkbox" /> I want to subscribe to all CPG emails
                </p>
                <button
                  type="submit"
                  className="mx-auto md:mx-0 font-bold md:w-[23%] w-[28%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[15px]"
                >
                  Submit
                </button>
              </form>
            ) : (
              <p className="text-black text-center md:text-left">Thanks For Subscribing</p>
            )}
          </div>
        </div>

        <Partner />
        <Newsletter />
      </div>
    </main>
  );
}
