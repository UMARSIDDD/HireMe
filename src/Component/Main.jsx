import React from "react";
import Serv  from '../assets/Vector.png'

const Main = () => {
  return (
    <div className=" flex w-full h-[620px] justify-center  items-end">
    <div className="block w-[787px] h-[487px]  text-[#FFFFFF] ">
      <div className="grid grid-cols-1 gap-y-[48px] pb-[70px] text-center">
        <p className="text-[65px] font-bold leading-[90px]">
          Apke Development Ka <br />
          Sathi <span className="text-[#D2000A]">Hiremi!</span>
        </p>
        <p className="text-[24px] font-bold leading-[32.4px]">
          Your CareeHiremi, where we connect talent with opportunities,
          empowering India's youth to become tomorrow's leaders
        </p>
        <div className="flex gap-[48px] justify-center">
          <div className="flex h-[57px] w-[207px] bg-[#FF2626] rounded-[8px] justify-center top-3">
            <button className="w-full text-white">Download the app</button>
          </div>
          <div className=" flex    h-[57px] w-[152px] justify-center top-3">
            <button className="w-full text-white border-[1px] rounded-2xl border-white">
              For Business
            </button>
          </div>
        </div>

      </div>
      <img  className= "mx-auto relative w-[40px] h-[20px] align-middle  decoration-slate-950" src={Serv} alt="downArrow" />

    </div>
  </div>
  )
}

export default Main
