import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";

const anton = Anton({ weight: '400', subsets: ["latin"] }); 

export default function Book() {
    return (
        <main className="container mx-auto max-w-[1480px]">
            <h1 className="md:py-[42px] py-[30px] md:text-[64px] text-[25px] font-bold text-center text-black md:max-w-[1178px] p-5 mx-auto md:leading-[77.45px] ">Discover Our Book
            A Guide to Integrating Faith, Work, and Community</h1>
                  <section className="md:py-[42px] md:p-0 p-3">
                  <img src="/86.png" className=" mx-auto" alt="" />
                  </section >
                  <div className="container mx-auto">
                    <div className="md:flex">
                        <div className="md:w-5/12 border-r">
                            <img src='87.png' className="w-[50%] md:w-[70%] mx-auto" />
                        </div>
                        <div className="md:w-7/12 py-20 pl-10">
                        <h2 className="font-bold text-gray-800 text-center md:text-left text-3xl md:text-[48px] text-[25px] leading-tight mb-4">Introducing a New Book</h2>
                        <p className="text-gray-500 text-[18px] md:text-lg text-center  md:text-left md:text-xl leading-relaxed mb-6">For decades now, I have witnessed the near non-existence of the  practical intersection between faith and work. The sacred-secular divide  is pervasive, rendering work forever inferior. The result is confusion  and ineffectiveness as we try to straddle these two disconnected worlds.</p>
                        <div className="md:flex gap-5">
                            <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]" >
                                Buy Now
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                 <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                    </button>
                                    <br className="hidden md:block" />
                                    <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                        Read a Sample Chapter
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </button>
                          </div>
                        </div>
                    </div>
                  </div>


                  <div className="container mx-auto md:py-15">
                  <div className="md:flex">
                    
                        <div className="md:w-2/5 bg-[#000000] p-20 grid justify-center items-center">
                        <h2 className="font-bold text-white  md:w-[85%] text-center md:text-left md:text-[24px] text-[24px] leading-tight mb-4">Get Your Copy Today
                        Available on Amazon and More...</h2>
                        </div>
                        <div className="md:w-1/5 md:m-0 m-5 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <img src="/88.png" alt='' />
                        </div>
                        <div className="md:w-1/5  md:m-0 m-5 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <img src="/89.png" alt='' />
                        </div>
                        <div className="md:w-1/5  md:m-0 m-5 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <img src="/90.png" alt='' />
                        </div>
                    </div>
                    </div>

                    <div className="container mx-auto ">  <section className="mx-auto grid gap-[37px] pt-[50px] md:pt-[100px] md:pb-[100px] ">
              <img src="76.png" className="mx-auto" />
              <h1 className={`${anton.className} text-[48px] font-normal  text-center text-[#000000] leading-[72.26px] w-[90%] md:max-w-[1,108px] mx-auto`}>
              Drawing upon rich theological concepts, the book explores the  deep-rooted connection between faith and work, unraveling biblical teachings and shedding light on the original Hebrew words that shape our  understanding of vocation, community, and each person’s unique place in it all
              </h1>
              <h4 className={`${anton.className} text-[20px] font-normal  text-center text-[#aed575]`}>– Brian Mueller, LLD – President, Grand Canyon University</h4>
            </section>
            </div>

            <div className="container mx-auto">
                  <section className="md:py-[32px] ">
                        <h1 className="md:text-[38px]  text-[25px] font-bold text-center text-black md:w-[52%] p-5 mx-auto md:leading-[49px]">What is cities project global</h1>
                        <div className="relative mx-auto table"> 
                            <img src="/92.png" alt="" />
                            <div className="md:absolute bottom-3 p-10 text-center md:text-left">
                                <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[40%] leading-[70px] mb-5">About <br /> the Book </h2>
                                <p className="font-normal text-[15px]  text-black  md:text-white md:w-[72%]"> For decades now, I have witnessed the near non-existence of the practical intersection between faith and work. </p>
                                
                            </div>
                            <div className="hidden md:block absolute bottom-5 right-[12%] p-5">
                            <img src='/73.png' className="w-[80%]" />
                            </div>
                            <div className=" absolute w-[95px] top-0 right-0 md:w-auto  md:top-5 md:right-[3%] p-5">
                            <img src='/91.png' className="w-[80%]" />
                            </div>
                        </div>
                  </section>
                  </div>


                  <div className="container mx-auto md:py-15">
                    <h2 className="font-bold text-black md:text-left text-center  md:max-w-[800px] md:text-[48px] text-[25px] leading-tight mb-4">Bridging the Sacred-Secular Divide Reclaiming the Integration of Faith and Work</h2>
                   <div className="md:flex">
                    <div className="md:w-1/2  ">
                    <div className="md:flex gap-5 ">
                            <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]" >
                                Buy Now
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                 <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                    </button>
                                    <br className="hidden md:block" />
                                    <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                        Read a Sample Chapter
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </button>
                          </div>
                    </div>
                    <div className="md:w-1/2 p-3 md:pr-[140px]">
                            <p className="font-normal text-[16px]  text-center md:text-left text-black pt-2 pb-3">
                            Likewise, Bob Varney is decisive: “Living in an integrated way, where  work, worship, and service are one, is avodah—our original calling.”
                            </p><p  className="font-normal text-[16px]  text-center md:text-left text-black  pb-3 ">
