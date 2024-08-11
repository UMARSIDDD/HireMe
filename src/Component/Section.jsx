import React from "react";
import Women from "../assets/Women.png";
import Arrow from "../assets/Arrow.png";
import Arrow2 from "../assets/Arrow2.png";
import Group from "../assets/Group.png";
import Men from "../assets/Men.png";
import iPhoneX from "../assets/iPhoneX.png";
import appleLogo from "../assets/appleLogo.png";
import playStore from "../assets/playStore.png";
import Line from "../assets/Line.png";



const Section = () => {
  return (
    <div className=" flex  flex-col w-full h-auto pt-[80px] items-center">
      <div className=" w-[802px] h-[315px] bg-[#F7F7F7] rounded-[22px] flex mt-[90px]">
        <div className="w-[300px] h-[315px] bg-[#DBDBDB] rounded-[32px]">
          <img className="z-10" src={Women} alt="" />
        </div>
        <div className=" flex flex-1 items-center justify-center ">
          <div className=" grid w-[403px] h-[247px]  gap-[11px]">
            <div className="w-[225px] h-[30px]">
              <div className="flex gap-[16px]">
                <div className="w-[57px] h-[30px] rounded-[21.6px] bg-[#D2000A] flex justify-center items-center">
                  {" "}
                  <img className="w-[14.99px] h-[18px]" src={Group} alt="" />
                </div>
                <p className="text-[16px] font-bold leading-[32.4px]">
                  For College Student
                </p>
              </div>
            </div>
            <div className="w-[403px] h-[155px] gap-[16px] grid ">
              <p className="text-[38px] font-[900] leading-[51.3px]">
                <span className="text-[#D2000A]">Assiting </span>
                Individuals
              </p>
              <p className="text-[16px] font-[500] leading-[21.6px]">
                Discover opportunities for jobs, internships, and mentorship
                under one roof. Connect with skilled professionals to foster
                mutual success in your career journey.
              </p>
            </div>
            <div className="w-[110px] h-[30px] flex gap-[5px] items-center ">
              <a
                href="#"
                className="text-[16px] font-bold leading-[30px] text-[#BD2930] flex "
              >
                Learn more
              </a>
              <img className="size-3 " src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* #2nd */}
      <div className=" w-[802px] h-[315px] bg-[#F7F7F7] rounded-[22px] flex mt-[70px]">
        <div className=" flex  flex-1 items-center justify-center ">
          <div className=" grid w-[403px] h-[247px]  gap-[11px]">
            <div className="w-[225px] h-[30px]">
              <div className="flex gap-[16px]">
                <div className="w-[57px] h-[30px] rounded-[21.6px] bg-[#D2000A] flex justify-center items-center">
                  <img className="w-[14.99px] h-[18px]" src={Group} alt="" />
                </div>
                <p className="text-[16px] font-bold leading-[32.4px]">
                  For B2B
                </p>
              </div>
            </div>
            <div className="w-[461px] h-[133px] gap-[16px] grid ">
              <p className="text-[38px] font-[900] leading-[51.3px]">
                <span className="text-[#D2000A]">Empowering </span>
                Businesses
              </p>
              <p className="text-[16px] font-[500] leading-[21.6px]">
                Hiremi enhances B2B operations with expert project management
                and streamlined recruitment outsourcing, optimizing resources
                for strategic business growth.
              </p>
            </div>
            <div className="w-[110px] h-[30px] flex gap-[5px] items-center ">
              <a
                href="#"
                className="text-[16px] font-bold leading-[30px] text-[#BD2930] flex "
              >
                Learn more
              </a>
              <img className="size-3 " src={Arrow} alt="" />
            </div>
          </div>
        </div>
        <div className=" w-[300px] h-[315px] bg-[#DBDBDB] rounded-[32px]">
          <img className="z-10" src={Men} alt="" />
        </div>
      </div>
      {/* #3rd  */}
      <div className=" relative w-[1132.69px] h-[430.48px] mt-[90px] flex items-center">
        <img className="w-[375.69px]" src={Group} alt="" />
        <p className="absolute top-[201px] left-[116px] text-[30px] font-black leading-[40.5px]">
          Hire<span className="text-[#D2000A]">mi</span>
        </p>
        <div className="w-[707px] h-[319px] grid gap-[25px]">
          <div className="w-[187px] h-[30px]">
            <p className="text-[16px] font-[700] leading-[30px]">
              Our Eco-System Towards
            </p>
          </div>
          <div className="w-[707px] h-[189px] grid gap-[16px]">
            <p className="text-[48px] font-black leading-[64.8px]">
              Business Efficiency &
              <span className="text-[#D2000A]">Growth</span>
            </p>
            <p className="text-[18px] font-bold leading-[27px]">
              <span className="text-[#D2000A]">Hiremi </span>
              enhances business efficiency with expert project management and{" "}
              <span className="text-[#D2000A]">recruitment outsourcing. </span>
              We secure top talent, support development through <br /> jobs and
              mentorship, and ensure{" "}
              <span className="text-[#D2000A]">sustainable growth,</span>
              fostering a skilled <br />
              workforce and successful partnerships.
            </p>
          </div>
          <div className="flex h-[50px] w-[167px] bg-[#FF2626] rounded-[16px] justify-center  items-center  ">
            <a
              href="#"
              className="w-full h-full text-white flex gap-1 justify-center items-center"
            >
              Learn more <img className="size-4" src={Arrow2} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[603px]  mt-[90px]">
        <div className="w-full h-full flex justify-evenly">
          <img
            className=" absolute flex self-end left-[140px]"
            src={iPhoneX}
            alt=""
          />
          <div className="   bg-[#FF2626] w-full h-[500px] self-end flex items-center justify-center">
            <div className=" absolute left-[733px] w-[597px] h-[384px] ">
              <div className="grid w-full h-[284px] gap-[10px]">
                <p className="text-[46.88px] font-black leading-[63.29px] text-white">
                  Hire<span className="text-black">mi</span>
                </p>
                <div className="grid w-full h-[284px] gap-[15px] ">
                  <p className="text-[46.88px] font-black leading-[63.29px] text-white">
                    India’s No.1 <br /> Career Path App
                  </p>
                  <p className="text-[24px] font-[500px] leading-[28.13px] text-white">
                    Your one-stop destination for jobs, internships, and
                    mentorship programs all over India.
                  </p>
                </div>
                <div className="w-[333.61px] h-[50px] gap-[30px] flex items-center">
                  <div className=" flex h-[50px] w-[190px] ">
                    <button className="w-full text-white border-[2px] rounded-2xl border-white flex justify-center items-center gap-3">
                      Download App
                    <img className="size-3 flex items-center" src={Arrow2} alt="" />
                    </button>
                  </div>
                  <img className=" flex items-center" src={Line} alt="" />

                  <img className="size-4 flex items-center" src={playStore} alt="" />
                  <img className="size-4 flex items-center" src={appleLogo} alt="" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
