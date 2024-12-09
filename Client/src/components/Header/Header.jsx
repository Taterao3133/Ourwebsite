import { useEffect, useState } from "react";
import callIcon from '../../images/header-callIcon.svg'
import { FaGreaterThan } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import HeaderServiceslider from '../utils/HeaderServiceslider'; 
import { FiMenu, FiX } from "react-icons/fi";



function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    

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

  return (
    <>   
     <div className={`header w-full border-b-1 bg-[#f3f3f6]  transition-all lg:duration-700 md:duration-350 ease-in-out ${isSticky ? 'fixed top-0 left-0 bg-[#f9f8f8] border-none h-16 pt-2 lg:pt-1 shadow-lg z-50' : 'lg:h-20 h-16 text-white pt-2 bg-[#35359d] lg:pt-2 py-auto border-b-[1px] border-[#7285bf] lg:z-30'}`}>
      <div className='h-c justify-between flex   transition-all duration-700 ease-in-out max-sm:mx-10 md:px-16  lg:px-20'>
        <div className="l-c">
          <div className="logo">
            tech solutions
          </div>

        </div>
        <div className="hidden lg:flex">
        <div className="r-c flex space-x-7 items-center ">
        <p 
            className={`text-base cursor-pointer font-roboto  font-semibold text-[#090B4F] tracking-wide ${isSticky ? ' ':' text-[#fff]'}`} 
            onMouseEnter={() => setIsServicesHovered(true)} 
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            SERVICES +
          </p>
          <p className={`text-base font-roboto  font-semibold text-[#090B4F] tracking-wide ${isSticky ? ' ':' text-[#fff]'}`}><Link to='about'>ABOUT US</Link></p>
          
          <p className={`text-base font-roboto  font-semibold text-[#090B4F] tracking-wide ${isSticky ? ' ':' text-[#fff]'}`}><Link to='/career'>CAREERS</Link></p>
          <img src={callIcon} alt="" className={`  p-2 bg-blue-700 rounded-[90%] ${isSticky ? 'h-12 w-12 ':' h-12 w-12'}`}/>
          <div className="bt flex w-56  h-14 border-2 border-white bg-[#3F36CD]  rounded-[40px]">
              <button className='text-[17px] text-white bg-[#3F36CD] font-medium font-roboto my-auto mx-auto flex'>REQUEST A QUOTE <FaGreaterThan className=" mt-[4px] ml-2 text-white"/>  </button>    
          </div>

          </div>
          </div>
          <div className="lg:hidden  flex items-center mt-3">
            <button onClick={toggleMenu} className="text-2xl ">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            {isMenuOpen && (
          <div className="lg:hidden bg-[#fffefe] text-[#333232] fixed  top-16 border-[1px] right-0 h-full w-3/4 z-50 flex flex-col items-end transition-transform duration-300">
            <Link to='/' onClick={toggleMenu} className={`${location.pathname === '/' ? 'bg-[#cef1ea]' : ''} text-base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 mt-2 rounded-lg w-full text-center`}>Home</Link>
            {/* <Link to='/service' onClick={toggleMenu} className={`${location.pathname === '/service' ? 'bg-[#cef1ea]' : ''} text-lg font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Services</Link> */}
            {/* <Link to='/career' onClick={toggleMenu} className={`${location.pathname === '/career' ? 'bg-[#cef1ea]' : ''} text-lg font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Career</Link> */}
            <Link to='/about' onClick={toggleMenu} className={`${location.pathname === '/about' ? 'bg-[#cef1ea]' : ''} base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>About Us</Link>
            <Link to='/contactus' onClick={toggleMenu} className={`${location.pathname === '/contactus' ? 'bg-[#cef1ea] text-white' : ''} text-base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Contact Us</Link>
            <Link to='/career'  onClick={toggleMenu} className={`${location.pathname === '/contactus' ? 'bg-[#cef1ea] text-white' : ''} text-base font-medium font-raleway hover:text-white hover:bg-[#cef1ea] p-2 rounded-lg w-full text-center`}>Career</Link>
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