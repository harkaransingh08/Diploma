import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
import Service from './components/Service';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import AustraliaStudy from './components/Study/AustraliaStudy';
import CanadaStudy from './components/Study/CanadaStudy';
import UsaStudy from './components/Study/UsaStudy';
import Ukstudy from './components/Study/Ukstudy';
import EuropeStudy from './components/Study/EuropeStudy';
import SingaporeStudy from './components/Study/SingaporeStudy';
import ViewUniversity from './components/Study/University/ViewUniverty';

export default function App() {
  return (
    <div className='bg-[#ffffff]'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/student-services' element={<Service/>}/>
          <Route path='/about-us' element={<About/>}/>
          <Route path='/blog' element={<Blogs/>}/>  
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/study-visa/australia' element={<AustraliaStudy/>}/>
          <Route path='/study-visa/canada' element={<CanadaStudy/>}/>
          <Route path='/study-visa/usa' element={<USAStudy/>}/>
          <Route path='/study-visa/uk' element={<UKStudy/>}/>
          <Route path='/study-visa/europe' element={<EuropeStudy/>}/>
          <Route path='/study-visa/singapore' element={<SingaporeStudy/>}/>

          {/* Fixed spelling in param name for consistency */}
          <Route path='/university/:university_name' element={<ViewUniversity/>}/>

          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}