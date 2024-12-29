import React from 'react'
import Image from 'next/image'
import vantage from '/public/vantage-logo.png';
import starts from '/public/starts.png';

const page = () => {
  return (
    <div className='container mx-auto max-w-[1480px]'>
      <div className="main-heading py-10">
        <div className="flex items-end justify-between md:flex-nowrap flex-wrap gap-5">
          <h2 className="m-0 text-[32px] leading-[77.45px]  md:text-[64px] max-w-[844px]  text-black font-bold"> A discussion journey to new perspectives for your small group. </h2>
          <div className='max-w-[386px]'>
            <Image src={vantage} width="250" height="105" alt='' className='mb-3'></Image>
            <p>VantagePoint™ guides you and your peers toward a fresh look at your purpose in God’s story.</p>
          </div>
        </div>
      </div>

      <section className='p-10 flex flex-wrap md:flex-nowrap justify-between items-end mt-10'    style={{ backgroundImage: "url('/bg-e.png')" }}>
        <p className='bg-white p-2 text-black font-bold text-[14px] flex gap-3  items-center'>Join Our Happy Customer Community             <Image src={starts} width="95" height="15" alt='' className=''></Image>
        </p>
      <div className="bg-white p-6  rounded-[5px] max-w-[360px]  w-full">
          <h2 className="text-black font-bold text-[24px] mb-2 ">
          Explore 
          </h2>
          <h2 className="text-black font-bold text-[24px] mb-2">VantagePoint™ Now</h2>
          <p className="text-gray-600 mt-3 mb-5 text-[16px]">This keeps it concise and action-driven.</p>
          <h1 className='text-[40px] text-black mb-8 font-bold'>$24.99</h1>
          <div className="">
            <button className="bg-[#A1CF5F] hover:bg-green-600 text-black text-[16px] font-bold py-2 px-4 rounded">
              View Now{/* */}{" "}
            </button>
          </div>
        </div>
      </section>

     <section className='mt-25'>
      <div className='max-w-[768px] mx-auto text-center'>
           <h2 className='text-[48px] leading-[58.09px] font-bold text-black'>Challenge Assumptions
           About Your Role In The World</h2>
           <p className='text-[16px] mt-6'>What  do you see as your purpose in the world? What about your peers? Many  people struggle with the idea of balancing faith and work–but you may be surprised to discover that by viewing them as distinct and separate,  you’re holding yourself back from your place in God’s story.</p>
      </div>
      <div className="flex justify-center items-center p-10 gap-6 mt-10">
  <div className="relative transform ">
    <img src="/img1.png" alt="Left Image" className="relative  rounded-lg " width={332} height={449} />
  </div>


  <div className="bg-lime-200 p-6 rounded-lg shadow-lg text-center e-full max-w-[412px] ">
    <img src="/img3.png" alt="Center Image" className="rounded-lg mb-4" width={400} height={483} />
    <h2 className="text-[24px] font-bold text-black">Join the Program</h2>
    <p className="text-[16px] text-black max-w-[304px] mx-auto">One purchase is valid for a group of up to eight participants</p>
  </div>


  <div className="relative transform ">
    <img src="/img2.png" alt="Left Image" className=" rounded-lg" width={332} height={449} />
  </div>
</div>

     </section>
     <section className='mt-25'>
     <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-20 bg-gray-100">

  <div className="w-full md:w-[25%]">
    <img src="/image5.png" alt="Left Image" className="relative top-[-200px]" width={429} height={421}/>
  </div>


  <div className="text-center md:text-center md:w-[50%]">
    <h2 className="text-[48px] text-black font-bold mb-4 mt-10 leading-[58px] max-w-[491px] mx-auto">Uncover The Missing Parts Of The Story</h2>
    <p className="text-black text-[16px] leading-[22px] mb-6 mt-10">
      We all know about the fall and redemption. But what if we told you those are only the middle parts of the story, and you’re missing the beginning and end? Creation and restoration are the lost chapters, and God isn’t the only character in them—he’s invited you to play a part too.
    </p>
    <a
      href="#"
      className="inline-block px-3 py-2 text-[14px] font-bold bg-white text-black border border-black rounded-lg hover:bg-gray-200 transition"
    >
      Read a Sample Chapter →
    </a>
  </div>

  <div className="w-full md:w-[25%]">
    <img src="/image6.png" alt="Right Image" className="" />
  </div>
</div>

     </section>

     <section className='mt-30'>
          <h2 className='text-[48px] font-bold text-black leading-[58px] max-w-[969px]'>Discover What It Looks Like
          To Take Up Your Role In God’s Story Today</h2>

          <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
              <div>
                  <div className="flex justify-end mb-40">
                      <p className='max-w-[515px] text-[16px] text-black'>It’s easy to think that making a difference in the world is reserved for a chosen few. But God has chosen everyone, including you, to use their unique gifts and experience for the common good. All it takes is understanding where to start.</p>
                  </div>
                  <img src='/6666.png' width={341} height={222}  />
              </div>
              <div>
                <img src="/dd.png" width={772} height={482} />
              </div>
          </div>
     </section>
  
    </div>
  )
}

export default page
