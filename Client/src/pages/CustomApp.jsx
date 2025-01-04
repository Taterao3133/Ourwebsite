import { FaGreaterThan } from 'react-icons/fa'
import customapp from '../images/custom-page-header.svg'
import homemobile from '../images/homemobile.svg'
import heartrate from '../images/heart-rate 1.svg'
import education from '../images/education-apps.svg'
import ecommerce from '../images/ecommerce1.svg'
import consultation from '../images/consultation.svg'
import PortfolioSlider from '../components/utils/PortfolioSlider'

function CustomApp() {
  return (
    <div className="cust_app">
      <div className="about-sec  max-sm:h-auto lg:h-[620px] md:h-auto max-sm:justify-center max-sm:items-center w-full  lg:px-8 xl:px-20 bg-gradient-to-b from-[#FFFFFF] to-[#e3fbd4]">
        <div className="lg:grid-cols-2 lg:pb-5 lg:grid pt-20 md:mx-auto  max-sm:mx-4 lg:space-x-6 xl:space-x-32">
          <div className="lf_cnt font-roboto-serif md:px-7 xl:px-7 lg:px-0 max-lg:text-center xl:mt-16">
            <h2 className="font-medium max-sm:text-xl lg:text-[40px] md:text-4xl text-[#484DA9]">Elevate Your Business with Custom App Development by TechnoNextGenSolutions</h2>
            <p className="font-medium lg:text-lg md:text-base max-sm:text-base max-md:px-9  text-[#0C3461] mt-4">TechnoNextGenSolutions inventory management apps are here to transform the way you manage and track your inventory. 
            Trust us to help you maintain accurate inventory records, streamline order management, 
            and ultimately boost your business's productivity and profitability through efficient inventory management</p>

            <div className="bt flex max-sm:mx-auto cursor-pointer  mt-7 md:mx-auto lg:mx-0 max-sm:w-[55%] max-sm:h-14 w-64  h-14 border-2 border-[#000000]  rounded-[40px]">
              <button className='text-xl max-sm:text-base max-sm:px-8 text-[#000000] font-medium font-roboto my-auto mx-auto flex'>GET STARTS <FaGreaterThan className=" mt-[4px] ml-2 text-[#000000]"/>  </button>
            </div>
          </div>
           

          <div className="rt_cnt md:mt-10 md:pb-8 ">
            <img src={customapp} alt="" className='lg:h- md:h-auto md:w-3/6 md:mx-auto lg:h-auto lg:w-[80%]' />
          </div>
        </div>

          
      </div>
      {/* client-trust page */}
      <div className="client_page text-center lg:w-3/6 xl:w-2/6 lg:mx-auto pb-[80px]">
        <h2 className='font-roboto-serif font-medium text-[40px] md:text-4xl max-sm:text-xl text-[#E13535] pt-[80px]'>Clients Trust TechnoNextGenSolutions for Their App Development Needs</h2>
        <p className='font-roboto-serif text-lg md:text-base text-[#302F68] lg:mt-7 md:mt-5 md:px-12' >We believe in delivering excellence through cutting-edge design and development.
           Our team of experts is committed to pushing the boundaries of technology</p>
      </div>

      <div className="future bg-[#F2E4E066] h-auto w-full pt-10 xl:px-20 lg:px-8 pb-7">
        <h2 className='text-[#0C3461] font-roboto-serif font-medium text-[40px] md:text-4xl max-sm:text-xl text-center'> Features that makes <br /> app different!</h2>
        <p className='font-roboto-serif font-normal text-[#5955A1] xl:pt-5 md:text-base max-sm:text-base md:mt-5 lg:text-lg text-center xl:px-64'>"TechnoNextGenSolutions excels in creating innovative 
          solutions that set your app apart from the competition,ensuring it stands out distinctly."</p>

          <div className="cols md:flex  mx-auto mt-7">
            <div className="cl1 w-2/5 h-auto text-right justify-end place-items-end  lg:p-4 lg:pt-7">
            {/* cl1 */}
              <div className="crcle bg-[#D9DFE3] w-[80px] h-[80px] rounded-[80%]">
                <img src={heartrate} alt=""  className=' mx-auto py-3'/>
              </div>
              
              <h3 className='font-roboto-serif font-medium lg:text-lg text-[#0C3461] lg:mt-2'>Healthcare Apps</h3>
              <p className='font-roboto-serif font-normal text-base text-[#302F68]'>We've crafted healthcare apps that enhance patient care, streamline medical processes,
                 and improve the overall healthcare experience</p>

              <div className="crcle bg-[#D9DFE3] w-[80px] h-[80px] rounded-[80%] mt-6">
                <img src={consultation} alt="" className=' mx-auto py-4' />
              </div>
              <h3 className='font-roboto-serif font-medium lg:text-lg text-[#0C3461] lg:mt-2'>Consultation Apps</h3>
              <p className='font-roboto-serif font-normal text-base text-[#302F68]'>Our consultation apps empower professionals and service 
                providers to connect with clients, foster growth, and boost brand recognition</p>
             
              
            </div>
            {/* cl2 */}
            <div className="cl2 w-[17%]  h-auto">
              <img src={homemobile} alt="" className='mx-auto  xl:py-0 lg:mt-14 xl:mt-0' />
            </div>
            {/* cl3 */}
            <div className="cl3 w-2/5 h-auto  lg:p-4 lg:pt-7">
              <div className="crcle bg-[#D9DFE3] w-[80px] h-[80px] rounded-[80%]">
                <img src={education} alt="" className=' mx-auto py-4' />
              </div>
              <h3 className='font-roboto-serif font-medium lg:text-lg text-[#0C3461] lg:mt-2'>Hatting Applications</h3>
              <p className='font-roboto-serif font-normal text-base text-[#302F68]'>We've developed chat solutions for web and mobile apps, offering advanced 
                features, real-time communication, and immersive user experiences.</p>

              <div className="crcle bg-[#D9DFE3] w-[80px] h-[80px] rounded-[80%] lg:mt-6">
                <img src={ecommerce} alt="" className=' mx-auto py-4' />
              </div>
              <h3 className='font-roboto-serif font-medium lg:text-lg text-[#0C3461] lg:mt-2'>E-commerce Apps</h3>
              <p className='font-roboto-serif font-normal text-base text-[#302F68]'>Our e-commerce apps enable businesses to establish an online 
                presence, manage product listings, and facilitate seamless transactions</p>
            </div>

          </div>
      </div>
{/* ================= */} 
      <div className="about-sec  max-sm:h-auto lg:h-auto max-sm:justify-center max-sm:items-center w-full   lg:px-8 xl:px-20 bg-gradient-to-b from-[#B7D9F9CC] to-[#B7D9F9CC]">
        <div className="lg:grid-cols-2 xl:pb-16 lg:pb-5 lg:grid md:pt-8 lg:pt-20 md:mx-auto  max-sm:mx-4">
          <div className="lf_cnt">
            <img src={customapp} alt="" className='lg:w-[80%] xl:w-[70%] h-auto md:mx-auto  ' />
          </div>
          <div className="rt_cnt font-roboto-serif md:px-8 lg:px-0 max-lg:text-center md:mt-5 xl:mt-8">
            <h2 className="font-medium xl:text-[40px] md:text-4xl max-sm:text-xl lg:text-[37px] text-[#484DA9]">Experience the Difference: Custom App Development with TechnoNextGenSolutions</h2>
            <p className="font-medium lg:text-lg font-roboto-serif text-[#0C3461] mt-4">Our journey in app development has been marked by a dedication 
              to creating tailored solutions that meet the precise requirements of our clients. As we look ahead, we are excited about 
              the opportunities to continue innovating, collaborating, and making a meaningful impact on businesses across various industries. 
              Together, we'll shape the future of app development and empower businesses to thrive in the digital era. provides an overview of the diverse.</p>

            <div className="bt flex max-sm:mx-auto cursor-pointer  mt-7 md:mx-auto lg:mx-0 max-sm:w-[55%] max-sm:h-14 w-64  h-14 border-2 bg-[#3F36CD]  rounded-[40px]">
              <button className='text-xl max-sm:text-base max-sm:px-8 text-[#fafafa] font-medium font-roboto my-auto mx-auto flex'>Request a Quote <FaGreaterThan className=" mt-[4px] ml-2 text-[#fbfafa]"/>  </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* portfolio */}
      <PortfolioSlider/>


    </div>
  )
}

export default CustomApp