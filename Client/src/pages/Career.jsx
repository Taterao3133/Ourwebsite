import React from 'react'
import { GoDotFill } from 'react-icons/go'

import nodejsicon from '../images/nodejs-icon.svg'
import expressicon from '../images/express-icon.svg'
import reacticon from '../images/react-icon.svg'
import careericon from '../images/career-icon.svg'
import appleicon from '../images/apple-icon.svg'
import androidicon from '../images/android-icon.svg'
import figmaicon from '../images/figma-icon.svg'

import tableticon from '../images/tablet-icon.svg'
import { Link } from 'react-router-dom'


function Career() {
  return (
    <div className='career'>
        <div className="w-full h-auto bg-[#fff]">
            <div className="txt flex  pt-14 justify-center items-center space-x-5 text-center">
                <h2 className='text-[#E7A548] text-lg max-sm:text-base font-roboto-serif font-medium'><Link to='/'> Home</Link>  </h2>
                <div className="flex">
                <GoDotFill className="text-[#E7A548] mt-1" />
                <h4 className='text-[#E7A548] underline text-lg max-sm:text-base ml-2 font-roboto-serif font-medium'>About Us</h4>
                </div>
            </div>
            <div className="bx justify-center items-center w-72  h-auto mx-auto mt-7">
              <h1 className='text-[40px]  max-sm:text-2xl font-roboto-serif font-medium  text-center bg-clip-text text-transparent w-72  bg-gradient-to-r from-[#F471FF] via-[#FA8166] to-[#AAD2E2]'>Job Opening</h1>

            </div>
            <div className="txt-2 text-center max-sm:mx-4">
                <p className=' text-lg max-sm:text-base font-roboto-serif font-medium underline text-[#FD4755]  max-sm:mt-8 lg:mt-24 '>Career</p>
                <h1 className='text-[40px] max-sm:text-2xl font-roboto-serif font-medium mt-5'>Let's Join Our Team</h1>
                <h3 className='text-lg max-sm:text-base font-roboto-serif font-medium mt-3'>Explore Exciting Career Opportunities at TechnoNextGenSolutions.</h3>
            </div>
            {/* career boxes */}
            <div className="bxs grid lg:grid-cols-3 lg:mx-20 md:space-y-3 max-sm:space-y-3  mt-10 lg:gap-3 mb-20">
               <div className="b-c border-2 w-full md:w-4/6 lg:w-[100%] lg:h-auto md:mx-auto max-sm:w-5/6 max-sm:mx-auto  max-sm:pl-4 h-auto pl-6 rounded-br-[32px] rounded-lg shadow-lg">
               <h3 className="text-[#0D4E57] max-sm:text-center max-sm:mx-auto pt-8 font-roboto-serif max-sm:text-lg text-xl font-semibold">Flutter Developement</h3>
                    <div className="flex text-[14px] max-sm:text-base max-sm:justify-center max-sm:items-center text-[#4F5D81] max-sm:mt-2 mt-3 space-x-3">
                        <p>ReactJs</p> <p>|</p>
                        <p>NodeJs</p> <p>|</p>
                        <p>Express</p>
                    </div>
                    <div className="icns space-x-3 max-sm:justify-center max-sm:items-center flex  mt-3">
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={androidicon} alt="" className="relative lg:w-10 lg:h-10"  />
                            </div>
                        </div>
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={appleicon} alt="" className="relative lg:w-10 lg:h-10" />
                            </div>
                        </div>
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl   max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={tableticon} alt="" className="relative lg:w-10 lg:h-10" />
                            </div>
                        </div>
                    </div>
                    <h2 className='font-roboto-serif font-normal max-sm:text-base text-[17px] mt-3'>1+ Years <br />Experience</h2>
                    <div className="flex mt-3 justify-between pr-7 lg:mt-5 mb-3">
                      <img src={careericon} alt="" className='m max-sm:w-14 mt-auto max-sm:h-14 w-12 h-12' />
                      <button className='bg-[#3F36CD]  max-sm:w-auto max-sm:px-5 max-sm:text-lg md:w-44 md:h-14 lg:px-8 lg:w-auto lg:py-3 text-[16px] text-white rounded-3xl mt-4'>Apply Soon </button>
                    </div>
               </div>
               <div className="b-c border-2 w-full md:w-4/6 lg:w-[100%] lg:h-auto md:mx-auto max-sm:w-5/6 max-sm:mx-auto  max-sm:pl-4 h-auto pl-6 rounded-br-[32px] rounded-lg shadow-lg">
               <h3 className="text-[#0D4E57] max-sm:text-center max-sm:mx-auto pt-8 font-roboto-serif max-sm:text-lg text-xl font-semibold">Web Development</h3>
                    <div className="flex text-[14px] max-sm:text-base max-sm:justify-center max-sm:items-center text-[#4F5D81] max-sm:mt-2 mt-3 space-x-3">
                        <p>ReactJs</p> <p>|</p>
                        <p>NodeJs</p> <p>|</p>
                        <p>Express</p>
                    </div>
                    <div className="icns space-x-3 max-sm:justify-center max-sm:items-center flex  mt-3">
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={reacticon} alt="" className="relative lg:w-10 lg:h-10"  />
                            </div>
                        </div>
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={nodejsicon} alt="" className="relative lg:w-10 lg:h-10" />
                            </div>
                        </div>
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl   max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={expressicon} alt="" className="relative lg:w-10 lg:h-10" />
                            </div>
                        </div>
                    </div>
                    <h2 className='font-roboto-serif font-normal max-sm:text-base text-[17px] mt-3'>1+ Years <br />Experience</h2>
                    <div className="flex mt-3 justify-between pr-7 lg:mt-5 mb-3">
                      <img src={careericon} alt="" className='m max-sm:w-14 mt-auto max-sm:h-14 w-12 h-12' />
                      <button className='bg-[#3F36CD]  max-sm:w-auto max-sm:px-5 max-sm:text-lg md:w-44 md:h-14 lg:px-8 lg:w-auto lg:py-3 text-[16px] text-white rounded-3xl mt-4'>Apply Soon </button>
                    </div>
               </div>
               <div className="b-c border-2 w-full md:w-4/6 lg:w-[100%] lg:h-auto md:mx-auto max-sm:w-5/6 max-sm:mx-auto  max-sm:pl-4 h-auto pl-6 rounded-br-[32px] rounded-lg shadow-lg">
               <h3 className="text-[#0D4E57] max-sm:text-center max-sm:mx-auto pt-8 font-roboto-serif max-sm:text-lg text-xl font-semibold">Intern</h3>
                    <div className="flex text-[14px] max-sm:text-base max-sm:justify-center max-sm:items-center text-[#4F5D81] max-sm:mt-2 mt-3 space-x-3">
                        <p>Figma</p> <p>|</p>
                        <p>NodeJs</p> <p>|</p>
                        <p>Express</p>
                    </div>
                    <div className="icns space-x-3 max-sm:justify-center max-sm:items-center flex  mt-3">
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={figmaicon} alt="" className="relative lg:w-10 lg:h-10"  />
                            </div>
                        </div>
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={nodejsicon} alt="" className="relative lg:w-10 lg:h-10" />
                            </div>
                        </div>
                        <div className="otr max-sm:w-16 max-sm:h-16 w-16 h-16 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl   max-sm:w-12 max-sm:h-12 w-14 h-14 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={expressicon} alt="" className="relative lg:w-10 lg:h-10" />
                            </div>
                        </div>
                    </div>
                    <h2 className='font-roboto-serif font-normal max-sm:text-base text-[17px] mt-3'>1+ Years <br />Experience</h2>
                    <div className="flex mt-3 justify-between pr-7 lg:mt-5 mb-3">
                      <img src={careericon} alt="" className='m max-sm:w-14 mt-auto max-sm:h-14 w-12 h-12' />
                      <button className='bg-[#3F36CD]  max-sm:w-auto max-sm:px-5 max-sm:text-lg md:w-44 md:h-14 lg:px-8 lg:w-auto lg:py-3 text-[16px] text-white rounded-3xl mt-4'>Apply Soon </button>
                    </div>
               </div>
              </div>
            
        </div>
    </div>
  )
}

export default Career