import emaiIcon from '../../images/footer-emailIcon.svg'
import callIcon from '../../images/footer-callIcon.svg'
import locationIcon from '../../images/footer-locationIcon.svg'
import whatsappIcon from '../../images/whatsappIcon.svg'
import instaIcon from '../../images/instaIcon.svg'
import linkedInIcon from '../../images/linkedInIcon.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'


function Footer() {
  const [contactDetails, setContactDetails] = useState({ email: "", phone: "", address: "" });
  const [socialLinks, setSocialLinks] = useState({});

  const countryCode='+91'
  const whatsApplink = `https://wa.me/${countryCode}${socialLinks.whatsUpNumber}`

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
    const fetchContactDetails = async () => {
      try {
        const contactDoc = await getDoc(doc(db, "siteDetails", "contact"));
        if (contactDoc.exists()) {
          setContactDetails(contactDoc.data());
        } else {
          console.log("Contact data not found");
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactDetails();
  }, []);

  return (
    <div className='foot w-full h-auto overflow-hidden bg-[#141064] pb-5'>
      <div className=" grid md:grid-cols-2 md:mx-10 lg:grid-cols-3 md:space-x-32 lg:space-x-16 pb-5 pt-16 max-sm:mx-4 lg:px-8 xl:px-20 overflow-hidden" >
        <div className="gr  w-full h-auto  ">
          <h1 className='text-[#FFFFFF] font-roboto-serif underline-offset-[5px] underline font-medium max-sm:text-lg text-2xl'>CONTACT US</h1>

          <div className="flex  space-x-3">
            <img src={emaiIcon} alt="" />
            <div className="txt">
              <h2 className='text-xl max-sm:text-lg text-[#D9D9D9] pt-8 font-roboto-serif'>EMAIL</h2>
              <p className='text-[#D9D9D9CC] mt-1 font-roboto-serif max-sm:text-base text-lg'>{contactDetails.email || "Not Available"}</p>
            </div>
          </div>
          <div className="flex  space-x-3">
            <img src={callIcon} alt="" className='mt-1'/>
            <div className="txt">
              <h2 className='text-xl text-[#D9D9D9] pt-8 font-roboto-serif'>PHONE</h2>
              <p className='text-[#D9D9D9CC] mt-1 font-roboto-serif max-sm:text-base text-lg'>{contactDetails.phone || "Not "}</p>
            </div>
          </div>
          <div className="flex  space-x-3">
            <img src={locationIcon} alt="" className='-mt-10' />
            <div className="txt">
              <h2 className='text-xl max-sm:text-lg text-[#D9D9D9] pt-8 font-roboto-serif'>ADDRESS</h2>
              <p className='text-[#D9D9D9CC] mt-1 font-roboto-serif max-sm:text-base text-lg'>Flat no 102,Narayanguda Main Rd,<br /> Beside Shanthi Theatre Narayanguda,<br /> Hyderabad, 500029</p>
            </div>
          </div>
        </div>
        <div className="gr w-full max-sm:mt-8 h-auto">
          <h1 className='text-[#FFFFFF] font-roboto-serif underline-offset-[5px] underline font-medium max-sm:text-lg text-2xl'>SERVICES</h1>
          <div className="lnks max-sm:space-y-2 lg:space-y-5 max-sm:mt-2 lg:mt-7 ">
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'><Link to='/customapp' >Custom App Development</Link></p>
            
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'>Android App Development</p>
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'>E-Commerce Website</p>
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'>Landing Pages</p>
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'>Visual Design Services</p>
          </div>
        </div>
        <div className="gr w-full max-sm:mt-7 h-auto">
          <h1 className='text-[#FFFFFF] font-roboto-serif underline-offset-[5px] underline font-medium max-sm:text-lg text-2xl'>ABOUT US</h1>
          <div className="lnks max-sm:space-y-2 lg:space-y-5 max-sm:mt-2 md:mt-7">
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'><Link to='/about'>About Us</Link></p>
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'><Link to='/contactus'>Contact Us</Link></p>
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'><Link to='/career'>Careers</Link></p>
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'><Link to='/privacypolicy' >Refund Policy</Link></p>
            <p className='text-[#D9D9D9CC] text-lg max-sm:text-base font-roboto-serif hover:text-[#ce6ad0] cursor-pointer'><Link to='/termsandcondition'>Terms and Conditions</Link></p>
          </div>
        </div>
 
      </div>
      <div className="footer-sIcon ">
        <div className="icns flex gap-x-5 justify-center items-center text-center  ">
        <a
            href={whatsApplink} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500"
          >
            <img src={whatsappIcon} alt=""  className='cursor-pointer'/>
          </a>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500"
          >
            <img src={instaIcon} alt="" className='cursor-pointer' />
          </a>
         {/* <img src={fbIcon} alt=""  className='cursor-pointer'/> */}
          <a
            href={socialLinks.Linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500"
          >
            <img src={linkedInIcon} alt=""  className='cursor-pointer'/>
          </a>
        </div>
          <p className='text-lg max-sm:text-xs text-[#D9D9D9] text-center mt-4 '>© 2025. All Rights Reserved By WebVortexSolutions | Webvtx.com</p>

      </div>
    </div>
  )
}


export default Footer
