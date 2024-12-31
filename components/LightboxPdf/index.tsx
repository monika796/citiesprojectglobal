'use client';

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Dynamically import react-pdf components
const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false });

// Configure pdf.js worker
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MainComponent = ({ buttonText, pdfUrl, extraclass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent body scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Restore body scroll
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

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

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="relative">
      {/* Button to open the modal */}
      <button onClick={openModal} className={extraclass} aria-haspopup="dialog">
        {buttonText}
      </button>

      {/* Modal for PDF */}
      {isModalOpen && (
        <div
          className="fixed z-50 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg w-full max-w-4xl relative p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-2 right-2 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              X
            </button>

            {/* PDF Viewer */}
            <div className="w-full">
              <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
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
