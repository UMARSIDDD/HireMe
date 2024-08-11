import React from "react";
import HireLogo from '../assets/Logo.jpg'
import Serv  from '../assets/Vector.png'



const Navbar = () => {
    const navLists = ["Services",  "Careers","About Us","Contact Us"];
  return <header className="w-full h-[60px] flex items-center align-middle justify-between">
    <nav className="mx-auto flex items-center p-6 justify-between w-full ">
        <img className="  w-[106px] h-[33.22px] top-10 rounded-[8px]" src={HireLogo} alt="Hiremi "/>
        <div className="flex  justify-center  max-sm:hidden  relative">
            {
                navLists.map((nav=>(
                    <a key={nav} href="#" className="flex px-5 text-[18px] font-bold     cursor-pointer hover:underline gap-1 align-center relative   text-[#FFFFFF]">{nav}
            
                    {
                        nav==="Services"&& <img  className=" relative w-[12px] h-[7.14px] align-middle top-3 decoration-slate-950" src={Serv} alt="downArrow" />
                    }
                    </a>
                )))
            }

        </div>
        <div className="flex h-[37px] w-[132px] bg-[#FF2626] rounded-2xl justify-center ">
            <button className="text-white">Our App</button>

        </div>
    </nav>
    
  </header>;
};

export default Navbar;
