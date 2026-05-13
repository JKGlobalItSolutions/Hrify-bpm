import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';

// service
import EngineeringManufacturingPage from './pages/EngineeringManufacturingPage ';
import Staffaugmentation from './pages/Staffaugmentation';
import Managedservices from './pages/Managedservices';
import Hiretraindeploy from './pages/Hiretraindeploy';
import Healthcarestaffing from './pages/Healthcarestaffing ';

// about us

import Whoweare from './pages/Whoweare';
import Industries from './pages/Industries';
import Blogs from './pages/Blogs';
import Casestudies from './pages/Casestudies';


import Case_studiesone from './pages/Case_studiesone';
import Case_studiestwo from './pages/Case_studiestwo';
import Case_studiesthree from './pages/Case_studiesthree';
import Case_studiesfive from './pages/Case_studiesfive';
import Case_studiessix from './pages/Case_studiessix';





import Blogspageone from './pages/Blogspageone';
import Blogspagetwo from './pages/Blogspagetwo';
import Blogspagethree from './pages/Blogspagethree';



//  carrer

import Hiretalent from './pages/Hiretalent';
import FindAjob from './pages/FindAjob';

import './App.css';

// contact

import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
    {/* <Router  > */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />

        {/* services  */}
        <Route path="/services/engineering-manufacturing" element={<EngineeringManufacturingPage />} />
        <Route path="/services/Staff-Augmentation" element={<Staffaugmentation />} />
        <Route path="/services/Managed-Services" element={<Managedservices />} />
        <Route path="/services/Hire-train-deploy" element={<Hiretraindeploy />} />
        <Route path="/services/Health-care-staffing" element={<Healthcarestaffing />} />

        {/* about  */}

        <Route path="/services/Who-we-are" element={<Whoweare />} />
        <Route path="/services/Industries" element={<Industries />} />
        <Route path="/services/Blogs" element={<Blogs />} />
        <Route path="/services/Casestudies" element={<Casestudies />} />

        {/* casestudie inside  */}

        <Route path="/services/Case_studiesone" element={<Case_studiesone />} />
        <Route path="/services/Case_studiestwo" element={<Case_studiestwo />} /> 
        <Route path="/services/Case_studiethree" element={<Case_studiesthree />} />
        <Route path="/services/Case_studiesfive" element={<Case_studiesfive />} />
        <Route path="/services/Case_studiessix" element={<Case_studiessix />} />


        {/* blogs inside  */}

        <Route path="/services/Blogs_one" element={<Blogspageone />} />
        <Route path="/services/Blogs_two" element={<Blogspagetwo />} />
        <Route path="/services/Blogs_three" element={<Blogspagethree />} />







        {/* carrear */}

        <Route path="/Careers/Hiretalent" element={<Hiretalent />} />
        <Route path="/Careers/Find-a-job" element={<FindAjob />} />


        {/* contact */}

        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Footer />
    {/* </Router> */}
    </HashRouter>
  );
}

export default App;
