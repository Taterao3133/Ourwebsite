import React from 'react';
import caricon from '../../images/car-icon.svg';

const CarAnimation = () => {
  return (
    <div className="cr bg-[#8A9EE0] w-full h-[60px] relative overflow-hidden">
      <div className="car w-[100px] h-[50px] absolute bottom-0 animate-moveCar">
        <img src={caricon} alt="Car" className="w-full h-full mt-[10px]" />
        <div className="smoke relative left-[-20px] top-[-15px] w-4 h-4 bg-[#5a5858] rounded-full opacity-50 animate-smoke"></div>
        <div className="smoke relative left-[-25px] top-[-20px] w-3 h-3 bg-[#656363] rounded-full opacity-40 animate-smoke"></div>
        <div className="smoke relative left-[-30px] top-[-25px] w-2 h-2 bg-[#767676] rounded-full opacity-30 animate-smoke"></div>
      </div>
    </div>
  );
};

export default CarAnimation;
