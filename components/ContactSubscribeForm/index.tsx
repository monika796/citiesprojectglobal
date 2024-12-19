'use client';
import client from '@/apollo-client';
import { useState } from 'react';

const SubscriptionForm = () => {
  // State to handle form submission
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Here, you could call an API or send the form data as needed.
    // For now, we'll simulate the form submission.
    try {
      // You could send form data using fetch or axios
      const formData = new FormData(event.target as HTMLFormElement);
      await fetch('https://digitractive.com/cityprojectglobal/wp-json/newsletter/v1/subscribe', {
        method: 'POST',
        body: formData,
      });

      // If successful, update the state to show the thank-you message
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting the form:', error);
      // Handle form submission error if necessary
    }
  };

  return (
    <div className="">
      {submitted ? (
        <div className="text-center py-10">
          <h3 className="font-bold text-[24px] text-black">
            Thanks for subscribing!
          </h3>
          <p className="text-black text-[16px]">
            We appreciate your interest and will keep you updated.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-[1px]">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-transparent border border-[#3d3c3c26] p-[10px]"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            className="mx-auto md:mx-0 font-bold md:w-[31%] w-[28%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[15px]"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default SubscriptionForm;
