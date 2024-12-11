import { FaGreaterThan } from "react-icons/fa";
import homelaptop1 from '../images/homelaptop1.png'
import salonIcn from '../images/salon-logo.png'
import homemobile from '../images/homemobile.svg'
// import iheal from '../images/iheallogo.png'
import iheal2 from '../images/iheal2.svg'
import aboutexpicon from '../images/about-expicon.svg'
import aboutproicon from '../images/about-proicon.png'
import aboutclieicon from '../images/about-clieicon.svg'
import aboutwebicon from '../images/about-webicon.svg'
import reacticon from '../images/react-icon.svg'
import oursection from '../images/our-section.png'
import choosespm from '../images/choose-spm.png'
import choosecpt from '../images/choose-cpt.png'
import choosedte from '../images/choose-dte.svg'
import nodejsicon from '../images/nodejs-icon.svg'
import expressicon from '../images/express-icon.svg'
import appleicon from '../images/apple-icon.svg'
import androidicon from '../images/android-icon.svg'
import figmaicon from '../images/figma-icon.svg'
import photoshopicon from '../images/photshop-icon.svg'
import adobeicon from '../images/adobe-icon.svg'
import tableticon from '../images/tablet-icon.svg'
import education from '../images/education.svg'
import beauty from '../images/beauty-serv.svg'
import healthcare from '../images/healthcare.svg'
import ecomm from '../images/ecom-serv.svg'
import restaur from '../images/restaur-serv.svg'
import grocery from '../images/grocery-serv.svg'
import travell from '../images/travel-serv.svg'
import finance from '../images/finance-serv.svg'
import event from '../images/event-serv.svg'
import ondemand from '../images/ondemand-serv.svg'
import taxi from '../images/taxi-serv.svg'
import realestate from '../images/realestate-serv.svg'
import PortfolioSlider from "../components/utils/PortfolioSlider";
import review1 from '../images/review-1.svg'
import review2 from '../images/review-2.svg'
import review3 from '../images/review-3.svg'
import reviewImg1 from '../images/review-img.png'
import reviewImg2 from '../images/review-img2.png'
import callIcon from '../images/call-icon.svg'
import charminarImg from '../images/charminarImg.svg'
import CarAnimation from "../components/utils/CarAnimation";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import useEmblaCarousel  from "embla-carousel-react";
// import { useEffect } from "react";