The call to return to God’s design is desperately needed, a message  that can transform communities, cities, and nations. The book you hold  in your hands is compact, memorable, and rich in wisdom. Properly  applied, it can unlock a wonderful new freedom to be all God intended  for you personally and for your work.”
</p><p  className="font-normal text-[16px]  text-center md:text-left text-black pb-3">
The call to return to God’s design is desperately needed, a message  that can transform communities, cities, and nations. The book you hold  in your hands is compact, memorable, and rich in wisdom. Properly  applied, it can unlock a wonderful new freedom to be all God intended  for you personally and for your work.”
                            </p>
                            <h5 className=" text-[16px]  text-center md:text-left text-black font-bold pb-3">
                            – John D. Beckett, Chairman, The Beckett CompaniesAuthor: Loving Monday: Succeeding in Business Without Selling Your Soul.And Mastering Monday: A Guide to Integrating Faith and Work
                            </h5>
                    </div>  
                   </div>
                    </div>
                <div className="container mx-auto md:py-15">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-2 relative">
                        <h2 className="font-bold text-black text-center md:text-left   text-[48px] leading-tight mb-4">Taking Your Whole <br /> Self to Work</h2>
                        <p className="font-normal  text-center md:text-left text-[16px]  text-black pb-3">Have you ever felt like your work has no meaning? Or like faith and  daily life fall into separate days of the week and modes of being? Or  like the only valid contribution you have toward kingdom building is  tithing, evangelizing, or working in ministry?</p>
                        <img src='/94.png' className="md:absolute md:mx-0 mx-auto bottom-[29%] right-3 " alt='' />
                        </div>
                        <div className="md:w-1/2 p-2">
                        <img src='/93.png' className="md:p-0 p-9" alt='' />
                        <p className="font-normal  text-center md:text-left text-[14px] pt-3 text-black pb-3">
                        Many believers feel that way and live as  though there is a significant divide between their “faith life” and  their “work life.” The truth is that God never intended the two to be  separate. Work was created as a God-human partnership toward building  flourishing cultures of redemption—toward building God’s kingdom on  earth. No matter what your area of work or influence is, whether it’s in  science, economics, the arts, education, or family, etc., God sees your  daily life as a vital part of his story.
                        </p><p className="font-normal  text-center md:text-left text-[14px]  text-black pb-3">        
                        At Cities Project Global, we believe that in order to build a world  of flourishing cities and kingdom cultures, we need leaders in every  sphere of society to be engaging their work in union with their faith.
                        </p>
                        </div>
                    </div>
                 </div>

 
                 <div className="container mx-auto py-15 md:p-0 p-3">
                    <div className="md:flex ">
                        <div className="md:w-1/2 p-2 relative">
                        <h2 className="font-bold text-black text-center md:text-left  md:w-[75%] md:text-[33px] text-[28px] leading-tight mb-4">Empowering Change Moving Into Action to Impact Cities and Communities</h2>
                        
                        </div>
                        <div className="md:w-1/2 p-2">
                        <p className="font-normal text-[14px] text-center md:text-left  md:w-[48%] float-left  text-black pb-3">        
                        As you read the articles in the book, when you find your mind and heart stimulated, consider two different actions: </p>
                        </div>
                    </div>
                    <div className="md:flex md:mt-[90px] gap-6">
                        <div className="">
                        <img src='/96.png' alt=""/>
                        </div>
                        <div className=" relative">
                            <div className="md:flex md:absolute top-[-20%] md:w-[95%] right-0">
                                <div className="md:w-1/2 h-[232px] grid items-center p-6 bg-[#B8EA81]" >
                                <p className="text-[#000000] text-center md:text-left  text-[14px]">Find something around you that  breaks God’s heart; if it also breaks your heart, determine what you can  do to move it closer to how it ought to be, and then begin to do it;</p>
                                </div>
                                <div className="md:w-1/2 h-[232px] grid items-center  p-6 bg-[#000000]">
                               <div> <p className="text-white  text-center md:text-left text-[14px]">If you want help on your journey, consider registering with us.</p>
                                <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                        Join Us
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </button></div>
                                </div>
                            </div>
                        <img src='/95.png' alt=""/>
                        </div>
                    </div>
                 </div>
                 <div className="container mx-auto md:pt-15 pb-15">
                   <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                                        <h5 className="text-[28px] md:text-[48px] text-black text-center pb-[30px] font-bold pb-2">Our Partners</h5>
                                        <h5 className="text-[15px] text-black text-center">Be the first to know about Cities Project Global news, programs, and impact</h5>
                                        <div className=" md:hidden grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 md:w-[63%] mx-auto pt-[29px]">
  <img src="/37.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
  <img src="/38.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
  <img src="/39.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
  <img src="/40.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
  <img src="/41.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

  <img src="/43.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
  <img src="/38.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
  <img src="/37.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

  <div className=" relative bg-black text-white p-[27px] w-[150px] h-[150px] flex items-center justify-center mx-auto">
    <div className="text-left absolute bottom-[15px] w-[89%]">
      <h5 className="text-[12px] font-bold pb-2">Become a Partner</h5>
      <h3 className="text-[10px] font-bold">Join Now!</h3>
    </div>
  </div>

</div>

{/* desktop div start */}
<div className="hidden md:block py-10 ">
<div className="flex justify-center mx-auto w-fit mb-3 gap-3">
  <img src="/37.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/38.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/39.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/40.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  <img src="/41.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
</div>

<div className="flex justify-center items-center mx-auto w-fit mb-3 gap-3 ">
  <div className="flex justify-center gap-3">
    <img src="/43.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
    <img src="/38.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
    <img src="/37.png" className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain" />
  </div>
  <div className="relative bg-black text-white p-[27px] w-[150px] h-[150px] flex items-center justify-center mx-auto ">
    <div className="text-left absolute bottom-[15px] w-[89%]">
      <h5 className="text-[12px] font-bold pb-2">Become a Partner</h5>
      <h3 className="text-[10px] font-bold">Join Now!</h3>
    </div>
  </div>
</div>
</div>
{/* Desktop div end */}
                 </div>
                 </div> 

                 <Newsletter />
        </main>
    );
}