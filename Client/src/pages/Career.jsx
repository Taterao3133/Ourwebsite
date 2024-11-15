import React from 'react'
import { GoDotFill } from 'react-icons/go'

import nodejsicon from '../images/nodejs-icon.svg'
import expressicon from '../images/express-icon.svg'
import reacticon from '../images/react-icon.svg'
import careericon from '../images/career-icon.svg'
import appleicon from '../images/apple-icon.svg'
import androidicon from '../images/android-icon.svg'
import figmaicon from '../images/figma-icon.svg'
import photoshopicon from '../images/photshop-icon.svg'
import adobeicon from '../images/adobe-icon.svg'
import tableticon from '../images/tablet-icon.svg'
import { Link } from 'react-router-dom'


function Career() {
  return (
    <div className='career'>
        <div className="w-full h-auto bg-[#fff]">
            <div className="txt flex  pt-14 justify-center items-center space-x-5 text-center">
                <h2 className='text-[#E7A548] text-lg font-roboto-serif font-medium'><Link to='/'> Home</Link>  </h2>
                <div className="flex">
                <GoDotFill className="text-[#E7A548] mt-1" />
                <h4 className='text-[#E7A548] underline text-lg ml-2 font-roboto-serif font-medium'>About Us</h4>
                </div>
            </div>
            <div className="bx justify-center items-center w-72  h-auto mx-auto mt-7">
              <h1 className='text-[40px] font-roboto-serif font-medium  text-center bg-clip-text text-transparent w-72  bg-gradient-to-r from-[#F471FF] via-[#FA8166] to-[#AAD2E2]'>Job Opening</h1>

            </div>
            <div className="txt-2 text-center">
                <p className=' text-lg font-roboto-serif font-medium underline text-[#FD4755] mt-24 '>Career</p>
                <h1 className='text-[40px] font-roboto-serif font-medium mt-5'>Let's Join Our Team</h1>
                <h3 className='text-lg font-roboto-serif font-medium mt-3'>Explore Exciting Career Opportunities at TechWebLabs.</h3>
            </div>
            {/* career boxes */}
            <div className="bxs grid grid-cols-3 mx-20 mt-10 gap-3 mb-20">
               <div className="b-c border-2 w-full h-auto pl-6 rounded-br-[32px] rounded-lg shadow-lg">
               <h3 className="text-[#0D4E57] pt-8 font-roboto-serif text-2xl font-semibold">Web Development</h3>
                    <div className="flex text-xl text-[#4F5D81] mt-3 space-x-3">
                        <p>ReactJs</p> <p>|</p>
                        <p>NodeJs</p> <p>|</p>
                        <p>Express</p>
                    </div>
                    <div className="icns space-x-3 flex mt-3">
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={reacticon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={nodejsicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={expressicon} alt="" className="relative" />
                            </div>
                        </div>
                    </div>
                    <h2 className='font-roboto-serif font-normal text-xl mt-3'>1+ Years <br />Experience</h2>
                    <div className="flex mt-3 justify-between pr-7 mb-3">
                      <img src={careericon} alt="" />
                      <button className='bg-[#3F36CD] w-44 h-14 text-2xl text-white rounded-3xl mt-4'>Apply Soon </button>
                    </div>
               </div>
               <div className="b-c border-2 w-full h-auto pl-6 rounded-br-[32px] rounded-lg shadow-lg">
               <h3 className="text-[#0D4E57] pt-8 font-roboto-serif text-2xl font-semibold">Web Development</h3>
                    <div className="flex text-xl text-[#4F5D81] mt-3 space-x-3">
                        <p>ReactJs</p> <p>|</p>
                        <p>NodeJs</p> <p>|</p>
                        <p>Express</p>
                    </div>
                    <div className="icns space-x-3 flex mt-3">
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={reacticon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={nodejsicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={expressicon} alt="" className="relative" />
                            </div>
                        </div>
                    </div>
                    <h2 className='font-roboto-serif font-normal text-xl mt-3'>1+ Years <br />Experience</h2>
                    <div className="flex mt-3 justify-between pr-7 mb-3">
                      <img src={careericon} alt="" />
                      <button className='bg-[#3F36CD] w-44 h-14 text-2xl text-white rounded-3xl mt-4'>Apply Soon </button>
                    </div>
               </div>
               <div className="b-c border-2 w-full h-auto pl-6 rounded-br-[32px] rounded-lg shadow-lg">
               <h3 className="text-[#0D4E57] pt-8 font-roboto-serif text-2xl font-semibold">Web Development</h3>
                    <div className="flex text-xl text-[#4F5D81] mt-3 space-x-3">
                        <p>ReactJs</p> <p>|</p>
                        <p>NodeJs</p> <p>|</p>
                        <p>Express</p>
                    </div>
                    <div className="icns space-x-3 flex mt-3">
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={reacticon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={nodejsicon} alt="" className="relative" />
                            </div>
                        </div>
                        <div className="otr w-20 h-20 bg-[#4F98C1] rounded-full flex items-center justify-center">
                            <div className="mdl w-16 h-16 bg-[#D9D9D9] border-4  rounded-full flex items-center justify-center backdrop-blur-xl shadow-[0_1px_3px_rgba(217, 217, 217, 1)]">
                                <img src={expressicon} alt="" className="relative" />
                            </div>
                        </div>
                    </div>
                    <h2 className='font-roboto-serif font-normal text-xl mt-3'>1+ Years <br />Experience</h2>
                    <div className="flex mt-3 justify-between pr-7 mb-3">
                      <img src={careericon} alt="" />
                      <button className='bg-[#3F36CD] w-44 h-14 text-2xl text-white rounded-3xl mt-4'>Apply Soon </button>
                    </div>
               </div>
               
            </div>

            
        </div>
    </div>
  )
}

export default Career