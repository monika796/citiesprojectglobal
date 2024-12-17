import React from 'react'
import Image from 'next/image'
import Imageone from '/public/leader-image1.png';
import Imagetwo from '/public/leader-image2.png';
import Divider from '/public/design-divider.png';
import Leaderbg from '/public/leader-bg.png';
import Threeimg from '/public/32.png';
import fourimg from '/public/leader-image3.png';

const page = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1480px]">
        <section>
          <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[1178px] md:text-[64px] text-[25px] leading-[38px]  font-bold text-center text-black  p-5 mx-auto md:leading-[77px] ">
              Empowering Change Through Leadership
          </h1>
        </section>
        <section>
        <div className=" font-sans bg-white">
      <div className="flex md:flex-nowrap justify-between gap-5 flex-wrap gap-12 py-16 px-12">
        <div className="relative max-w-[30%]">
          <Image
            src={Imageone}
            alt="Group Discussion"
            width={337}
            height={247}
            className=" object-cover"
          />
        </div>

        <div className="text-left max-w-[40%]">
          <h1 className="text-3xl font-semibold leading-tight text-gray-900 mb-6">
            Are you a Christian professional working in business or ministry
            (non-profit or church)?
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Perhaps you seek to learn more about what work as worship or
            business as mission could look like in your life. Or you're ready to
            go beyond the theological foundations and make an impact in your
            city. Leadership Circle offers you an opportunity to take the next
            step on your disciple-making journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Leadership Circles have already equipped nearly 400 alumni from all
            denominational and demographic backgrounds around the world to
            integrate their faith throughout their life, engage across societal
            spheres of influence (economics, education, government, family,
            media, celebration, and religion), and initiate impact projects
            through their communities in fellowship with other leaders. Watch
            this{" "}
            <span className="text-blue-600 underline cursor-pointer">
              video of testimonials
            </span>
            .
          </p>
        </div>
        <div className=" px-12 pb-12 flex justify-end items-end max-w-[20%]">
        <Image
          src={Imagetwo}
          alt="Woman in church"
          width={240}
          height={149}
          className="rounded-md "
        />
      </div>
      </div>

      {/* Bottom Right Small Image */}
      
    </div>
        </section>

        <section>
        <div className="font-sans bg-white grid grid-cols-3 gap-3 py-20">
      {/* Left Section */}
      <div className="bg-[#121212]  text-white flex flex-col items-center justify-center px-15 py-25">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Embark on a Transformative Journey Integrating Faith and Work
        </h1>
        <div className="flex justify-center my-6">
          <Image
            src={Divider}
            alt="Faith Icon"
            width={300}
            height={50}
          />
        </div>
        <p className="text-gray-300 text-center leading-relaxed mb-8">
          Righteous leaders change their cities through justice, love, and
          working for the common good of all – this is part of the foundation of
          what we teach at Cities Project Global.
        </p>
        <a
          href="#"
          className="bg-[#A1CF5F] hover:bg-green-600 text-black font-semibold py-2 px-4 rounded flex items-center justify-center"
        >
          Apply Now
          <span className="ml-2">↗</span>
        </a>
      </div>

      {/* Right Section */}
      <div className="relative col-span-2">
        {/* Background Image */}
        <Image
          src={Leaderbg}
          alt="Speaker Image"
          layout="fill"
          objectFit="cover"
          width={800}
          height={500}
          className="absolute inset-0"
        />

        {/* Cards */}
        <div className="absolute bottom-8 right-8 space-y-6">
          {/* Global Leadership Circle */}
          <div className="bg-[#B8EA81] p-6 rounded-lg shadow-md w-[320px]">
            <h2 className="text-black font-semibold text-lg mb-2">
              Global Leadership Circle
            </h2>
            <p className="text-gray-600 mb-4">
              To learn more about the upcoming Global Leadership Circle.
            </p>
            <a
              href="#"
              className="bg-white text-black font-medium py-2 px-4 rounded border border-gray-200 flex items-center hover:bg-gray-100"
            >
              View Now <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Denver Leadership Circle */}
          <div className="bg-white p-6 rounded-lg shadow-md w-[320px]">
            <h2 className="text-black font-semibold text-lg mb-2">
              Denver Leadership Circle
            </h2>
            <p className="text-gray-600 mb-4">
              To learn more about the upcoming Denver Leadership Circle.
            </p>
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded flex items-center justify-center"
            >
              View Now <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
        </section>
        <section>
          <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[900px] md:text-[48px] text-[25px] leading-[38px]  font-bold text-center text-black  p-5 mx-auto md:leading-[77px] ">
          Empowering Leaders with Tailored Solutions and Global Impact
          </h1>
        </section>
        <section>
        <div className="max-w-[1155px] mx-auto bg-white py-16 px-8">
      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#F5F5F5] p-6 ">
          {/* Icon and Image */}
          <div className="flex mb-4">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <Image
              src={Threeimg}
              alt="Discussion Image"
              width={120}
              height={80}
              className="rounded-md ml-auto"
            />
          </div>
          {/* Content */}
          <h2 className="font-bold text-black text-lg mb-2 mt-20">Highly Tailored Experience</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Each cohort is unique, with discussions shaped by participants'
            backgrounds, leading to rich conversations and deep insights.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F5F5F5] p-6 ">
          {/* Icon and Image */}
          <div className="flex mb-4">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center ">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <Image
              src={Threeimg}
              alt="Collaboration Image"
              width={120}
              height={80}
              className="rounded-md ml-auto"
            />
          </div>
          {/* Content */}
          <h2 className="font-bold text-black text-lg mb-2 mt-20">
            Network of Local and Global Collaborators
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Leadership Circle's global reach fosters powerful collaboration,
            creating a growing network that drives change worldwide.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F5F5F5] p-6 ">
          {/* Icon and Image */}
          <div className="flex mb-4">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center ">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <Image
              src={Threeimg}
              alt="Transformation Tools"
              width={120}
              height={80}
              className="rounded-md ml-auto"
            />
          </div>
          {/* Content */}
          <h2 className="font-bold text-black text-lg mb-2 mt-20">
            Practical Tools for Transformation and Impact
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Change combines knowledge and heart transformation. We guide you to
            engage with your community practically, offering a framework for
            action.
          </p>
        </div>
      </div>
    </div>
        </section>
        <section>
        <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[800px] md:text-[48px] text-[25px] leading-[38px]  font-bold  text-black  md:leading-[58px] ">
        The Leadership Circle Difference A Hebraic Model of Teaching
          </h1>
        </section>
        <section>
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
              <div>
              <Image
              src={fourimg}
              alt="Transformation Tools"
              width={539}
              height={418}
              className=""
            />
              
              </div>
              <div>
                <p>
                Most university, professional development, and further education programs are modeled on Greek teaching methods—that is, they treat the mind as a container to be filled with knowledge and trained to rationally engage the world using that information.
</p>
<p className='mt-5'>
We adopt a more Hebraic model. Each person is full of a wealth of experiences and holds a unique perspective, and by deepening their understanding of certain core biblical principles, the abilities they already possess are multiplied. Think about the parable of the talents in Matthew 15: we’re not here  to replace your talents or give you more; we’re here to help you do the  most with what you already have, because we 
                </p>
              </div>
              <div>
                <p>believe God’s purpose for  you comes at the unique intersection of your experience, abilities, and  opportunities.
</p>
<p className='mt-5'>
We engage the mind with theological lessons, but we also engage the  heart by developing a rich everyday apprenticeship of Jesus. Our program model also emphasizes relationships with other cohort members,  mirroring the way Jesus and his disciples would have engaged with one  another. This all results in a practical and remarkable transformation,  enabling participants to orient themselves to their communities in new  ways and impact their cities on a higher level.</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default page
