import React from 'react';
import Image from 'next/image';

const index = () => {
  return (
    <div className="container mx-auto max-w-[1480px]">
      <section className="max-w-[1178px] mx-auto text-center leading-[77.45px] my-15">
        <h2 className="m-0 text-[64px] text-black font-bold">
          Empowering Change Through Leadership
        </h2>
      </section>
      <section>
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <div className="md:w-4/12">
            <Image
              width={200}
              height={200}
              className="w-full"
              alt=""
              src="/leader-img1.png"
            />
          </div>
          <div className="md:w-5/12">
            <h2 className="text-[32px] leading-[47px] text-black">
              Are you a Christian professional working in business or ministry
              (non-profit or church)?
            </h2>
            <p className="my-8">
              Perhaps you seek to learn more about what work as worship or
              business as mission could look like in your life. Or you’re ready
              to go beyond the theological foundations and make an impact in
              your city. Leadership Circle offers you an opportunity to take the
              next step on your disciple-making journey.
            </p>
            <p>
              {' '}
              Leadership Circles have already equipped nearly 400 alumni from
              all denominational and demographic backgrounds around the world to
              integrate their faith throughout their life, engage across
              societal spheres of influence (economics, education, government,
              family, media, celebration, and religion), and initiate impact
              projects through their communities in fellowship with other
              leaders. Watch this video of testimonials.
            </p>
          </div>
          <div className="md:w-3/12 flex justify-end items-end">
            <Image
              width={200}
              height={200}
              className="w-full"
              alt=""
              src="/leader-img1.png"
              className="w-[203px]"
            />
          </div>
        </div>
      </section>
      <section className="mt-[150px]">
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <div className="md:w-4/12">
            <div className="bg-[#121212] p-15 text-white text-center">
              <h2 className="text-[32px] leading-[38.78px] mt-10 ">
                Embark on a Transformative Journey Integrating Faith and Work
              </h2>
              <Image
                width={200}
                height={200}
                className="w-full"
                alt=""
                src="/divided-logo.png"
                className="my-12"
              />
              <p className="text-[16px] leading-[22px]">
                Righteous leaders change their cities through justice, love, and
                working for the common good of all – this is part of the
                foundation of what we teach at Cities Project Global.
              </p>
              <button className="max-w-[133px] mx-auto  flex items-center gap-2.5 justify-center   px-1 md:px-3 bg-[#A1CF5F] mt-[50px] mb-[40px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">
                Apply now
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="md:w-8/12">
            <div className="bg-image bg-[url('/leader-bg.png')] bg-cover bg-center h-[100%] flex justify-end items-end p-9 flex-col gap-5">
              <div className="card bg-[#B8EA81] w-[310px] text-black p-[20px] inline-block">
                <h2 className="text-[24px] leading-[29.05px] text-bold mb-5">
                  Global <br />
                  Leadership Circle
                </h2>
                <p className="mb-3">
                  To learn more about the upcoming Global Leadership Circle.
                </p>
                <button className="max-w-[133px] flex items-center gap-2.5 justify-center  md:w-[100%] px-1  md:px-3 float-left bg-[#FFFFFF] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">
                  Apply now
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="card bg-[#B8EA81] w-[310px] text-black p-[20px] inline-block">
                <h2 className="text-[24px] leading-[29.05px] text-bold mb-5">
                  Global <br />
                  Leadership Circle
                </h2>
                <p className="mb-3">
                  To learn more about the upcoming Global Leadership Circle.
                </p>
                <button className="max-w-[133px] flex items-center gap-2.5 justify-center  md:w-[100%] px-1  md:px-3 float-left bg-[#FFFFFF] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">
                  Apply now
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z"
                      fill="black"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
