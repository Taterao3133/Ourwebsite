
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import AboutUs from '../../pages/AboutUs'
import Career from '../../pages/Career'
import PrivacyPolicy from '../../pages/PrivacyPolicy'
import TermsandConditions from '../../pages/TermsandConditions'
import ContactUs from '../../pages/ContactUs'
import ScrollToTop from '../../Utils/ScrolltoTop'
import CustomApp from '../../pages/CustomApp'

 

function RouteConfig() {
  return (
    <>
     <ScrollToTop />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/career" element={<Career />} />  
      <Route path="/customapp" element={<CustomApp />} />  
      
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/termsandcondition" element={<TermsandConditions />} />


    </Routes>
    
    </>
  )
}

export default RouteConfig