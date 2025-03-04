import contactstatue from '../images/contact-statue.svg';
import contactchmr from '../images/contact-chmr.svg';
import { GoDotFill } from 'react-icons/go';
import Email from '../images/footer-emailIcon.svg';
import LocationIcon from '../images/footer-locationIcon.svg';
import Phone from '../images/footer-callIcon.svg';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ContactUs() {
  const [contactDetails, setContactDetails] = useState({ email: "", phone: "", address: "" });
  
    useEffect(() => {
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
    <div className="cts px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#D9D9D999] h-auto md:h-48 w-full border-2 pt-8 space-y-4 md:space-y-0 md:space-x-8">
        <div className="statue">
          <img src={contactstatue} alt="" className="h-20 md:h-40" />
        </div>

        <div className="cnt text-center">
          <div className="flex justify-center space-x-2 text-[#E7A548] text-base md:text-xl cursor-pointer font-medium">
            <p>Home</p>
            <GoDotFill className="text-[#E7A548] mt-1" />
            <p className="underline underline-offset-4">Contact</p>
          </div>
          <p className="text-3xl md:text-[44px] lg:mt-5 font-roboto-serif font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#F471FF] via-[#FA8166] to-[#AAD2E2]">
            Contact Us
          </p>
        </div>

        <div className="chmr">
          <img src={contactchmr} alt="" className="h-20 md:h-40" />
        </div>
      </div>

    
      <div className="dd flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-4 mt-5 pb-3">
        
        <div className="bx w-full lg:w-[624px] h-auto border-2 p-3 rounded-br-[32px] rounded-lg">
          <h2 className="font-roboto font-normal text-2xl md:text-4xl ml-5 text-[#0C3461]">
            Have a Question? Write A Message
          </h2>
          <h3 className="font-roboto text-lg md:text-2xl mt-4 ml-5">
            We will get back to you as soon as we receive the message
          </h3>

          <div className="form mt-6 flex flex-wrap gap-4">
            <input type="text" placeholder="Enter Name" className="w-full md:w-[48%] border px-4 py-2 rounded-md" />
            <input type="email" placeholder="Enter Email" className="w-full md:w-[48%] border px-4 py-2 rounded-md" />
            <input type="tel" placeholder="Enter Number" className="w-full md:w-[48%] border px-4 py-2 rounded-md" />
            <select className="w-full md:w-[48%] border px-4 py-2 rounded-md">
              <option>Choose Requirement</option>
              <option>General Inquiry</option>
              <option>Booking</option>
              <option>Support</option>
            </select>
            <textarea placeholder="Write a message" className="w-full border px-4 py-2 rounded-md h-24 resize-none"></textarea>
            <button className="w-full md:w-[288px] h-14 text-xl bg-[#3F36CD] text-white py-2 rounded-[40px] font-medium">
              SEND
            </button>
          </div>
        </div>

        {/* Contact Info Boxes */}
        <div className="bx2 space-y-4">
          <div className="w-full md:w-[515px] h-auto border-2 bg-[#E29E8A] flex items-center rounded-br-[32px] rounded-lg p-4">
            <img src={Email} alt="" className="h-16 w-16 md:h-[80px] md:w-[80px] mr-4" />
            <div>
              <h2 className="text-2xl md:text-3xl text-[#000000] font-roboto-serif">EMAIL</h2>
              <p className="mt-1 text-[#302F68] font-roboto text-xl sm:text-lg md:text-2xl">{contactDetails.email}</p>
            </div>
          </div>

          <div className="w-full md:w-[515px] h-auto border-2 bg-[#FFCEBF] flex items-center rounded-br-[32px] rounded-lg p-4">
            <img src={Phone} alt="" className="h-16 w-16 md:h-[80px] md:w-[80px] mr-4" />
            <div>
              <h2 className="text-2xl md:text-3xl text-[#000000] font-roboto-serif">PHONE</h2>
              <p className="mt-1 text-[#302F68] font-roboto text-xl md:text-2xl">{contactDetails.phone}</p>
            </div>
          </div>

          <div className="w-full md:w-[515px] h-auto border-2 bg-[#6A95D3] flex items-center rounded-br-[32px] rounded-lg p-4">
            <img src={LocationIcon} alt="" className="h-16 w-16 md:h-[80px] md:w-[80px] mr-4" />
            <div>
              <h2 className="text-2xl md:text-3xl text-[#000000] font-roboto-serif">ADDRESS</h2>
              <p className="mt-1 text-[#302F68] font-roboto text-xl md:text-2xl">
                Flat no 102, Narayanguda Main Rd, beside Shanthi Theatre, Narayanguda, Hyderabad, 500029
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
