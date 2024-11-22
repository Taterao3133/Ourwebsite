// import portfolio from '../../images/portfolio.png'
import React, { useEffect, useState } from 'react';
import portfolio1 from '../../images/portfolio.png';
import portfolio2 from '../../images/portfolio.png';
import portfolio3 from '../../images/portfolio.png';

const slides = [
  {
    title: "Wake up and make up",
    description: "Personalized care is key. Each client receives a thorough consultation to tailor services to their unique needs, ensuring they feel valued and leave looking and feeling their best. This focus on exceptional care builds trust, loyalty, and lasting client relationships.",
    image: portfolio1,
    progression: [true, false, false], 
  },
  {
    title: "Beauty lies within",
    description: "Our team of professionals are committed to providing the highest level of service, focusing on enhancing natural beauty through carefully selected products and personalized treatments.",
    image: portfolio2,
    progression: [false, true, false], 
  },
  {
    title: "Elegant and refined",
    description: "With a dedication to perfection, we deliver elegant and refined styles that highlight the unique features of every client, ensuring a look that is timeless and sophisticated.",
    image: portfolio3,
    progression: [false, false, true], 
  },
];



function PortfolioSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); 
  
      return () => clearInterval(interval); 
    }, []);
  return (
    <div className='w-full h-auto pb-20 bg-[#F2F2F2] border-2 overflow-hidden '>
      <div className="txt text-center pt-10">
        <h3 className='text-[#333262] text-2xl max-sm:text-base font-roboto-serif'>OUR SUCCESSFUL PROJECTS</h3>
        <h1 className='font-roboto-serif text-[40px] max-sm:text-2xl text-[#365E7D] font-medium mt-3 underline-[4px] underline underline-offset-8'>Portfolio</h1>
      </div>

      <div className=" w-full mt-11 h-[470px] flex justify-center">
        <div className="relavite w-[90%]">
              <div  className="min-w-full overflow-hidden  bg-[#FFFFFF] h-[470px] rounded-tl-[80px]">
          <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
                <div key={index} className="d grid lg:grid-cols-2 min-w-full h-[430px]">
                <div className="l-c">
                  <h2 className="text-[40px] max-sm:hidden text-[#AE7C36] font-roboto-serif font-medium md:mt-6 mt-16 text-center">
                    {slide.title}
                  </h2>
                  <p className="text-xl max-sm:hidden md:hidden text-[#302F68] font-roboto-serif mt-10 pl-11">
                    {slide.description}
                  </p>
                  </div>
                <div className="r-c lg:mt-16 md:mt-3 md:ml-5">
                  <img src={slide.image} alt={slide.title} className='md:w-[80%] md:h-auto md:mx-auto' />
                </div>
                 
              </div>
            ))}
          </div>
          <div className="progression-btn flex ml-11 gap-2 ">
                {slides[currentIndex].progression.map((isActive, i) => (
                <div
                    key={i}
                    style={{ width: isActive ? '40px' : '16px' }}
                    className={`${isActive ? 'bg-[#FD4755]' : 'border-2 border-black'} h-3 rounded-[5px]`}
                ></div>
                ))}
            </div>
        
        </div>
       </div>
      </div>
    </div>
    
    );
}


export default PortfolioSlider