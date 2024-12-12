
const BlogCard = ({ image, index, date, title, description, linkText, linkHref }) => (
    
    <>
      {index === 0 || index === 1 ? (
        <>
          <div className="border rounded-lg shadow-sm p-0 h-[483px]">
            <img
              src={image} // Replace with your image path
              alt={title || "Blog Image"} // Fallback for alt attribute
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>
          <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between h-[483px]">
            <p className="text-sm text-gray-500">{date}</p>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">{title}</h3>
              <p className="text-gray-700 mt-2">{description}</p>
              <a
                href={`blog/blog-details?id=${linkHref} `}
                className="flex items-center gap-2.5 w-fit mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300"
              >
                {linkText}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M1 13 13 1M4 1h9v9"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </>
      ) : index === 2 || index === 3 ? (
        <>
          
          <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between h-[483px]">
            <p className="text-sm text-gray-500">{date}</p>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">{title}</h3>
              <p className="text-gray-700 mt-2">{description}</p>
              <a
                href={linkHref}
                className="flex items-center gap-2.5 w-fit mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300"
              >
                {linkText}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M1 13 13 1M4 1h9v9"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="border rounded-lg shadow-sm p-0 h-[483px]">
            <img
              src={image} // Replace with your image path
              alt={title || "Blog Image"} // Fallback for alt attribute
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>
        </>
      ) : null}
    </>
  );
  
  export default BlogCard;
  