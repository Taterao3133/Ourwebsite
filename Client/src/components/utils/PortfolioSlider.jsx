import React, { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { doc, getDoc } from 'firebase/firestore';

function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const portfolioDoc = await getDoc(doc(db, "siteDetails", "portfolio"));
        if (portfolioDoc.exists()) {
          setPortfolioData(portfolioDoc.data().items || []);
        } else {
          console.log("Portfolio data not found");
        }
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  useEffect(() => {
    if (portfolioData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [portfolioData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-full h-auto pb-20 bg-[#F2F2F2] border-2 overflow-hidden'>
      <div className="txt text-center pt-10">
        <h3 className='text-[#333262] text-2xl max-sm:text-base font-roboto-serif'>OUR SUCCESSFUL PROJECTS</h3>
        <h1 className='font-roboto-serif text-[40px] max-sm:text-2xl text-[#365E7D] font-medium mt-3 underline-[4px] underline underline-offset-8'>Portfolio</h1>
      </div>

      <div className="w-full mt-11 max-sm:h-[320px] h-[470px] flex justify-center">
        <div className="relative w-[90%]">
          <div className="min-w-full overflow-hidden bg-[#FFFFFF] max-sm:h-auto h-[470px] rounded-tl-[80px]">
            <div
              className="flex transition-transform duration-1000"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, willChange: 'transform' }}
            >
              {portfolioData.map((items, index) => (
                <div key={index} className="grid lg:grid-cols-2 min-w-full  h-[430px] overflow-hidden">
                  <div className="l-c">
                    <h2 className="xl:text-[40px] lg:text-[32px] max-sm:hidden text-[#AE7C36] font-roboto-serif font-medium md:mt-6 lg:mt-20 xl:mt-16 text-center">
                      {items.title}
                    </h2>
                    <p className="text-base max-lg:hidden text-[#302F68] font-roboto-serif lg:mt-4 overflow-hidden mt-10 pl-11">
                      {items.description}
                    </p>
                  </div>
                  <div className="r-c lg:mt-20 md:mt-3 max-sm:-mt-32 md:ml-5">
                    <img
                      src={items.imageUrl}
                      alt={items.title}
                      onError={(e) => {
                        e.target.src = "path/to/fallback/image.png";
                      }}
                      className='md:w-[80%] max-sm:w-[80%] max-sm:h-[40%] mx-auto md:h-auto md:mx-auto lg:w-[90%] lg:h-[90%] lg:border-2 lg:object-cover'
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="progression-btn flex max-sm:items-center max-sm:justify-center max-sm:-mt-44 max-sm:pb-10 max-sm:ml-0 ml-11 gap-2">
              {portfolioData.map((_, i) => (
                <div
                  key={i}
                  style={{ width: currentIndex === i ? '40px' : '16px' }}
                  className={`${
                    currentIndex === i ? 'bg-[#FD4755]' : 'border-2 border-black'
                  } h-3 rounded-[5px] m`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSlider;