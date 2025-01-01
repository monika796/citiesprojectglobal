'use client';
import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';  // Import the styles for the TextLayer


pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;
import '@react-pdf-viewer/core/lib/styles/index.css'; 
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const MainComponent = ({ buttonText, pdfUrl, extraclass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const modalRef = useRef<HTMLDivElement | null>(null);  

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  // Listen for click events to close modal when clicked outside
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isModalOpen]);

  // Callback when document is loaded successfully
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages); // Set the total number of pages
  };

  return (
    <div className="relative">
      {/* Button to open the modal */}
      <button onClick={openModal} className={extraclass}>
        {buttonText}
      </button>

      {/* Modal for PDF */}
      {isModalOpen && (
        <div className="fixed z-50 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div ref={modalRef} className="bg-white rounded-lg w-full max-w-max relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-2 right-2 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              X
            </button>

            {/* PDF Embed with react-pdf */}
            <div className="w-full">
              <Document
                file={pdfUrl} // The PDF URL passed as a prop
                onLoadSuccess={onDocumentLoadSuccess} // Callback when document is loaded successfully
              >
                {/* Render PDF Pages */}
                <Page pageNumber={pageNumber} />
              </Document>

              {/* Pagination Controls */}
              {numPages && (
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => setPageNumber(pageNumber - 1)}
                    disabled={pageNumber <= 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span>
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() => setPageNumber(pageNumber + 1)}
                    disabled={pageNumber >= numPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainComponent;