import { FaGreaterThan } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import aboutImg from '../images/about-img.svg'
import ourVision from '../images/ourVision.svg'
import ourMission from '../images/ourMission.svg'
import aboutexpicon from '../images/about-expicon.svg'
import aboutwebicon from '../images/about-webicon.svg'
import aboutproicon from '../images/about-proicon.svg'
import aboutclieicon from '../images/about-clieicon.svg'
import aboutInn from '../images/about-innov.svg'
import aboutProcess from '../images/about-process.svg'
import aboutAppro from '../images/about-approch.svg'
import aboutCost from '../images/about-cost.svg'
import callIcon from '../images/call-icon.svg'
import charminarImg from '../images/charminarImg.svg'
import Portfolio from "../components/utils/Portfolio";




function AboutUs() {
  return (
   <div className="abt overflow-hidden">
    <div className="about-sec  max-sm:h-auto lg:h-[600px] max-sm:justify-center max-sm:items-center w-full  lg:px-20 bg-gradient-to-b from-[#FFFFFF] to-[#e3fbd4]">
      <div className="flex mt-20  max-sm:mx-4 space-x-3">
        <h2 className='text-[#E7A548]  text-lg max-sm:text-base font-roboto-serif font-medium'>Home </h2>
        <div className="flex">

        <GoDotFill className="text-[#E7A548] mt-1" />
        <h4 className='text-[#E7A548] underline text-lg max-sm:text-base font-roboto-serif font-medium'>About Us</h4>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-6">
        <div className="l-c pb-5 pt-3 pr-4">
          <h1 className="font-roboto-serif max-sm:text-center text-[40px] max-sm:text-xl bg-clip-text text-transparent w-80 font-medium  bg-gradient-to-r from-[#F471FF] via-[#FA8166] to-[#FBCA84]">
            About XXXXX
          </h1>
          <p className="text-lg max-sm:text-base max-sm:text-center font-roboto-serif max-sm:px-4 lg:font-medium text-[#0C3461] mt-4">At XXXXX, we combine the agility and innovation of a startup with over 7 years of industry experience. 
            Founded with a vision for innovation and a passion for excellence, XXXXX emerged onto the scene in recent years,
             driven by the desire to redefine industry standards and push the boundaries of possibility. What began as a humble 
             endeavor has flourished into a dynamic force, propelled by a steadfast commitment to our core values of creativity, 
             integrity, and excellence</p>

             <div className="bt flex  mt-7 max-sm:mx-auto w-56 max-sm:w-[50%] max-sm:h-auto max-sm:py-2  h-14 border-2 border-[#000000]  rounded-[40px]">
                <button className='text-lg max-sm:text-base text-[#000000] font-medium font-roboto-serif my-auto mx-auto flex'>Contact Us <FaGreaterThan  className=" mt-[4px] ml-2 text-[#000000]"/>  </button>
              </div>

        </div>
        <div className="r-c max-sm:justify-center max-sm:items-center max-sm:mt-7 max-sm:pb-10">
          <img src={aboutImg} alt="" className=" max-sm:mx-auto  max-sm:w-[75%] lg:w-full" />
          
        </div>
      </div>

    </div>
      <div className="bg-gradient-to-b from-[#FFFFFF] to-[#e4b94c1a] w-full h-auto pb-10 lg:px-20 lg:space-x-7 max-sm:px-4 lg:grid lg:grid-cols-2">
        <div className="l-c  mt-20 lg:pr-6">
          <h1 className="text-[40px] max-sm:text-2xl max-sm:text-center font-roboto-serif text-[#E13535] font-medium">India’s Top App Development & Digital Marketing Company working with talents on delivering unique ideas.</h1>
          <div className="flex max-sm:justify-center max-sm:items-center max-sm:mt-8 lg:mt-16 space-x-6">
            <img src={ourVision} alt=""  className="max-sm:w-28 max-sm:h-auto"/>
            <p className="text-[#E13535] mt-7 text-2xl max-sm:text-lg font-roboto-serif font-medium"> Our Vision</p>
          </div>
          <p className="text-lg max-sm:text-base  max-sm:text-center font-roboto-serif text-[#302F68] lg:pr-6 mt-6">"To be a leading innovator in the digital solutions industry, empowering businesses
            and individuals with cutting-edge technology that drives growth, efficiency, and creativity."</p>

        </div>
        <div className="r-c max-sm:mt-10 max-sm:text-center lg:mt-20">
          <p className="text-lg max-sm:hidden max-sm:text-base font-roboto-serif text-[#302F68]">At XXXXX, the intersection of innovation and experience is where magic happens. Join us on our journey as we continue to push the boundaries of what's possible and shape the future of technology, one groundbreaking idea at a time.

            With over seven years of industry experience under our belt, we bring a wealth of knowledge, expertise, and insights to every project we undertake.
            Our track record speaks for itself, 
            as we've consistently exceeded expectations and forged lasting partnerships built on trust, transparency, and results
            </p>
          <div className="flex  max-sm:justify-center max-sm:items-center space-x-6 lg:mt-16">
            <img src={ourMission} alt="" className=" max-sm:w-28 max-sm:h-auto" />
            <p className="text-2xl max-sm:text-lg text-[#E13535] mt-7 font-roboto-serif font-medium">Our Mission</p>
          </div>
          <p className="text-lg max-sm:text-base max-sm:text-center font-roboto-serif text-[#302F68] mt-6">At XXXXX, we are dedicated to delivering top-tier apps, applications, and websites that exceed client expectations. Leveraging our 7 years of expertise, we strive to create intuitive, user-friendly digital solutions that enhance productivity and engagement. Our mission is to foster 
            long-term partnerships by consistently delivering high-quality, reliable, and innovative technology that transforms ideas into reality."</p>
        </div>
      </div>
      {/*  */}
      <div className="cmp-details pb-10 w-full h-auto grid grid-cols-2 bg-[#E0CDE7]">
            <div className="l-cmp-details xl:ml-20 mt-9 h-auto  ">
                <h3 className="font-roboto-serif text-[#000000] font-medium text-4xl"> <span>XXXXX </span> Websites and App Development Company</h3>
                <p className="text-lg font-roboto-serif text-[#302F68] mt-7">At XXXXX, we take pride in being a top-rated Websites and mobile app development company. Our team brings together creativity 
                    and extensive experience to deliver cutting-edge Websites and mobile app solutions. Located in India, we have established 
                    ourselves as a leading force in the industry.</p>
                <p className="text-lg font-roboto-serif text-[#302F68] mt-6">XXXXX is your go-to destination for cutting-edge websites and mobile app development solutions in Hyderabad, India. 
                    Renowned as a top-rated company, we pride ourselves on being the creative powerhouse behind numerous successful 
                    Websites and mobile applications</p>

                <p className="font-roboto-serif mt-5 text-[#302F68] font-medium text-lg">At XXXXX, we don't just create Websites, we craft exceptional user experiences that drive success.
                     Join us on your journey to Website And Mobile App excellence</p>

                <div className="bt flex  mt-7  w-64  h-16 border-2 border-white bg-[#3F36CD]  rounded-[40px]">
                    <button className='text-xl text-white font-medium font-roboto my-auto mx-auto  flex'>REQUEST A QUOTE <FaGreaterThan className=" mt-[4px] ml-2 text-white"/>  </button>
                    
                </div>
            </div>
            <div className="r-cmp-details xl:mx-20 mt-11  gap-x-2 h-auto  grid grid-cols-2">
                <div className="bx w-[80%] pb-3 h-[87%] text-center shadow-xl border-b-4 border-[#6DDDD6] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#B3EFEB]">
                    <img src={aboutexpicon} alt="" className="mx-auto p-3 " />
                    <p className="text-[#0D4E57] text-3xl font-bold ">2+</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] mt-1 font-semibold text-xl">Years <br /> Experience</h4>
                </div>
                <div className="bx bx w-[80%] pb-3 h-[87%]  text-center shadow-xl border-b-4 border-[#EAA2A2] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#EAA2A2]">
                    <img src={aboutwebicon} alt="" className="mx-auto p-3 " />
                    <p className="text-[#0D4E57] text-3xl font-bold ">2+</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] mt-1 font-semibold text-xl">Web & Apps <br /> Developed</h4>
                </div>
                <div className="bx bx w-[80%] pb-3 h-[87%] text-center shadow-xl border-b-4 border-[#EC91E3] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#E9A4E2]">
                    <img src={aboutproicon} alt="" className="mx-auto p-3 " />
                    <p className="text-[#0D4E57] text-3xl font-bold ">100%</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] mt-1 font-semibold text-xl">Projects <br /> Delivered</h4>
                </div>
                <div className="bx bx w-[80%] pb-3 h-[87%] text-center shadow-xl border-b-4 border-[#93B2E0] rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-md bg-[#9BB4D9]">
                    <img src={aboutclieicon} alt="" className="mx-auto p-3  " />
                    <p className="text-[#0D4E57] text-3xl font-bold ">100%</p>
                    <h4 className="font-roboto-serif text-[#0D4E57] mt-1 font-semibold text-xl">Clients <br /> Satisfaction</h4>
                </div>
                
                
            </div>
        </div> 
        {/* choose section */}
        <div className="choose-sec pb-14 px-20">
          <div className="txt text-center ">
            <h3 className="text-[#365E7D] font-medium text-xl mt-7 font-roboto-serif">We Are Awesome</h3>
            <h2 className="text-[#0D4E57] font-roboto-serif mt-6 text-[40px]">Why Choose XXXXX</h2>

          </div>
          <div className="grid grid-cols-4 gap-3 mt-6z">
            <div className="bx1 border-2 w-full h-auto rounded-lg border-b-4 border-r-4   text-center p-6  ">
              <img src={aboutInn} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl text-[#0D4E57] font-roboto-serif font-medium mt-3">Expertise and 
              Innovation</h2>
              <p className="text-[] font-roboto-serif text-lg mt-5">We pride ourselves staying at the front of innovation, constantly pushing boundaries a redefining what is possible.</p>
            </div>
            <div className="bx1 border-2 w-full h-96 rounded-lg border-b-4 border-r-4   text-center p-6  ">
              <img src={aboutProcess} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl text-[#0D4E57] font-roboto-serif font-medium mt-3">Transparent
              Process</h2>
              <p className="text-[] font-roboto-serif text-lg mt-5">Our transparent process is designed to demystify the journey from concept to delivery</p>
            </div>
            <div className="bx1 border-2 w-full h-auto rounded-lg border-b-4 border-r-4   text-center p-6  pb-20 ">
              <img src={aboutAppro} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl text-[#0D4E57] font-roboto-serif font-medium mt-3">Client-Centric 
              Approach</h2>
              <p className="text-[] font-roboto-serif text-lg mt-5">Our dedicated team takes the time to listen, & collaborate, ensuring that every interaction a step towards your success.</p>
            </div>
            <div className="bx1 border-2 w-full h-96 rounded-lg border-b-4 border-r-4   text-center p-6  ">
              <img src={aboutCost} alt="" className="mx-auto mt-5" />
              <h2 className="text-2xl text-[#0D4E57] font-roboto-serif font-medium mt-3">Cost-Effective</h2>
              <p className="text-[] font-roboto-serif text-lg mt-5">Our commitment to providing cost-effective solutions is ingrained in our mission.</p>
            </div>
            

          </div>
        </div>
       

        {/* f */}
        <div className="w-sec bg-[#B9C5E3] w-full h-auto pb-5 justify-center text-center items-center">
            <h3 className="text-xl text-[#263156] font-roboto-serif pt-10">LET'S WORK TOGETHER</h3>
            <h1 className="font-roboto-serif font-medium text-[40px] text-[#365E7D] mt-3">We Love to Listen to Your <br /> Requirements</h1>
            <div className="bt flex  mt-10  w-64  h-14 border-2 border-[#302F68] mx-auto  rounded-[40px]">
                <button className='text-xl text-[#302F68] font-medium font-roboto my-auto mx-auto  flex'>GET STARTS <FaGreaterThan className=" mt-[4px] ml-2 text-[#302F68]"/>  </button>   
            </div>
            <div className="cal-d flex text-center items-center justify-center mt-11 gap-2">
                <h3 className="font-roboto-serif text-xl text-[#263156]">Or call us now</h3>
                <img src={callIcon} alt="" />
                <p className="text-xl text-[#263156] font-medium">+91 8331950396  <br /> +91 9948732151 </p>
                
            </div>
        </div>
        <Portfolio/>
        {/* office detail section */}
        <div className="o-d w-full h-auto bg-[#FFFFFF]  text-center pb-8 ">
            <h2 className="text-[#2B2D3E]  text-xl font-roboto-serif mt-14"> OUR LOCATION</h2>
            <h1 className=" text-[40px]  text-[#FD4755] font-roboto-serif font-medium">Our Office</h1>
                <img src={charminarImg} alt="" className="mx-auto mt-3 border-t-1 border-[#FFFFFF]" />   
            <div className="txt px-20 text-left">
               <h3 className="text-2xl mt-3 font-roboto-serif text-[#FFAC33] ">HYDERABAD, INDIA</h3>
               <h4 className="text-xl font-roboto-serif text-[#365E7D] mt-4">REGISTERED OFFICE</h4>
               <p className="font-roboto-serif text-xl text-[#090B4F] mt-3">Flat no 102, Narayanguda Main Rd, <br /> Beside Shanthi Theatre Narayanguda,<br /> Hyderabad, 500029</p>
            </div>
            


        </div>
  </div>
  )
}

export default AboutUs