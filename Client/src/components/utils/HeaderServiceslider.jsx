import { useEffect, useState } from "react";
import CAD from '../../images/header-service-CAD.svg'
import AAD from '../../images/AAD-service.svg'
import SM from '../../images/SM-service.png'
import CPAD from '../../images/CPAD-service.svg'
import CWD from '../../images/CWD-service.svg'
import EWD from '../../images/EWD-service.svg'
import G from '../../images/G-service.svg'
import IA from '../../images/IA-service.svg'
import ID1 from '../../images/ID-service.png'
import LP from '../../images/LP-service.png'
import P from '../../images/P-service.svg'
import MAD from '../../images/MAD-service.svg'
import R from '../../images/R-service.png'
import RWD from '../../images/RWD-service.png'
import VD from '../../images/VD-service.svg'
import W from '../../images/W-service.svg'
import WM from '../../images/WM-service.svg'
import WT from '../../images/WT-service.svg'


function HeaderServiceslider({ isServicesHovered , setIsServicesHovered}) {
  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
  
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      },);

  return (
      <div 
      className={`serviceHover fixed left-0 w-full h-auto transition-all duration-500 ease-in-out 
        ${isSticky ? 'top-[63px]' : 'top-[75px]'} 
        ${isServicesHovered ? 'opacity-100 z-50 top-[64px]' : 'opacity-0 pointer-events-none -top-4'} z-40`}
      onMouseEnter={() => setIsServicesHovered(true)}
      onMouseLeave={() => setIsServicesHovered(false)}
      >      
          <div className="bx w-[100%] h-auto pb-5 border-2 pt-5 lg:px-14 xl:px-24  rounded-bl-md rounded-br-md mx-auto bg-[#FFFFFF]">
             <div className="col">
              <div className="c flex  h-auto lg:gap-x-10 xl:gap-x-12">
                <div className="lg:space-y-5 xl:space-y-8 max-xl:text-[15px] xl:text-[16px] font-roboto-serif font-medium">
                  <div className="header-s"><h2 className=" font-roboto font-medium xl:text-xl max-xl:text-[17px]   text-center text-[#0C3461]">MOBILE APP DEVELOPMENT</h2>
                  <hr className="text-[#D9D9D9] w-full border-1"/>

                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={CAD} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68]  hover:text-[#ce6ad0] cursor-pointer">Custom App Development</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={CPAD} alt="" />
                    </div>
                    <p className="ml-2  text-[#302F68] hover:text-[#ce6ad0] cursor-pointer">Cross-Platform App <br /> Development </p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={AAD} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer">Android App Development</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={MAD} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer">Mobile App Designing</p>
                  </div>
                </div>

                <div className=" lg:space-y-5 xl:space-y-8 h-auto max-xl:text-[15px] xl:text-[16px] font-roboto-serif font-medium">
                  <div className="header-s"><h2 className="font-roboto font-medium xl:text-xl max-xl:text-[17px] text-center text-[#0C3461]">WEBSITE DEVELOPMENT</h2>
                  <hr className="text-[#D9D9D9] w-full border-1"/>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={CWD} alt="" />
                    </div>
                    <p className="ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer ">Custom Website <br /> Development</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={EWD} alt="" />
                    </div>
                    <p className="ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer ">E-commerce Website <br /> Development</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={RWD} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer ">Responsive Web Design  </p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={WT} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer ">Website Testing</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={WM} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer ">Website Maintenance</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={LP} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer ">Landing Pages</p>
                  </div>
                </div>

                <div className="lg:space-y-5 xl:space-y-8 max-xl:text-[15px] xl:text-[16px] font-roboto-serif font-medium">
                  <div className="header-s"><h2 className=" font-roboto font-medium xl:text-xl max-xl:text-[17px] text-center text-[#0C3461]">UI/UX DESIGNE SERVICES</h2>
                  <hr className="text-[#D9D9D9] w-full border-1"/>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={R} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] cursor-pointer hover:text-[#ce6ad0]">Research</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={W} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] cursor-pointer hover:text-[#ce6ad0]">Wireframing</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={P} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] cursor-pointer hover:text-[#ce6ad0]">Prototyping</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={VD} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] cursor-pointer hover:text-[#ce6ad0]">Visual Design</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={ID1} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] cursor-pointer hover:text-[#ce6ad0]">Interaction Design</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={IA} alt="" />
                    </div>
                    <p className=" ml-2 text-[#302F68]  cursor-pointerhover:text-[#ce6ad0]">Information Architecture</p>
                  </div>
                </div>
                {/* knk */}

                <div className="lg:space-y-5 xl:space-y-8 max-xl:text-[15px] xl:text-[16px] font-roboto-serif font-medium ">
                  <div className="header-s"><h2 className=" font-roboto font-medium xl:text-xl max-xl:text-[17px] text-center text-[#0C3461]">DIGITAL MARKENTING SERVICES</h2>
                  <hr className="text-[#D9D9D9] w-full border-1"/>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={SM} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer">Social Media Marketing</p>
                  </div>
                  <div className="flex">
                    <div className="icons">
                      <img src={G} alt="" />
                    </div>
                    <p className="mt-2 ml-2 text-[#302F68] hover:text-[#ce6ad0] cursor-pointer ">Graphic Design</p>
                  </div>
                </div> 
              </div>
             </div>
             
          </div>
          {/* <header class="bg-white shadow-md"> */}
  

      </div>
  );
}

export default HeaderServiceslider;


