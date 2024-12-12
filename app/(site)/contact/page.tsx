
import { Anton } from "next/font/google";

import Partner from "@/components/partner";
import Newsletter from "@/components/Newsletter";
import { gql } from '@apollo/client';
import client from 'apollo-client';
import Image from 'next/image';
import { Form, Input, Label, Button } from 'reactstrap';
// Define the Anton font
const anton = Anton({ weight: '400', subsets: ["latin"] });

// GraphQL Query
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
    }
  }
}`;
interface ContactPageFields {
  firstMainHeadingPart1: string;
  firstRightImage?: { node?: { link?: string } };
  firstSubheading: string;
  first_main_heading_part_2: string;
  secondContactSectionDescription: string;
  secondContactSectionFormHeading: string;
  secondContactSectionImage?: { node?: { link?: string } };
  secondContactSectionHeading: string;
}

interface Page {
  contactpagefeilds: ContactPageFields;
}

interface ContactProps {
  data: Page;
}

const Contact = async (): Promise<JSX.Element> => {
  const response = await client.query<{ page: Page }>({
    query: POSTS_QUERY,
  });
  const fields = response.data.page.contactpagefeilds;

  return (
    <main className="md:w-[80%] mx-auto">
      <div className="container mx-auto pt-10 md:pt-20 max-w-[1480px]">
        <section className="md:flex">
          <div className="md:w-2/3">
            <h2 className="font-bold text-black md:text-left text-center md:text-[48px] text-[25px] leading-tight mb-4">
              {fields.firstMainHeadingPart1}
              <br />
              {fields.first_main_heading_part_2}
            </h2>
            <p className="font-normal md:text-[18px] text-[15px] text-center md:text-left float-left text-black p-2 pb-3">
              {fields.firstSubheading}
            </p>
          </div>
          <div className="md:w-1/3 pb-3 md:pb-0">
            <Image
              src={fields.firstRightImage?.node?.link || ""}
              className="w-[81%] mx-auto md:mx-0 p-2 md:p-0"
              alt="First Section"
              width={800} 
              height={500}
            />
          </div>
        </section>

        {/* Form Section */}
        <div className="md:flex mx-auto bg-[#F7F7F7] md:mt-[-4%] pt-20 md:pt-40">
          <div className="md:w-8/12">
            <div className="md:flex items-center">
              <div className="md:w-1/2 table mx-auto md:block md:mx-0">
              <Image
        src={fields.secondContactSectionImage?.node?.link || ""}
        alt="Second Section" // For responsive images
        width={800} // Set a default width
        height={500}
        className="md:pr-20"
      />
              </div>
              <div className="md:w-1/2">
                <h3 className={`${anton.className} uppercase text-center md:text-left md:text-[55px] text-[30px] text-[#000000] font-light leading-[50px]`}>
                  {fields.secondContactSectionHeading}
                </h3>
                <p className="text-[#000000] text-center md:text-left">
                  {fields.secondContactSectionDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-4/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
            <p className="text-[#000000] pb-[20px] text-center md:text-left font-extrabold text-[18px]">
              {fields.secondContactSectionFormHeading}
            </p>
            <form action="https://digitractive.com/cityprojectglobal/wp-json/newsletter/v1/subscribe" method="POST" className="grid gap-[1px]">
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
                className="mx-auto md:mx-0 font-bold md:w-[23%] w-[28%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[15px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <Partner />
        <Newsletter />
      </div>
    </main>
  );
};

export default Contact;
