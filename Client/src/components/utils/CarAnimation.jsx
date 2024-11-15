import React from 'react';
import caricon from '../../images/car-icon.svg'; 


const CarAnimation = () => {
  return (
    <div className="cr bg-[#8A9EE0] w-full h-[60px] relative overflow-hidden">
    {/* Car container moves across the full width of the screen */}
    <div className="car w-[100px] h-[50px] absolute bottom-0 animate-moveCar">
      {/* Car Icon */}
      <img src={caricon} alt="Car" className="w-full h-full mt-[10px]" />

      {/* Smoke Effect */}
      <div className="smoke relative top-[-20px] right-[-10px] w-4 h-4 bg-[#5a5858] rounded-full opacity-50 animate-smoke"></div>
      <div className="smoke relative top-[-25px] right-[-10px] w-3 h-3 bg-[#656363] rounded-full opacity-50 animate-smoke"></div>
    </div>
     
    
  </div>
  );
};

export default CarAnimation;