function Home () {

    const lines = Array.from({ length: 100 }).map((_, index) => (
        <div key={index} className="border-l border-[#4F5D8133]"></div>
      ));

    //   const [fsRef, fs] = useEmblaCarousel({ loop: true });
    //   useEffect(() => {
    //     if (!fs) return;
    
        
    //     const interval = setInterval(() => {
    //         fs.scrollNext();
    //     }, 3000);
    
       
    //     return () => clearInterval(interval);
    // }, [fs]);
    

  return (
    <div className='root-home scroll-smooth overflow-hidden'>
        <div className="hero-section bg-[#3434A1] w-full xl:h-auto lg:h-auto xl:pb-4 md:text-center md:px-7  max-sm:h-auto lg:pb-10   lg:grid lg:grid-cols-2">
            <div className="r-content xl:mt-24 md:pt-10 max-sm:pt-10  xl:ml-20">
               <div className="text max-sm:text-center max-sm:px-8 ">
                    <h2 className='custom-gradient-text max-sm:hidden text-[44px] lg:text-[40px] xl:text-[40px] tracking-wide font-roboto-serif font-bold  '>
                        Together, we bring your vision to life with solutions that drive success.   
                    </h2>
                    <h2 className='custom-gradient-text md:hidden text-[44px] max-sm:text-3xl xl:text-[40px] tracking-wide font-roboto-serif font-bold  '>
                        We bring your vision to life with solutions.   
                    </h2>

                    <h4 className='text-[24px] max-sm:text-lg max-sm:mt-4 lg:mt-6  lg:text-lg xl:text-xl xl:mt-8 mt-10 font-medium font-roboto-serif text-[#E7A548]'>
                        Success in the software business lies in creating innovative
                        solutions that solve real problems and drive lasting change
                    </h4>
                </div> 
                <div className="bt flex max-sm:mx-auto  mt-7 md:mx-auto max-sm:w-[55%] max-sm:h-14 w-64  h-14 border-2 border-white  rounded-[40px]">
                    <button className='text-xl max-sm:text-base max-sm:px-8 text-white font-medium font-roboto my-auto mx-auto flex'>GET STARTS <FaGreaterThan className=" mt-[4px] ml-2 text-white"/>  </button>
                    
                </div>
                
           </div>
            <div className="l-content max-sm:pb-14  md:pb-7"> 
                <div className="laptop-icn flex xl:mt-1 ml-10  md:justify-center md:items-center  ">
                <img src={homelaptop1} alt="" className="w-[70%] max-sm:w-[80%] max-sm:h-40 md:h-80 lg:h-56  xl:h-80 max-sm:mt-10 md:mt-10  mt-24" />
                <img src={homemobile} alt="" className="xl:-ml-32 md:-ml-40 md:mt-56 md:h-auto md:w-[20%] mt-48 xl:w-[25%] lg:w-[23%] lg:-ml-20  max-sm:w-[25%] max-sm:mt-24 max-sm:-ml-[80px]" />
                
                </div>


            </div>
          
        </div>

        {/* nn */}

        <div className="our-amb bg-[#3434A1] md:px-10 md:h-auto px-10 max-sm:mt-10 max-sm:mx-10 pt-10 pb-5 max-sm:text-center">
            <h2 className="font-roboto font-medium md:text-center text-white max-sm:text-[17px] text-2xl tracking-wide">
                OUR AMBITION
            </h2>

            <div className="mt-3 md:mt-4 md:pt-10 mx-auto flex flex-wrap justify-center gap-x-24">
                <div
                className="cr-content max-sm:w-[120px] max-sm:text-center max-sm:h-[120px] w-[152px] h-[152px] pt-[1px] pl-[1px] rounded-[30%] relative"
                style={{ boxShadow: '0 0 4px 4px rgba(255, 255, 255, 1)' }}
                >
                <div className="inr w-[150px] h-[150px] max-sm:w-[119px] max-sm:h-[119px] rounded-full border-2 bg-transparent">
                    <h3 className="font-roboto-serif text-center mt-2 font-semibold max-sm:text-base text-lg text-[#F2F2F2] underline underline-offset-4">
                    Scalable Architecture
                    </h3>
                    <p className="font-roboto-serif font-medium max-sm:text-xs text-base text-center text-[#D9DFE3] -mt-1 p-3 leading-tight">
                    Built to expand as you do
                    </p>
                </div>
                </div>

                <div
                className="cr-content max-sm:w-[120px] max-sm:text-center max-sm:h-[120px] w-[152px] h-[152px] pt-[1px] pl-[1px] rounded-[30%] relative"
                style={{ boxShadow: '0 0 4px 4px rgba(255, 255, 255, 1)' }}
                >
                <div className="inr w-[150px] h-[150px] max-sm:w-[119px] max-sm:h-[119px] rounded-full border-2 border-[#f4f3f2] bg-transparent">
                    <h3 className="font-roboto-serif text-center mt-3 font-semibold max-sm:text-base text-lg text-[#F2F2F2] underline underline-offset-4">
                    Innovative Ideas
                    </h3>
                    <p className="font-roboto-serif font-medium max-sm:text-xs text-base text-center text-[#D9DFE3] -mt-1 p-3 leading-tight">
                    Fresh concepts that stand out
                    </p>
                </div>
                </div>

                <div
                className="cr-content max-sm:w-[120px] max-sm:text-center max-sm:h-[120px] w-[152px] h-[152px] pt-[1px] pl-[1px] rounded-[30%] relative"
                style={{ boxShadow: '0 0 4px 4px rgba(255, 255, 255, 1)' }}
                >
                <div className="inr w-[150px] h-[150px] max-sm:w-[119px] max-sm:h-[119px] rounded-full border-2 border-[#f4f3f2] bg-transparent">
                    <h3 className="font-roboto-serif text-center mt-2 font-semibold max-sm:text-base text-lg text-[#F2F2F2] underline underline-offset-4">
                    Client Approach
                    </h3>
                    <p className="font-roboto-serif font-medium max-sm:text-xs text-base text-center text-[#D9DFE3] max-sm:-mt-1 mt-2 p-3 leading-tight">
                    Your needs are our priority
                    </p>
                </div>
                </div>
            </div>
         </div>


        {/* client icons sections */}
        <div className="slidersh w-full  max-sm:h-16 xl:h-28 bg-[#bed9ed] ">
        {/* <div className="clients-wicon xl:px-20 flex max-sm:space-x-7 space-x-48 justify-center items-center " ref={emblaRef}> */}
            {/* <div className="embla__slide flex  xl:mt-4 mx-sm:mt-0 md:mt-16  text-">
                <img src={salonIcn} alt="" className="w-16 h-20 max-sm:w-10 max-sm:h-10 my-auto"/>
                <p className="text-xl max-sm:text-base font-roboto-serif font-medium  my-auto">Unique Beauty <br /> salon </p>
                
            </div>
            <div className="embla__slide flex  xl:mt-4 md:mt-16  mx-sm:mt-2  text-">
                <img src={iheal} alt="" className="w-16 h-20 my-auto"/>
               
                
            </div>
            <div className="embla__slide flex  xl:mt-4 mt-16 mx-sm:mt-2  text-">
                <img src={salonIcn} alt="" className="w-16 h-20 my-auto"/>
                <p className="text-xl font-roboto-serif  my-auto">Unique Beauty <br /> salon </p>                

            </div>
            <div className="embla__slide flex  xl:mt-4 mt-16 mx-sm:mt-2  text-">
                <img src={iheal} alt="" className="w-16 h-20 my-auto"/>
               
                
            </div> */}
            {/* <div className="ci flex  xl:mt-4 mt-16  text-">
                <img src={salonIcn} alt="" className="w-16 h-20 my-auto"/>
                <p className="text-xl font-roboto-serif  my-auto">Unique Beauty <br /> salon </p>                
                
                
            </div> */}
            {/* <div className="ci flex  xl:mt-4 mt-16  text-">
                <img src={iheal} alt="" className="w-16 h-20 my-auto"/>
               
                
            </div>
            <div className="ci flex  xl:mt-4 mt-16  text-">
                <img src={salonIcn} alt="" className="w-16 h-20 my-auto"/>
                <p className="text-xl font-roboto-serif  my-auto">Unique Beauty <br /> salon </p>                
                
                
            </div> */}
            
        {/* </div> */}
        </div>
        {/* company details */}
        <div className="cmp-details pb-10 w-full h-auto lg:grid lg:grid-cols-2 max-sm:bg-[rgb(255,255,255)] bg-[rgb(255,255,255)]">
            <div className="l-cmp-details md:px-5 xl:ml-20 max-sm:px-5 md:pt-14 md:text-center max-sm:text-center lg:text-left  max-sm:mt-0 max-sm:pt-14 lg:mt-9 h-auto  ">
                <h3 className="font-roboto-serif text-[#000000] font-medium max-sm:text-2xl text-4xl"> <span className="text-[#e91e63]">XXXXX </span> Websites and App Development Company</h3>
                <p className="text-[17px] max-sm:text-base font-roboto-serif text-[#302F68] mt-7">At XXXXX, we take pride in being a top-rated Websites and mobile app development company. Our team brings together creativity 
                    and extensive experience to deliver cutting-edge Websites and mobile app solutions. Located in India, we have established 
                    ourselves as a leading force in the industry.</p>
                <p className="text-[17px] max-sm:text-base font-roboto-serif text-[#302F68] max-sm:mt-3 mt-6">XXXXX is your go-to destination for cutting-edge websites and mobile app development solutions in Hyderabad, India. 
                    Renowned as a top-rated company, we pride ourselves on being the creative powerhouse behind numerous successful 
                    Websites and mobile applications</p>

                <p className="font-roboto-serif max-sm:mt-3 mt-5 text-[#302F68] font-medium max-sm:text-base text-[17px">At XXXXX, we don't just create Websites, we craft exceptional user experiences that drive success.
                     Join us on your journey to Website And Mobile App excellence</p>

                <div className="bt flex  max-sm:mt-10 mt-7  md:mx-auto max-sm:mx-auto w-64  max-sm:w-[70%] max-sm:h-14 h-16 border-2 border-white bg-[#3F36CD]  rounded-[40px]">
                    <button className='text-xl text-white max-sm:text-base max-sm:px-4 font-medium font-roboto my-auto mx-auto  flex'>REQUEST A QUOTE <FaGreaterThan className=" mt-[4px] max-sm:ml-[1px] ml-2 text-white"/>  </button>
                    
                </div>
            </div>
            <div className="r-cmp-details xl:mx-20 max-sm:mx-4 mt-11 lg:mt-28 lg:pb-10 md:mx-4 md:gap-8  max-sm:gap-x-4 lg:gap-x-2 h-auto  grid grid-cols-2">
                <div className="bx  w-[80%] max-sm:w-[100%] pb-3 md:w-full md:h-auto lg:h-[90%] xl:h-[87%] max-sm:h-[95%] text-center shadow-xl border-b-4 border-[#6DDDD6] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#B3EFEB]">
                    <img src={aboutexpicon} alt="" className="mx-auto p-3 max-sm:w-[60%] max-sm:h-[60%]  " />
                    <p className="text-[#0D4E57] text-3xl font-bold max-sm:text-[14px] max-sm:ml-2 ">2+</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] mt-1 max-sm:-mt-2 max-sm:ml-2 font-semibold max-sm:text-[14px] text-xl">Years </h4>
                    <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Experience</h4>
                </div>
                <div className="bx bx w-[80%] max-sm:w-[100%] pb-3 lg:[90%] xl:h-[87%] md:w-full md:h-auto max-sm:h-[95%]  text-center shadow-xl border-b-4 border-[#EAA2A2] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#EAA2A2]">
                    <img src={aboutwebicon} alt="" className="mx-auto p-3 max-sm:w-[60%] max-sm:h-[60%] " />
                    <p className="text-[#0D4E57] text-3xl font-bold max-sm:ml-2 max-sm:text-[14px] ">2+</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] max-sm:ml-2  max-sm:-mt-2 mt-1 font-semibold max-sm:text-[14px] text-xl">Web & Apps</h4>
                    <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Developed</h4>
                </div>
                <div className="bx bx w-[80%] max-sm:w-[100%] pb-3 lg:h-[87%] xl:h-[87%] md:w-full md:h-auto max-sm:h-[95%] text-center shadow-xl border-b-4 border-[#EC91E3] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#E9A4E2]">
                    <img src={aboutproicon} alt="" className="mx-auto p-3 max-sm:w-[60%] max-sm:h-[60%] " />
                    <p className="text-[#0D4E57] text-3xl font-bold max-sm:ml-2  max-sm:text-[14px] ">100%</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] mt-1 max-sm:ml-2  max-sm:-mt-2 font-semibold max-sm:text-[14px] text-xl">Projects</h4>
                    <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Delivered</h4>
                </div>
                <div className="bx bx w-[80%]max-sm:w-[100%] pb-3 h-[87%]   md:w-full md:h-auto max-sm:h-[95%] text-center shadow-xl border-b-4 border-[#93B2E0] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#9BB4D9]">
                    <img src={aboutclieicon} alt="" className="mx-auto p-3  max-sm:w-[60%] max-sm:h-[60%] " />
                    <p className="text-[#0D4E57] text-3xl font-bold max-sm:ml-2  max-sm:text-[14px]">100%</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] max-sm:ml-2 mt-1  max-sm:-mt-2 font-semibold max-sm:text-[14px] text-xl">Clients</h4>
                    <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Satisfaction</h4>
                </div>
                
                
            </div>
        </div>
        {/* car moving section */}
        <CarAnimation/>
        <hr className="w-full bg-[#262525] h-1" />
        {/* oursection */}
        <div className="our-sec bg-white w-full text-center h-auto pb-10 ">
            <h2 className="font-roboto-serif text-[#365E7D] text-4xl max-sm:text-[26px] font-semibold mt-14">Our Services</h2>
            <p className="text-xl text-[#0D4E57] max-sm:mt-4 max-sm:text-base max-sm:mx-4  mt-5">We think big and have hands in all leading technology <br /> platforms to provide you wide array <br /> of services.</p>
            <div className="grid gap-2 max-sm:gap-y-2 max-sm:mt-16 mt-8 mx-20 max-sm:justify-center max-sm:items-center  lg:grid-cols-3">
                <div className="bxs max-sm:px-5 pl-10 text-left w-full h-auto bg-[#FFFFFF] border-[1px] drop-shadow-xl rounded-lg rounded-bl-[90px] pb-10">
                    <h3 className="text-[#0D4E57] pt-8 font-roboto-serif text-2xl font-semibold">Web Development</h3>
                    <div className="flex text-xl text-[#4F5D81] mt-3 space-x-3">
                        <p>ReactJs</p> <p>|</p>
                        <p>NodeJs</p> <p>|</p>
                        <p>Express</p>
                    </div>
                    <div className="icns space-x-3 flex mt-3">
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={reacticon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={nodejsicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 max-sm:w-[48px] max-sm:h-[48px] bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={expressicon} alt="" className="relative" />
                            </div>
                        </div>
                    </div>
                    <p className="text-lg max-sm:text-base font-roboto-serif text-[#302F68] mt-3 pr-2">At XXXXX, we excel in creating outstanding websites. Whether it's 
                        crafting responsive designs, e-commerce solutions, 
                        or custom web applications, we transform your web vision into reality with skill and innovation.</p>
                </div>
                <div className="bxs max-sm:px-5 pl-10 text-left w-full h-auto bg-[#FFFFFF] border-[1px] drop-shadow-xl rounded-lg rounded-bl-[90px] pb-10">
                    <h3 className="text-[#0D4E57] pt-8 font-roboto-serif text-2xl font-semibold">Web Development</h3>
                    <div className="flex text-lg max-sm:text-xs text-[#4F5D81] mt-3 space-x-3">
                        <p>Android</p> <p>|</p>
                        <p>Apple</p> <p>|</p>
                        <p>Cross-Plotform</p>
                    </div>
                    <div className="icns space-x-3 flex mt-3">
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 max-sm:w-[48px] max-sm:h-[48px] bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={androidicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 max-sm:w-[48px] max-sm:h-[48px] bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={appleicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 max-sm:w-[48px] max-sm:h-[48px] bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={tableticon} alt="" className="relative" />
                            </div>
                        </div>
                    </div>
                    <p className="text-lg max-sm:text-base font-roboto-serif text-[#302F68] mt-3 pr-4">At XXXXX, we excel in creating outstanding websites. Whether it's 
                        crafting responsive designs, e-commerce solutions, 
                        or custom web applications, we transform your web vision into reality with skill and innovation.</p>
                </div>
                <div className="bxs max-sm:px-5 pl-10 text-left w-full max-sm:w-full h-auto bg-[#FFFFFF] border-[1px] drop-shadow-xl rounded-lg rounded-bl-[90px] pb-10">
                    <h3 className="text-[#0D4E57] pt-8 font-roboto-serif text-2xl max-sm:text-xl font-semibold">Web Development</h3>
                    <div className="flex text-xl max-sm:text-xs text-[#4F5D81] mt-3 max-sm:space-x-2 lg:space-x-3">
                        <p>Figma</p> <p>|</p>
                        <p>Adobe XD</p> <p>|</p>
                        <p>Photoshop</p>
                    </div>
                    <div className="icns space-x-3 flex mt-3">
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 max-sm:w-[48px] max-sm:h-[48px] bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={figmaicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16  max-sm:w-[48px] max-sm:h-[48px] bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={adobeicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 max-sm:w-[60px] max-sm:h-[60px] bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16  max-sm:w-[48px] max-sm:h-[48px] bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={photoshopicon} alt="" className="relative" />
                            </div>
                        </div>
                    </div>
                    <p className="text-lg  max-sm:text-base font-roboto-serif text-[#302F68] mt-3 pr-2">At XXXXX, we excel in creating outstanding websites. Whether it's 
                        crafting responsive designs, e-commerce solutions, 
                        or custom web applications, we transform your web vision into reality with skill and innovation.</p>
                </div>
                

            </div>
        </div>
        {/* n */}
        <div className="choseo-sec relative w-full max-sm:mt-5 pb-10 h-auto">
            <div className="absolute inset-0 grid grid-cols-100 h-full">
            {lines}
            </div>
            <div className="relative md:text-center z-10">
               <h3 className="text-[#FD4755] max-sm:text-center max-sm:text-base text-xl max-sm:mx-4 ml-20 font-roboto-serif font-medium pt-10">Why Choose Us</h3>
               <div className="grid lg:grid-cols-2 max-sm:mx-4 mx-20">
                 <div className="l-c">
                    <h2 className="text-[40px] max-sm:text-2xl max-sm:text-center font-medium text-[#000000] leading-tight mt-6">Why The  XXXXX Ranked Top Among The Leading Web & App Development Companies</h2>
                    <p className="text-xl max-sm:text-[17px] max-sm:text-center text-[#302F68] font-roboto-serif mt-7">Celebrated for our innovative solutions and unwavering commitment to client success, XXXXX is 
                        recognized as a premier choice among web and app development companies. Explore what sets us apart</p>

                    <div className="c-in flex max-sm:mt-10 mt-8">
                        <img src={choosespm} alt="" className=" max-sm:w-[80px] max-sm:h-[80px]"  />
                        <div className="c-intxt ml-2">
                            <h3 className="font-roboto-serif text-2xl max-sm:text-xl font-medium">Streamlined Project Management</h3>
                            <p className="text-lg text-[#302F68] max-sm:text-base font-roboto-serif mt-3">Efficiently navigate your projects with XXXXX streamlined management. 
                                Our precision and expertise ensure your goals are met seamlessly.</p>
                        </div>
                    </div>
                    <div className="c-in flex mt-5">
                        <img src={choosedte} alt="" />
                        <div className="c-intxt ml-2">
                            <h3 className="font-roboto-serif max-sm:text-xl  text-2xl font-medium">A Dedicated Team of Experts</h3>
                            <p className="text-lg text-[#302F68] max-sm:text-base font-roboto-serif mt-3">Experience the power of a dedicated team of experts at XXXXX, committed to achieving your project's success.</p>
                        </div>
                        
                    </div>
                 </div>

                 <div className="r-c ">
                    <img src={oursection} alt=""  className="ml-20 mt-10 max-sm:hidden"/>
                    <div className="c-in flex max-sm:ml-0 md:ml-0 ml-10 mt-10">
                        <img src={choosecpt} alt="" className=" max-sm:w-[80px] max-sm:h-[80px]" />
                        <div className="c-intxt ml-2  ">
                            <h3 className="font-roboto-serif text-2xl max-sm:text-xl font-medium">Completion of Project in Given Time</h3>
                            <p className="text-lg text-[#302F68] max-sm:text-base font-roboto-serif mt-3">We guarantee timely project completion at XXXXX, delivering on our promises and meeting your deadlines.</p>
                        </div>
                    </div>
                 </div>
               </div>

               <h1 className="font-roboto-serif font-medium text-[40px] text-[#365E7D] max-sm:px-4 max-sm:text-center md:px-3 lg:px-60 text-center max-sm:mt-14 max-sm:text-2xl mt-28 ">Turning Ideas into Reality  <span className="text-[#FD4755]">Let's Begin Your Next  Project </span>  Together</h1>
               <p className="text-[#090B4F] text-lg lg:px-72 max-sm:px-4 md:px-5 text-center font-roboto-serif max-sm:text-[17px]  mt-4">Embark on a journey of innovation with Techweblabs. 
                Our expertise transforms your concepts into thriving projects. Let's start creating together.</p>

                <div className="bt flex  mt-7  max-sm:w-[65%] w-64  h-14 border-2 border-white bg-[#3F36CD] mx-auto  rounded-[40px]">
                    <button className='text-xl text-white max-sm:text-base font-medium font-roboto my-auto mx-auto  flex'>REQUEST A QUOTE <FaGreaterThan className=" mt-[4px] ml-2 text-white"/>  </button>
                    
                </div>
            </div>
        </div> 
        <div className="client-sect bg-[#5878EA] w-full max-sm:h-auto max-sm:pb-10 md:h-auto md:pb-6 h-[400px]">
            <h3 className="text-[#80D6FB] text-2xl max-sm:text-base  font-roboto-serif text-center font-medium  pt-12">Our happy customers</h3>
            <h3 className="text-[40px] font-roboto-serif font-medium text-[#FFFFFF] text-center max-sm:text-2xl mt-5">Some of our Clients</h3>
            <div className="clients-img grid max-sm:grid-cols-2 max-sm:mx-16 md:grid-cols-2 lg:grid-cols-4 max-sm:gap-2 gap-5 mx-20">
                <div className="flex bg-[#fff] border-2 w-full  mt-9 max-sm:h-24 max-sm:w-24 h-36 rounded-xl">
                    <img src={salonIcn} alt="" className="w-auto max-sm:h-20     h-24 my-auto max-sm:mx-auto ml-11" />
                    <h2 className="font-roboto-serif max-md:hidden font-medium ml-4 text-2xl my-auto">UNIQUE<br /> SALON</h2>
                </div>
                <div className="flex bg-[#fff] border-2 w-full max-sm:h-24 max-sm:w-24 mt-9 h-36 rounded-xl">
                    <img src={iheal2} alt="" className="w-auto h-24 max-sm:h-20 my-auto ml-11 max-sm:mx-auto" />
                    <h2 className="font-roboto-serif max-md:hidden  text-[#E7A548] font-medium ml-4 text-2xl my-auto">iHeal</h2>
                </div>
                <div className="flex bg-[#fff] border-2 w-full max-sm:h-24 max-sm:w-24 max-sm:mt-3 mt-9 h-36 rounded-xl">
                    <img src={salonIcn} alt="" className="w-auto max-sm:h-20 h-24 my-auto max-sm:mx-auto ml-11" />
                    <h2 className="font-roboto-serif  max-md:hidden font-medium ml-4 text-2xl my-auto">UNIQUE<br /> SALON</h2>
                </div>
                <div className="flex bg-[#fff]  border-2 w-full max-sm:h-24 max-sm:w-24 max-sm:mt-3 mt-9 h-36 rounded-xl">
                    <img src={iheal2} alt="" className="w-auto max-sm:h-20 h-24 my-auto max-sm:mx-auto ml-11" />
                    <h2 className="font-roboto-serif max-md:hidden text-[#E7A548] font-medium ml-4 text-2xl my-auto">iHeal</h2>
                </div>
                
            </div>

        </div>
        <div className="quote-sec items-center  justify-center md:pb-5   lg:flex h-40">
            <h2 className="text-[40px] max-sm:text-[25px] md:pt-5 md:text-center max-sm:text-center max-sm:mt-10  text-[#108ABF] font-roboto-serif font-medium">We Promise. We Deliver.</h2>
            
            <div className="bt flex lg:mx-0 max-sm:w-[60%] w-64 md:mx-auto md:mt-4   h-14 border-2 border-white bg-[#3F36CD] max-sm:mt-5 max-sm:mx-auto  rounded-[40px]">
                <button className='text-xl max-sm:text-base  text-white font-medium font-roboto my-auto mx-auto  flex'>REQUEST A QUOTE <FaGreaterThan className=" mt-[4px] ml-2 text-white"/>  </button> 
            </div>

        </div>
        {/* serve section*/}
        <div className="serv-sec bg-[#F2E4E0] pb-7 h-auto w-full max-md:pb-8 ">
            <div className="txt text-center pt-9">
                <h4 className="font-roboto-serif text-[#333262] max-sm:text-base text-xl">WE HAVE WORKED ACROSS MULTIPLE INDUSTRIES</h4>
                <h2 className="text-[40px] max-sm:text-[26px] font-roboto-serif text-[#D54653] mt-4 font-medium">Industries We Serve</h2>

                <p className="font-roboto-serif text-[#333262] text-lg  max-sm:text-base mt-4 max-sm:px-4 px-20"> XXXXX, we cater to a diverse range of industries, providing
                     tailored solutions to <br className="max-md:hidden"/> meet the unique needs of each sector</p>
                 <p className="md:hidden font-roboto-serif text-[#333262] text-lg  max-sm:text-base max-sm:mx-4">meet the unique needs of each sector</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-5 md:mx-5 max-sm:grid-cols-2 max-sm:gap-3 max-sm:mx-4 lg:gap-5 lg:mx-20 mt-12 ">
                <div className="bxs lg:flex  md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={education} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl lg:ml-4 font-roboto-serif font-medium">Education</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={healthcare} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">HealthCare</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={beauty} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Beauty</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={ecomm} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Ecommerce</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={restaur} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Restarent</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={grocery} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Grocery</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={travell} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Tour & Travells</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={realestate} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">RealEstate</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={taxi} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Transport</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={finance} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Finance</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={event} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">Event</h1>
                </div>
                <div className="bxs lg:flex md:flex w-full h-28 border-2 justify-center items-center rounded-2xl border-black bg-[#505CC3]">
                    <img src={ondemand} alt="" className="w-20 h-20 max-sm:mx-auto max-sm:mt-4 max-sm:w-12 max-sm:h-12" />
                    <h1 className="text-[#D9D9D9] max-sm:text-base max-sm:text-center max-sm:mt-2 text-2xl ml-4 font-roboto-serif font-medium">On Demand</h1>
                </div>
                
            </div>

        </div>
        {/* portfolio */}
        <PortfolioSlider/>
        {/* client satisfaction section */}
        <div className="cs max-sm:h-auto lg:h-[600px] max-sm:w-[100%] bg-[#FFFFFF] max-sm:px-4 lg:px-20 pt-5">
            <div className="grid lg:grid-cols-2  max-sm:pt-10 lg:pt-20 ">
                <div className="l-cs pt-7 md:text-center max-sm:text-center w-[100%] h-auto">
                    <h3 className="text-2xl  max-sm:text-base font-roboto-serif text-[#0D4E57] ">WHAT OUR CLIENTS SAY ABOUT xxxxx</h3>
                    <h1 className="text-[40px] max-sm:text-center max-sm:text-2xl mt-5 leading-snug font-roboto-serif text-[#AE7C36] font-medium"  >Over 10+ Satisfied <br /> Clients and Growing</h1>

                    <p className="text-[#263156] font-roboto-serif max-sm:text-xl max-sm:mt-7 lg:mt-10 text-xl">  Read More Reviews</p>
                    <div className="flex max-sm:justify-center max-sm:items-center md:justify-center md:items-center gap-2 mt-8 ">
                        <div className="bx max-sm:w-24 max-sm:h-16 w-36 h-24 lg:bg-[#D9D9D9] ">
                            <img src={review1} alt="" className="m-auto max-sm:mt-1 max-sm:p-2 mt-3" />
                        </div>
                        <div className="bx w-36 max-sm:w-24 max-sm:h-16 h-24 lg:bg-[#D9D9D9]">
                            <img src={review2} alt="" className="m-auto max-sm:mt-1 max-sm:p-2 mt-3"/>
                        </div>
                        <div className="bx w-36 max-sm:w-24 max-sm:h-16 h-24 lg:bg-[#D9D9D9]">
                            <img src={review3} alt="" className="m-auto max-sm:mt-1 max-sm:p-2 mt-3" />
                        </div>
                    </div>
                </div>
                <div className="r-cs max-sm:mt-8 md:mt-10  ">
                    <div className="imgs ">
                     <img src={reviewImg1} alt="" className="lg:ml-40 max-sm:w-[75%] md:mx-auto max-sm:mx-auto max-sm:h-auto "/>
                     <img src={reviewImg2} alt=""  className="lg:-mt-72 max-sm:w-[75%] md:mx-auto max-sm:mx-auto md:mt-5 md:pb-7 max-sm:mt-4 max-sm:h-auto max-sm:pb-10" />

                    </div>
                </div>
            </div>

        </div>
        {/* work together section */}
        <div className="w-sec bg-[#B9C5E3] w-full h-auto pb-5 justify-center text-center items-center">
            <h3 className="text-xl max-sm:text-base text-[#263156] font-roboto-serif pt-10">LET'S WORK TOGETHER</h3>
            <h1 className="font-roboto-serif font-medium max-sm:text-2xl text-[40px]  text-[#365E7D] mt-3">We Love to Listen to Your <br /> Requirements</h1>
            <div className="bt flex  mt-10  w-64  h-14 border-2 border-[#302F68] mx-auto  rounded-[40px]">
                <button className='text-xl max-sm:text-base text-[#302F68] font-medium font-roboto my-auto mx-auto  flex'>GET STARTS <FaGreaterThan className=" mt-[4px] ml-2 text-[#302F68]"/>  </button>   
            </div>
            <div className="cal-d flex text-center items-center justify-center mt-11 gap-2">
                <h3 className="font-roboto-serif max-sm:text-base text-xl text-[#263156]">Or call us now</h3>
                <img src={callIcon} alt="" />
                <p className="text-xl max-sm:text-lg text-[#263156] font-medium">+91 8331950396  <br /> +91 9948732151 </p>
                
            </div>
        </div>
        {/* office detail section */}
        <div className="o-d w-full h-auto bg-[#FFFFFF]  text-center pb-8 ">
            <h2 className="text-[#2B2D3E]  text-xl max-sm:text-base font-roboto-serif mt-14"> OUR LOCATION</h2>
            <h1 className=" text-[40px] max-sm:text-2xl  text-[#FD4755] font-roboto-serif font-medium">Our Office</h1>
                <img src={charminarImg} alt="" className="mx-auto mt-3 max-sm:w-40 max-sm:h-auto border-t-1 border-[#FFFFFF]" />   
            <div className="txt max-sm:px-8 px-20 text-left">
               <h3 className="text-2xl max-sm:text-lg mt-3 font-roboto-serif text-[#FFAC33] ">HYDERABAD, INDIA</h3>
               <h4 className="text-xl max-sm:text-base font-roboto-serif text-[#365E7D] mt-4">REGISTERED OFFICE</h4>
               <p className="font-roboto-serif text-xl max-sm:text-base text-[#090B4F] mt-3">Flat no 102, Narayanguda Main Rd, <br /> Beside Shanthi Theatre Narayanguda,<br /> Hyderabad, 500029</p>
            </div>
        </div>
    </div>
  )
}

export default Home
