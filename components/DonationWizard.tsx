"use client";

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter as Router } from "react-router-dom";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

type DonationData = {
  frequency: "one-time" | "monthly";
  amount: number;
  designation: string;
  coverFee: boolean;
  newsletter: boolean;
  paymentMethod: "card" | "check";
  firstName: string;
  lastName: string;
  email: string;
  postalCode: string;
  cardInfo?: string;
  bankName?: string;
  accountNumber?: string;
  routingNumber?: string;
  accountType?: string;
  accountHolder?: string;
};

// Load Stripe outside the render to avoid recreating the instance
const stripePromise = loadStripe("pk_test_51JIVaHSIfk35L8nB78p7tybIiB1kYKqPzPA8OcEveJb1eJhWOQjgD7O86yiZzh3HYsnnTgBHZTfzLVdpCQgz5AEb00G2yRVdEz");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const [step, setStep] = useState(1);
  const [donationData, setDonationData] = useState<Partial<DonationData>>({});

  // Fetch the clientSecret for Stripe payment
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("http://localhost/stripephp/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, []);

  const handleNext = (data: Partial<DonationData>) => {
    setDonationData({ ...donationData, ...data });
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data: Partial<DonationData>) => {
    const finalData = { ...donationData, ...data };
    console.log("Donation submitted:", finalData);
    // Send the data to your backend here
  };

  return (
      <div className="App">
        <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-[#1295d8] text-white p-6 text-center">
            <img
              src="/star-blue-digital.avif"
              alt="Star of David"
              width={80}
              height={80}
              className="mx-auto mb-4 invert"
            />
            <h2 className="text-2xl font-bold mb-4">Donation Wizard</h2>
            <p className="text-lg max-w-md mx-auto">
              With your gift today, you will help us share the gospel and minister to Jewish people around the world.
            </p>
          </div>
          <div className="p-6">
            {step === 1 && <Step1 onNext={handleNext} />}
            {step === 2 && <Step2 onNext={handleNext} onPrevious={handlePrevious} />}
            {step === 3 && (
              <Step3
                onSubmit={handleSubmit}
                onPrevious={handlePrevious}
                paymentMethod={donationData.paymentMethod}
                frequency={donationData.frequency}
                amount={donationData.amount}
              />
            )}
          </div>
          <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
            <div>Step {step} of 3</div>
          </div>
        </div>
      </div>
  );
}