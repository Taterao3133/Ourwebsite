import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CircularRotatingAccordion = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex">
    <div className="relative h-[500px] w-[500px] ml-60 mt-10">
      {/* Outer Circle (Dotted Line) */}
      <div className="absolute inset-0 border border-dashed border-gray-500 rounded-full circle-dashed">
        <div className=" w-full h-full ml-20 mt-10   flex justify-center items-center">
            <div className="relative animate-text-travel">
                <div className="flex  w-60 h-20 border-2 text-center bg-[#9d68b2] ">
                    <p className="text-lg font-bold -mt-3 ml-2">Web Development</p>
                </div>
            </div>
            <div className="absolute animate-text-travel" >
                <div className="flex  w-60 h-20 border-2 text-center bg-[#9d68b2] ">
                    <p className="text-lg font-bold -mt-3 ml-2">Web Development</p>
                </div>
            </div>
            <div className="absolute animate-text-travel" >
                <div className="flex  w-60 h-20 border-2 text-center bg-[#9d68b2] ">
                    <p className="text-lg font-bold -mt-3 ml-2">Web Development</p>
                </div>
            </div>
            
           
      </div>
      <div className="absolute inset-12 border border-dashed border-gray-500 rounded-full circle-dashed">

          
             
         </div>
            
            

            
            


      <div className="absolute inset-24 border border-dashed border-gray-500 rounded-full circle-dashed"></div>
      <div className="absolute inset-36 border border-dashed border-gray-500 rounded-full circle-dashed"></div>
      <div className="absolute inset-48 border border-dashed border-gray-500 rounded-full circle-dashed"></div>
      </div>
      
    </div>
    <div className="r">ggdfkgk</div>
    </div>
  );
};

export default CircularRotatingAccordion;
