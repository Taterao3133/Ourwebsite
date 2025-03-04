import { FaGreaterThan } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import aboutImg from '../images/about-img.svg'
import ourVision from '../images/ourVision.svg'
import ourMission from '../images/ourMission.svg'
import aboutexpicon from '../images/about-expicon.svg'
import aboutwebicon from '../images/about-webicon.svg'
import aboutproicon from '../images/about-proicon.png'
import aboutclieicon from '../images/about-clieicon.svg'
import aboutInn from '../images/about-innov.svg'
import aboutProcess from '../images/about-process.svg'
import aboutAppro from '../images/about-approch.svg'
import aboutCost from '../images/about-cost.svg'
import callIcon from '../images/call-icon.svg'
import charminarImg from '../images/charminarImg.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";




function AboutUs() {
  const [socialLinks, setSocialLinks] = useState({})
  const countryCode = '+91';
 const whatsApplink = `https://wa.me/${countryCode}${socialLinks.whatsUpNumber}?text=Hello%20I%20want%20make%20an%20appointment`

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const socialRef = doc(db, "siteDetails", "socialLinks");
        const socialDoc = await getDoc(socialRef);
        if (socialDoc.exists()) {
          setSocialLinks(socialDoc.data());
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
    },[]);
  return (
   <div className="abt overflow-hidden">
    <div className="about-sec  max-sm:h-auto lg:h-[600px] max-sm:justify-center max-sm:items-center w-full  lg:px-8 xl:px-20 bg-gradient-to-b from-[#FFFFFF] to-[#e3fbd4]">
      <div className="flex pt-20 max-lg:items-center max-lg:justify-center  max-sm:mx-4 space-x-3">
        <h2 className='text-[#E7A548]  text-lg max-sm:text-base font-roboto-serif cursor-pointer font-medium'><Link to='/'> Home</Link>  </h2>
        <div className="flex">

        <GoDotFill className="text-[#E7A548] mt-2" />
        <h4 className='text-[#E7A548] underline text-lg  cursor-pointer max-sm:ml-2 md:ml-2 max-sm:text-base font-roboto-serif  font-medium'>About Us</h4>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 mt-6">
        <div className="l-c pb-5 pt-3 pr-4 md:text-center lg:text-left">
          <h1 className="font-roboto-serif max-md:text-center  text-[40px] md:text-4xl max-sm:text-xl bg-clip-text text-transparent  font-medium  bg-gradient-to-r from-[#F471FF] via-[#FA8166] to-[#FBCA84]">
            About <br /> Web Vortex Solutions
          </h1>
          <p className="text-lg md:text-base md:px-7 lg:px-0 max-sm:text-base max-sm:text-center font-roboto-serif max-sm:px-4 lg:font-medium text-[#0C3461] mt-4">At Web Vortex Solutions, we combine the agility and innovation of a startup with over 7 years of industry experience. 
            Founded with a vision for innovation and a passion for excellence, Web Vortex Solutions emerged onto the scene in recent years,
             driven by the desire to redefine industry standards and push the boundaries of possibility. What began as a humble 
             endeavor has flourished into a dynamic force, propelled by a steadfast commitment to our core values of creativity, 
             integrity, and excellence</p>

             <div className="bt flex   hover:bg-[#ce6ad0] hover:border-none cursor-pointer mt-7 max-lg:mx-auto w-56 max-sm:w-[50%] max-sm:h-auto max-sm:py-2 hover:drop-shadow-lg h-14 border-2 border-[#000000]  rounded-[40px]">
                <a href={whatsApplink} className='text-lg max-sm:text-base hover:text-[#fff]  text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex'>Contact Us <FaGreaterThan  className=" mt-[4px] ml-2  hover:text-[#fff] text-[#000000]"/>  </a>
              </div>

        </div>
        <div className="r-c mx-auto  md:pb-8 max-sm:justify-center max-sm:items-center max-sm:mt-7 max-sm:pb-10">
          <img src={aboutImg} alt="" className=" max-sm:mx-auto  max-sm:w-[75%] lg:w-full" />
          
        </div>
      </div>

    </div>
      <div className="bg-gradient-to-b md:px-8 from-[#FFFFFF] to-[#e4b94c1a] w-full h-auto pb-10 lg:px-8 xl:px-20 lg:space-x-7 max-sm:px-4 lg:grid lg:grid-cols-2">
        <div className="l-c   pt-20 lg:pr-6">
          <h1 className="text-[40px] md:text-3xl max-sm:text-2xl max-md:text-center lg:text-left font-roboto-serif text-[#E13535] font-medium">India’s Top App Development & Digital Marketing Company working with talents on delivering unique ideas.</h1>
          <div className="flex md:mt-10 max-sm:justify-center max-sm:items-center max-sm:mt-8 lg:mt-16 space-x-6">
            <img src={ourVision} alt=""  className="max-sm:w-28 max-sm:h-auto"/>
            <p className="text-[#E13535] mt-7 text-2xl max-sm:text-lg font-roboto-serif font-medium"> Our Vision</p>
          </div>
          <p className="text-lg max-sm:text-base md:text-base  max-sm:text-center font-roboto-serif text-[#302F68] lg:pr-6 mt-6">"To be a leading innovator in the digital solutions industry, empowering businesses
            and individuals with cutting-edge technology that drives growth, efficiency, and creativity."</p>

        </div>
        <div className="r-c max-sm:mt-10 md:mt-5 max-sm:text-center lg:text-left lg:mt-20">
          <p className="text-lg max-sm:hidden max-sm:text-base md:text-base font-roboto-serif text-[#302F68]">At Web Vortex Solutions, the intersection of innovation and experience is where magic happens. Join us on our journey as we continue to push the boundaries of what's possible and shape the future of technology, one groundbreaking idea at a time.

            With over seven years of industry experience under our belt, we bring a wealth of knowledge, expertise, and insights to every project we undertake.
            Our track record speaks for itself, 
            as we've consistently exceeded expectations and forged lasting partnerships built on trust, transparency, and results
            </p>
          <div className="flex  md:mt-8 max-sm:justify-center max-sm:items-center space-x-6 lg:mt-16">
            <img src={ourMission} alt="" className=" max-sm:w-28 max-sm:h-auto" />
            <p className="text-2xl max-sm:text-lg  text-[#E13535] mt-7 font-roboto-serif font-medium">Our Mission</p>
          </div>
          <p className="text-lg max-sm:text-base md:text-base max-sm:text-center font-roboto-serif text-[#302F68] mt-6">At Web Vortex Solutions, we are dedicated to delivering top-tier apps, applications, and websites that exceed client expectations. Leveraging our 7 years of expertise, we strive to create intuitive, user-friendly digital solutions that enhance productivity and engagement. Our mission is to foster 
            long-term partnerships by consistently delivering high-quality, reliable, and innovative technology that transforms ideas into reality."</p>
        </div>
      </div>
      {/*  */}
      <div className="cmp-details pb-10 w-full h-auto grid lg:grid-cols-2 max-sm:text-center   bg-[#E0CDE7]">
            <div className="l-cmp-details md:px-5 xl:ml-20 max-sm:px-5 md:pt-14 md:text-center max-sm:text-center lg:text-left  max-sm:mt-0 max-sm:pt-14 lg:mt-9 h-auto  ">
                            <h3 className="font-roboto-serif text-[#000000] font-medium max-sm:text-2xl text-4xl"> <span className="text-[#e91e63]">Web Vortex Solutions </span> Websites and App Development Company</h3>
                            <p className="text-[17px] max-sm:text-base font-roboto-serif text-[#302F68] mt-7">At Web Vortex Solutions, we take pride in being a top-rated Websites and mobile app development company. Our team brings together creativity 
                                and extensive experience to deliver cutting-edge Websites and mobile app solutions. Located in India, we have established 
                                ourselves as a leading force in the industry.</p>
                            <p className="text-[17px] max-sm:text-base font-roboto-serif text-[#302F68] max-sm:mt-3 mt-6">Web Vortex Solutions is your go-to destination for cutting-edge websites and mobile app development solutions in Hyderabad, India. 
                                Renowned as a top-rated company, we pride ourselves on being the creative powerhouse behind numerous successful 
                                Websites and mobile applications</p>
            
                            <p className="font-roboto-serif max-sm:mt-3 mt-5 text-[#302F68] font-medium max-sm:text-base text-[17px">At Web Vortex Solutions, we don't just create Websites, we craft exceptional user experiences that drive success.
                                 Join us on your journey to Website And Mobile App excellence</p>
             
                            <div className="bt flex cursor-pointer max-sm:mt-10 mt-7 hover:bg-[#ce6ad0] hover:border-none hover:drop-shadow-lg md:mx-auto max-sm:mx-auto w-64  max-sm:w-[70%] max-sm:h-14 h-16 border-2 border-white bg-[#3F36CD]  rounded-[40px]">
                            <a
                                href={whatsApplink}
                                target="_blank"
                                rel="noopener noreferrer"
                                
                                className='text-xl text-white hover:text-[#fff] max-sm:text-base max-sm:px-4 font-medium font-roboto my-auto mx-auto  flex'>REQUEST A QUOTE <FaGreaterThan className=" mt-[4px] max-sm:ml-[1px] ml-2 text-white"/> </a>
                                
                            </div>
                        </div>
                        <div className="r-cmp-details xl:mx-20 max-sm:mx-4 mt-11 lg:mt-28 lg:pb-10 md:mx-4 md:gap-8  max-sm:gap-x-4 lg:gap-x-2 h-auto  grid grid-cols-2">
                            <div className="bx  w-[80%] max-sm:w-[100%] pb-3 md:w-full md:h-auto    max-sm:h-[95%] text-center shadow-xl border-b-4 border-[#6DDDD6] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#B3EFEB]">
                                <img src={aboutexpicon} alt="" className="mx-auto p-3 max-sm:w-[60%] max-sm:h-[60%]  " />
                                <p className="text-[#0D4E57] text-3xl font-bold max-sm:text-[14px] max-sm:ml-2 ">2+</p>
                                <h4 className="font-roboto-serif text-[#0D4E57] mt-1 max-sm:-mt-2 max-sm:ml-2 font-semibold max-sm:text-[14px] text-xl">Years </h4>
                                <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Experience</h4>
                            </div>
                            <div className="bx bx w-[80%] max-sm:w-[100%] pb-3  md:w-full md:h-auto max-sm:h-[95%]  text-center shadow-xl border-b-4 border-[#EAA2A2] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#EAA2A2]">
                                <img src={aboutwebicon} alt="" className="mx-auto p-3 max-sm:w-[60%] max-sm:h-[60%] " />
                                <p className="text-[#0D4E57] text-3xl font-bold max-sm:ml-2 max-sm:text-[14px] ">2+</p>
                                <h4 className="font-roboto-serif text-[#0D4E57] max-sm:ml-2  max-sm:-mt-2 mt-1 font-semibold max-sm:text-[14px] text-xl">Web & Apps</h4>
                                <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Developed</h4>
                            </div>
                            <div className="bx bx w-[80%] max-sm:w-[100%] pb-3   md:w-full md:h-auto max-sm:h-[95%] text-center shadow-xl border-b-4 border-[#EC91E3] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#E9A4E2]">
                                <img src={aboutproicon} alt="" className="mx-auto p-3 max-sm:w-[60%] max-sm:h-[60%] " />
                                <p className="text-[#0D4E57] text-3xl font-bold max-sm:ml-2  max-sm:text-[14px] ">100%</p>
                                <h4 className="font-roboto-serif text-[#0D4E57] mt-1 max-sm:ml-2  max-sm:-mt-2 font-semibold max-sm:text-[14px] text-xl">Projects</h4>
                                <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Delivered</h4>
                            </div>
                            <div className="bx bx w-[80%] max-sm:w-[100%] pb-3   md:w-full md:h-auto max-sm:h-[95%] text-center shadow-xl border-b-4 border-[#93B2E0] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#9BB4D9]">
                                <img src={aboutclieicon} alt="" className="mx-auto p-3  max-sm:w-[60%] max-sm:h-[60%] " />
                                <p className="text-[#0D4E57] text-3xl font-bold max-sm:ml-2  max-sm:text-[14px]">100%</p>
                                <h4 className="font-roboto-serif text-[#0D4E57] max-sm:ml-2 mt-1  max-sm:-mt-2 font-semibold max-sm:text-[14px] text-xl">Clients</h4>
                                <h4 className="font-roboto-serif text-[#0D4E57]  max-sm:-mt-2 font-semibold max-sm:ml-2 max-sm:text-[14px] text-xl">Satisfaction</h4>
                            </div>
                            
                            
                        </div>
        </div> 
        {/* choose section */}
        <div className="choose-sec pb-14 lg:px-8 xl:px-20">
          <div className="txt text-center ">
            <h3 className="text-[#365E7D] font-medium max-sm:text-lg text-xl mt-7 font-roboto-serif">We Are Awesome</h3>
            <h2 className="text-[#0D4E57] font-roboto-serif mt-6 max-sm:text-2xl text-[40px]">Why Choose Web Vortex Solutions</h2>

          </div>
          <div className="grid lg:grid-cols-4 gap-3 mt-6">
            <div className="bx1 border-2 w-full  max-sm:w-[80%] max-sm:mx-auto h-auto rounded-lg border-b-4 border-r-4   text-center p-6  ">
              <img src={aboutInn} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl max-sm:text-lg text-[#0D4E57] font-roboto-serif font-medium mt-3">Expertise and 
              Innovation</h2>
              <p className="m max-sm:text-base font-roboto-serif text-[17px] mt-5">We pride ourselves staying at the front of innovation, constantly pushing boundaries a redefining what is possible.</p>
            </div>
            <div className="bx1 border-2 w-full max-sm:w-[80%] max-sm:mx-auto max-sm:h-auto  xl:h-[384px] lg:h-[460px] rounded-lg border-b-4 border-r-4   text-center p-6  ">
              <img src={aboutProcess} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl  max-sm:text-lg text-[#0D4E57] font-roboto-serif font-medium mt-3">Transparent
              Process</h2>
              <p className="text-[17px] max-sm:text-base  font-roboto-serif  mt-5">Our transparent process is designed to demystify the journey from concept to delivery</p>
            </div>
            <div className="bx1 border-2 w-full max-sm:w-[80%] max-sm:mx-auto h-auto rounded-lg border-b-4 border-r-4   text-center p-6  lg:pb-20 ">
              <img src={aboutAppro} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl max-sm:text-lg text-[#0D4E57] font-roboto-serif font-medium mt-3">Client-Centric 
              Approach</h2>
              <p className="text-[17px]  max-sm:text-base font-roboto-serif  mt-5">Our dedicated team takes the time to listen, & collaborate, ensuring that every interaction a step towards your success.</p>
            </div>
            <div className="bx1 border-2 w-full max-sm:w-[80%] max-sm:mx-auto max-sm:h-auto xl:h-[384px] lg:h-[460px] rounded-lg border-b-4 border-r-4   text-center p-6  ">
              <img src={aboutCost} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl max-sm:text-lg text-[#0D4E57] font-roboto-serif font-medium mt-3">Cost-Effective</h2>
              <p className="text-[17px] max-sm:text-base  font-roboto-serif mt-5">Our commitment to providing cost-effective solutions is ingrained in our mission.</p>
            </div>
            

          </div>
        </div>
       

        {/* f */}
        <div className="w-sec bg-[#B9C5E3] w-full h-auto pb-5 justify-center text-center items-center">
            <h3 className="text-xl max-sm:text-base text-[#263156] font-roboto-serif pt-10">LET'S WORK TOGETHER</h3>
            <h1 className="font-roboto-serif font-medium max-sm:text-2xl text-[40px]  text-[#365E7D] mt-3">We Love to Listen to Your <br /> Requirements</h1>
            <div className="bt flex  mt-10  w-64 hover:bg-[#ce6ad0] hover:border-none hover:drop-shadow-lg  h-14 border-2 border-[#302F68] mx-auto  rounded-[40px]">
            <a
                    href={whatsApplink}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                 className='text-xl max-sm:text-base text-[#302F68] font-medium font-roboto my-auto mx-auto  flex'>GET STARTS <FaGreaterThan className=" mt-[4px] ml-2 text-[#302F68]"/>  </a>  
            </div>
            <div className="cal-d flex text-center items-center justify-center mt-11 gap-2">
                <h3 className="font-roboto-serif max-sm:text-base text-xl text-[#263156]">Or call us now</h3>
                <img src={callIcon} alt="" />
                <p className="text-xl max-sm:text-lg text-[#263156] font-medium">+91 8331950396  <br /> +91 9948732151 </p>
                
            </div>
        </div>
      
        {/* office detail section */}
        <div className="o-d w-full h-auto bg-[#FFFFFF]  text-center pb-8 ">
            <h2 className="text-[#2B2D3E]  text-xl max-sm:text-base font-roboto-serif pt-14"> OUR LOCATION</h2>
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

export default AboutUs