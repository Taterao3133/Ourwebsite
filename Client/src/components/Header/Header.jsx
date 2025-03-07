import { useEffect, useState } from "react";

import { FaGreaterThan } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import HeaderServiceslider from '../utils/HeaderServiceslider'; 
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../images/webvtx logo2.svg'
import { doc, getDoc } from "firebase/firestore";
import { MdWifiCalling3 } from "react-icons/md";
import { db } from "../../firebase";


function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [bgColor, setBgColor] = useState('#fffefe');
    const [socialLinks, setSocialLinks] = useState({});
    const location = useLocation();
    const countryCode = '+91';
  const whatsApplink = `https://wa.me/${countryCode}${socialLinks.whatsUpNumber}?text=Hello%20I%20want%20make%20an%20appointment`
  const tellcal=`tel:${countryCode}${socialLinks.whatsUpNumber}`

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
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      useEffect(() => {
        switch (location.pathname) {
          case '/about':
            setBgColor('#f4f6ff'); 
            break;
          case '/contactus':
            setBgColor('#fef4f4'); 
            break;
          case '/career':
            setBgColor('#fef9f4'); 
            break;
          default:
            setBgColor('#fffefe');
            break;
        }
      }, [location.pathname]);
    

  return (
    <>   
     <div className={`header w-full  transition-all lg:duration-700 md:duration-350 ease-in-out ${isSticky ? 'fixed top-0 left-0 bg-[#f9f8f8]  border-none h-16 pt-2   lg:pt-1 shadow-lg z-50' : 'lg:h-20 h-16 text-white pt-2 bg-[#35359d] lg:pt-2 py-auto border-b-[1px] border-[#7285bf] lg:z-30'}`}>
      <div className='h-c justify-between flex   transition-all duration-700 ease-in-out max-sm:mx-9 md:px-16  lg:px-20'>
        <div className="l-c">
          <div className="logo flex gap-x-4">
          <Link to='/' >  <img src={logo} alt=""  className="w-auto my-auto max-sm:h-12 md:h-12 lg:h-14 max-sm:my-auto "/> 
          </Link>
          <div className={`${isSticky ? 'text-[#ce6ad0]':'text-white'} max-md:hidden  `}>
           <p className=' font-roboto-serif pt-2  my-auto  font-semibold  text-xl' >Web Vortex <br /> </p>
           <p className="text-base text-[#de87df] font-roboto-serif -mt-1 ">Solutions </p>
           </div>
          </div>
{/*  */}
        </div>
        <div className={`hidden lg:flex   `}>
        <div className={`r-c flex lg:space-x-3 xl:space-x-7 border-1 border-red-500  items-center `}>
          <div  className={`hovers  ${isSticky ? 'py-2' :'py-5'} `}
                      onMouseEnter={() => setIsServicesHovered(true)} 
                      onMouseLeave={() => setIsServicesHovered(false)}
           >
          <p 
            className={`text-base  cursor-pointer font-roboto hover:text-[#ce6ad0]  hover:underline-offset-4 hover:underline  font-semibold text-[#090B4F] tracking-wide ${isSticky ? ' ':' text-[#fff]'}  ${location.pathname === '' ? 'text-[#ce6ad0] underline-offset-4 underline ' : ''} `} 
  
          >
            SERVICES +
          </p>
          </div>
       
          <p className={`text-base font-roboto  font-semibold hover:text-[#ce6ad0]  hover:underline-offset-4 hover:underline text-[#090B4F] tracking-wide ${isSticky ? ' ':' text-[#fff]'}  ${location.pathname === '/about' ? 'text-[#ce6ad0] underline-offset-4 underline ' : ''}`}><Link to='about'>ABOUT US</Link></p>
          
          <p className={`text-base font-roboto  font-semibold hover:text-[#ce6ad0]  hover:underline-offset-4 hover:underline text-[#090B4F] tracking-wide ${isSticky ? ' ':' text-[#fff]'}  ${location.pathname === '/career' ? 'text-[#ce6ad0] underline-offset-4 underline ' : ''}`}><Link to='/career'>CAREERS</Link></p>
          <div className="icn md:h-14 md:w-14 md:pt-1 cursor-pointer relative group">
            <a href={tellcal} className="relative">
              <MdWifiCalling3
                className={`p-2 shadow-lg drop-shadow-lg mg rounded-full transition-all duration-300 ease-in-out
                  h-12 w-12 bg-[#b857c7] text-white 
                  group-hover:bg-[#35359d]  group-hover:ring-4 group-hover:ring-[#b857c7] group-hover:ring-opacity-50`}
              />
              <span className="absolute inset-0 doted flex items-center justify-center animate-pulse-circle"></span>
            </a>
          </div>


          <div className="bt flex w-56 cursor-pointer  h-14 border-2 hover:border-none hover:drop-shadow-lg hover:bg-[#ce6ad0] hover:animate-shake  border-white bg-[#3434A1] drop-shadow-lg   rounded-[40px]">
              <button className='text-[17px] text-white  hover:bg-[#ce6ad0] hover:text-[#fff] font-medium font-roboto my-auto  mx-auto flex  '>
                <a href={whatsApplink}
                    target="_blank"
                    rel="noopener noreferrer">REQUEST A QUOTE
                </a><FaGreaterThan className=" mt-[4px] ml-2 text-white"/>  </button>    
          </div>

          </div>
          </div>
          <div className="lg:hidden  flex items-center my-auto">
            <button onClick={toggleMenu} className="text-2xl ">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            {isMenuOpen && (
          <div style={{ backgroundColor: bgColor }}
          className="lg:hidden bg-[#fffefe]  text-[#333232] fixed  top-16 border-[1px] right-0 h-full w-3/4 z-50 flex flex-col items-end transition-transform duration-300">
            <Link to='/' onClick={toggleMenu} className={`${location.pathname === '/' ? 'bg-[#cef1ea]' : ''}  text-base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 mt-2 rounded-lg w-full text-center`}
             >Home
            </Link>
            <Link to='/about' onClick={toggleMenu} className={`${location.pathname === '/about' ? 'bg-[#cef1ea]' : ''} base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>About Us</Link>
            <Link to='/contactus' onClick={toggleMenu} className={`${location.pathname === '/contactus' ? 'bg-[#cef1ea] text-white' : ''} text-base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Contact Us</Link>
            <Link to='/career'  onClick={toggleMenu} className={`${location.pathname === '/career' ? 'bg-[#ce6ad0]  text-white' : ''} text-base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Career</Link>
        </div>
        )}
        </div>
      </div>
      <HeaderServiceslider 
         isServicesHovered={isServicesHovered} 
         setIsServicesHovered={setIsServicesHovered}
      />
    </div>
        </>
  )
}

export default Header