import React from 'react'
import Image from 'next/image'
import Imageone from '/public/leader-image1.png';
import Imagetwo from '/public/leader-image2.png';
import Divider from '/public/design-divider.png';
import Leaderbg from '/public/leader-bg.png';
import Threeimg from '/public/32.png';
import fourimg from '/public/leader-image3.png';
import Pcover from '/public/57.png';
import Integrated from '/public/Integrated.png';
import Calling from '/public/calling.png';
import Avatar from '/public/avatar.png';
import VideoPlayer from '@/components/Leadershipvideosection'
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';


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

        <section className='my-40'>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className='w-[479px]'>
              <h2 className='text-[48px] leading-[58.09px] font-bold text-black'>What topics does the program cover?</h2>
              <p className='text-[16px] leading-[22px] max-w-[382px] mb-13 mt-5'>The Leadership Circle is a journey that integrates your faith and work life through nine topics divided into three phases:</p>
              <Image
                src={fourimg}
                alt="Transformation Tools"
                width={387}
                height={258}
                className=""
              />

            </div>
            <div className='col-span-2' >
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='col-span-2 px-10'>
                  <h3 className='font-bold text-[24px] leading-[20px] text-black mb-6'>Our city today</h3>
                  <p className='font-[16px] leading-[23px] text-black mt-6'>
                    <b>The Kingdom of God:</b> God’s kingdom is here and now, and yet we long for it to come in its  fullness. How does God’s full story—Creation, Fall, Redemption, and  Restoration—give us a larger context for our city and our lives? And if  God cares about all things and people, what does that mean for each  person’s distinct part in God’s story?
                  </p>
                  <p className='font-[16px] leading-[23px] text-black mt-6'>
                    <b>Living in Exile:</b> Over  the years our cities have changed to the point where the Church has lost cultural influence and Christians feel like outsiders. But what is  God’s larger story? And how can we reweave God’s Kingdom throughout our city in ways that promote kingdom culture and flourishing?
                  </p>
                  <p className='font-[16px] leading-[23px] text-black mt-6'>
                    <b>The City:</b> The city is a diverse community; in it we see a higher concentration of people  displaying a greater breadth of God’s image—and we also see a greater  degree of brokenness. But if the city is where we live our our unique  roles, and if God has a plan for each city, what does that mean for how  we should engage with our workplaces? Where are our unidentified  opportunities to introduce God’s shalom right where we are, and how big  could our impact be?
                  </p>
                </div>
                <div>
                  <Image src={Pcover} alt="" width={356} height={550} ></Image>
                </div>
              </div>

            </div>

          </div>
        </section>
        <section className='my-20'>
                <h2 className='text-[48px] text-black font-bold text-center'>Our lives transformed</h2>
                <p className='text-[16px] mt-10 text-center text-black'>At the heart of the Leadership Circle lies the transformative journey of its participants.</p>
     
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20'>
            <div >              
              <Image src={Integrated} alt="" width={714} height={385} ></Image>            
            </div>
            <div className='flex justify-center items-start flex-col'>
              <div className='max-w-[545px]'>
                    <h2 className='text-[24px] text-black font-bold leading-[23px] mb-6'>Integrated Lives</h2>
                    <p className='text-black'>Many Christians, consciously or unconsciously, divide life into separate  compartments: “faith life,” “work life,” “family life.” But God designed us to live singular, integrated lives. What does that look like, and  how do we move towards it? And, if our lives are interconnected with  others as we all share in God’s common grace, how should we contribute  to everyone’s common good?</p>
              </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>

            <div className='flex justify-between items-center '>
              <div className='md:w-[50%]'>
                <Image src={Calling} alt="" width={319} height={375}></Image>
              </div>
              <div className='md:w-[50%]'>
                    <h2 className='text-[24px] text-black font-bold leading-[23px] mb-6'>Vocational Calling</h2>
                    <p className='text-black'>Each person has a unique role in God’s larger story, and, like a Divine  Conductor, God orchestrates the collection of these roles to accomplish  His purposes.  So how can we better understand God’s purpose for our  individual lives? And how can we appreciate the unique roles of others?</p>
              </div>
            </div>
            <div >              
              <Image src={Integrated} alt="" width={714} height={385} ></Image>            
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>

          <div className='flex justify-between items-center '>
            <div className='md:w-[50%]'>
            </div>
            <div className='md:w-[50%]'>
              <Image src={Calling} alt="" width={319} height={375}></Image>
                 
            </div>
          </div>
          <div className='flex justify-center items-start flex-col' >  
            <div className='max-w-[454px]'>
          <h2 className='text-[24px] text-black font-bold leading-[23px] mb-6'>Vocational Calling</h2>
          <p className='text-black'>Each person has a unique role in God’s larger story, and, like a Divine  Conductor, God orchestrates the collection of these roles to accomplish  His purposes.  So how can we better understand God’s purpose for our  individual lives? And how can we appreciate the unique roles of others?</p>
              </div>            
          </div>
          </div>
        </section>

        <section>
           <div className="mx-auto">
      <div className=" mx-auto bg-[#F5F5F5] relative   max-w-5xl w-full">
        {/* Left Content */}
        <div className="lg:w-[100%] text-left  flex flex-col justify-center items-start lg:items-start p-15 relative h-[510px]">
          <div className="flex items-center space-x-2">
            {/* Icon or Circle */}
            <div className="w-6 h-6 bg-green-400 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          </div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase">
            Flagship Program
          </h3>
          <h1 className="text-4xl font-bold text-gray-900">
            Global Leadership Circle
          </h1>
          <p className="text-gray-600 text-lg">
            Are you a Christian professional working in business or ministry
            (non-profit or church)?
          </p>
          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-green-500 hover:bg-green-600 rounded-md transition duration-200"
          >
            Apply Now
            <span className="ml-2 text-lg">↗</span>
          </a>
          <Image src={Avatar} width={603} height={510} alt='' className='absolute right-0 top-0 m-0 p-0'></Image>
        </div>

        {/* <div className="relative mt-8 lg:mt-0 lg:w-[60%]">
         
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "url('/path/to/blue-abstract-line.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top right",
              zIndex: -1,
            }}
          ></div>
        </div> */}
      </div>
    </div>
        </section>
          {/* Gurpreet Start */}
          <section className='pt-10 pb-10'>
          <h2 className='mx-auto text-center text-[48px] text-black font-bold text-center' >Our City Renewed</h2>
          <p  className='text-[16px] mt-10 text-center text-black mx-auto text-center pb-10 '>At the heart of the Leadership Circle lies the transformative journey of its participants.</p>
          <div className='flex '>
            <div className='w-4/12 py-24 px-[10px]'>
               <h2 className='mx-auto text-left text-[24px] text-black font-bold leading-[23px] mb-6' >Collective Stewardship</h2>
               <p  className='mx-auto  text-black text-left'>Embracing God’s call to care for creation, our unity can reveal Jesus as the one sent by God to those observing our collective efforts.</p>
          </div>
            <div   style={{ backgroundImage: `url('114.png')` }} className='w-4/12  bg-no-repeat bg-cover w-auto bg-bottom   md:h-[300px]  border-t border-transparent '> </div>
            <div className='w-4/12 py-24 px-[10px]'>  
               <h2 className='mx-auto text-left text-[24px] text-black font-bold leading-[23px] mb-6' >Societal Impact</h2>
               <p  className='mx-auto text-black text-left'>
               God positions each person in their city to shape its future. By influencing institutions, we help people experience God's kingdom, leading to flourishing and joy.

               </p>
          </div>
          </div>
          <div className='flex  justify-center'>
            <div style={{ backgroundImage: `url('117.jpg')` }} className='w-4/12  bg-no-repeat bg-cover w-auto bg-bottom  md:h-[300px]  border-t border-transparent '></div>
            <div className='w-4/12 py-24 px-[10px]'>  
               <h2 className='mx-auto text-left text-[24px] text-black font-bold leading-[23px] mb-6' >Public Square</h2>
               <p  className='mx-auto text-black text-left'>God seeks shalom in our city, calling us to work with diverse people for the common good, guided by discernment, compassion, and godly wisdom.</p>
          </div>
            <div style={{ backgroundImage: `url('118.png')` }} className='w-4/12  bg-no-repeat bg-cover w-auto bg-bottom  md:h-[300px]  border-t border-transparent '></div>
          </div>
          </section>

          <VideoPlayer />

          <section>
          <h2 className='md:text-[40px] text-[25px] font-bold text-left text-black md:w-[30%] md:p-5 leading-[49px]'>Tangible outcomes on completion?</h2>
          <div className='flex'>
            <div className='flex md:w-8/12'>
              <div className='md:w-2/6 p-10 pt-0'>
              <Image className='' src='/121.png' alt='' width={1000} height={1000} />
              </div>  
              <div className='md:w-4/6 p-10  pt-0'>
                  <ul className='list-disc leading-[35px]'>
                  <li>Have the tools to practice living an integrated life</li>
                  <li>Have clarity about your role in God’s kingdom</li>
                  <li>Be more greatly attuned to the stakeholders in your place of influence (work, community, city, etc.)</li>
                  <li>Be able to describe those stakeholders’ needs and motivate or work with people toward measurable change in those areas of need</li>
                  <li>Have access to a centralized resource as a result of your cohort’s work</li>
                </ul><br />
              <i>Graduates will also be certified to recruit, facilitate, and train future  Leadership Circle cohorts thereby creating exponential impact in other  lives and cities, and many have already been led to do so.</i>
              </div>
            </div>
            <div className='md:w-4/12'>
            <Image className='' src='/122.png' alt='' width={1000} height={1000} />
            </div>
          </div>

          </section>
            <section className='bg-[#000000]'>
            <div className='flex w-[90%] mx-auto md:py-20'>
              <div className='w-6/12 border-b border-[#252525]'>
              <h2 className='md:text-[15px] text-[10px] font-bold text-left text-white md:w-[50%] md:p-5 '>
              Empowering Leaders to Create Meaningful Change through City Renewal Projects
              </h2>
              
              </div>
              <div className='w-6/12 '>
              <h1 className="text-5xl font-semibold leading-tight text-white  mb-6">
              City Renewal Projects Creating Lasting Impact for Communities and Workplaces
                </h1>
                <p className="text-white leading-relaxed mb-4">
                 Before graduating, participants create a City Renewal Project to address a key need in their city or workplace. With skills gained in the Leadership Circle, graduates can partner with others, regardless of faith, to create lasting, meaningful change.
                </p>
                <p  className="text-white leading-relaxed mb-4">
                We offer a framework to plan and execute City Renewal Projects, which participants present at graduation. Past projects include efforts toward cultural and systemic restoration such as combatting poverty through 
               <span className="text-[#A1CF5F] underline cursor-pointer">
                serving the underbanked, providing affordable housing
                  </span> and more.
                </p>
                <p className="text-white leading-relaxed">
                A Renewal Project seeks to bring about positive change. It focuses on what breaks God's heart, aligning with what moves us deeply, as we share in God's joy when things work as they should.
                  </p> <br />
              </div>
            </div>
            <div className=''>
            <h2 className="md:text-[47px] text-[25px] font-bold text-left text-white md:w-[40%] md:p-5 leading-[49px]">
            There are three areas where Renewal Projects can focus
            </h2>
            <div className='flex'>
              
                    <div className="md:w-[30%]  md:pl-10 md:pr-10 md:pt-0 pt-20 relative">
                                      
                                       
                                       <div className='m-5 pb-3'>
                                          <Image width={50} height={50} alt="" src='/78.png' className="mx-auto md:mx-0"  />
                                          <h5 className="text-white text-[18px] w-[60%] md:text-left text-center">in the community or city around us</h5>
                                          </div>
                                          <div className='m-5  pb-3'>
                                          <Image width={50} height={50} alt="" src='/79.png' className="mx-auto md:mx-0"  />
                                          <h5 className="text-white text-[18px] w-[60%] md:text-left text-center">within our personal workplaces</h5>
                                          </div>
                                          <div className='m-5  pb-3'>
                                          <Image width={50} height={50} alt="" src='/80.png' className="mx-auto md:mx-0"  />
                                          <h5 className="text-white text-[18px] w-[60%] md:text-left text-center">for others to benefit from the Leadership Circle itself.</h5>
                                          </div>
                                      </div>
               
                  <div className='w-9/12 pb-20'>
                      <Image className='' alt='' width={1000} height={1000} src='/123.png' />

                      <p className=" w-[45%] text-gray-300 leading-relaxed my-8">
                      When these projects get implemented, we call the resultant entity an Impact Group.
              </p>
              <Link
                href="#"
                className="bg-[#A1CF5F] mb-10  text-black font-semibold py-2 px-4 rounded "
              >
                Apply Now
                <span className="ml-2">↗</span>
              </Link>
              
                    </div>              
            </div>
            </div>
            </section>


            <section className='container w-[85%] mx-auto py-20'>
            <h1 className="text-5xl w-[40%] font-bold leading-tight text-[#000000] mb-6">
            Who is This Program Right For?
                </h1>
             <div className='flex'>
               <div className='w-1/2'>
                
                 <p className="text-[#000000] leading-relaxed mb-4">
                 The  Leadership Circle is often best fit for mid to late career leaders who  can commit the time to participate. But don’t let the term “leader”  deter you if you’re not sure that describes you.
                </p>
                <p className="text-[#000000] leading-relaxed">
                While the term “leader” may describe  someone who holds an executive title or senior level position, we also  define a leader as someone who is well positioned for potential impact.  We talk about workplace impact often, but your potential for impact in a non-work-related community (such as your church, school, association,  etc.) is equally valid.
                </p>
                <p className="text-[#000000] leading-relaxed">
                We have had entrepreneurs, artists,  coaches, public servants, and people from many different backgrounds  come through the Leadership Circle and find it very enriching.
                </p>
                </div>
                <div className='w-1/2'>
                <p className="text-[#000000] leading-relaxed mb-4">
                We look for a balance of men and women  from a broad range of professions and diverse cultural backgrounds with  varying levels of leadership and responsibility.
                </p>
                <p className="text-[#000000] leading-relaxed">
                If you’re not sure, please apply anyway – you will have the opportunity to speak to one of our facilitators to  explore your questions further.
                </p>

                </div>
              </div>

              <div className='flex'>
                      <div className='w-1/2 grid p-[60px] items-center'>
                      <h2 className='text-[#000000] font-bold'>See What’s Happening in Real Time</h2>
                      <hr className='w-[50%] '/>
                      <p className="text-[#000000] leading-relaxed"> Stay connected with us through Instagram Reels! 
                      </p>
                      </div>
                      <div className='w-1/2 relative'>
                        <Image src='/124.png' className='' alt='' width={1000} height={1000} />
                        <Image src='/125.png' className='absolute top-[10px] left-[-70px]' alt='' width={200} height={200} />
                     </div>
              </div>
            </section>
            <section>
          <h1 className="md:py-[42px] mt-4 py-[30px] max-w-[850px] md:text-[40px] text-[20px]  font-bold text-center text-black  p-5 mx-auto md:leading-[48px] ">
          If you’re not sure, please apply anyway  you will have the opportunity to speak to one of our facilitators to explore your questions further.
          </h1>
          <Link
                  href='#'
                  className="mx-auto flex w-fit  items-center gap-2.5 inline-block  bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >
                 Learn More<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </Link>
        </section>
        <section>
<div className="flex justify-center mx-auto w-fit mb-3 gap-3  mt-20">
  <div className=" ">
    <img
      className=""
      src="/image.png"
    />
  </div>
  <div className=" ">
    <img
      className=""
      src="/image-3.png"
    />
  </div>
  <div className=" ">
  <img
      className=""
      src="/image-1.png"
    />
  </div>
  <div className="] ">
  <img
      className=""
      src="/image-4.png"
    />
  </div>
  <div className="  ">
  <img
      className=""
      src="/image-2.png"
    />
  </div>
</div>

</section>

<Newsletter />
          {/* Gurpreet end */}
      </div>
    </div>





  )
}

export default page
