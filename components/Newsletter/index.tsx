"use client";
import { Anton } from "next/font/google";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const POSTS_QUERY = gql`
  query {
    page(id: "cG9zdDoxODQ=") {
      newsletter {
        mainheading
        mainsubheading
        leftheading
        leftsubheading
      }
    }
  }
`;
export default   function  Newsletter() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState(null);
  const [submitted, setSubmitted] = useState(false); 
  // Handler to manage form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    try {
      const response = await fetch(
        "https://digitractive.com/cityprojectglobal/wp-json/newsletter/v1/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }
      setMessage(result.message);
      setSubmitted(true);
      console.log("Form submitted successfully:", result);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  // Conditional rendering of loading or error states
  if (loading) {
    return (
      <div className="container mx-auto max-w-[1280px]">
        <p className="text-center text-white">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-w-[1280px]">
        <p className="text-center text-white">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-[1481px]">
      <div className="md:flex w-[100%] mx-auto bg-[#000000] p-5">
        <div className="md:w-6/12 md:p-30">
          <h3
            className={`${anton.className} uppercase text-center md:text-left md:text-[55px] text-[41px] text-white font-light leading-[50px]`}
          >
            {data.page.newsletter.mainheading}
          </h3>
          <p className="text-white md:pt-[25px] md:text-[23px] text-center md:text-left">
            {data.page.newsletter.mainsubheading}
          </p>
        </div>
        <div className="md:w-6/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
          <p className="text-white pb-[20px] text-center md:text-left font-extrabold text-[24px]">
            {data.page.newsletter.leftheading}
            <br />
            <span className="text-center md:text-left font-normal text-[#A1CF5F]">
              {data.page.newsletter.leftsubheading}
            </span>
          </p>
          {!submitted ? ( // Conditionally render form or message
          <form onSubmit={handleSubmit} className="cst_form grid gap-[1px]">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border border-[#f6f6f626] p-[10px]"
              required
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-[#f6f6f626] p-[10px]"
              required
            />
            <label className="text-[16px] text-white pt-10 font-normal text-left decoration-slice">
              Please Confirm *
            </label>
            <p className="text-[15px] p-2 font-normal text-left decoration-slice">
              <input type="checkbox" className="me-3" required /> I want to
              subscribe to all CPG emails
            </p>
            <button
              type="submit"
              className="mx-auto mt-4 font-bold md:mx-0 md:w-[18%] max-w-[106.57px] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[16px]"
            >
              Submit
            </button>
          </form>
            ) : (
          <p className="cst_message_submition text-white text-center md:text-left">
              {message || "Thank you for subscribing!"}
            </p>
            )}
        </div>
      </div>
    </div>
  );
}
