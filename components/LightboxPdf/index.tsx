'use client';
import React, { useState } from "react";

const MainComponent = ({ buttonText, pdfUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        onClick={openModal}
        className=""
      >
        {buttonText}  {/* Render dynamic button text */}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-99999 h inset-0 bg-gray-500  bg-opacity-75 flex justify-center items-center ">
          <div className="bg-white  rounded-lg w-full max-w-4xl  relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              X
            </button>

            {/* PDF Embed */}
            <div className="w-full">
              <iframe
                src={pdfUrl} // Use the dynamic PDF URL passed as a prop
                width="100%"
                height="500px"
                title="PDF Viewer"
                className="border-0 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainComponent;
