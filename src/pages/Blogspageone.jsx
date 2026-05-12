import React from 'react';
import { Link } from 'react-router-dom';
import Blogsimg1 from '../assets/imges/about/blogsonepage.jpg';
import Blogsimg2 from '../assets/imges/about/blogsonepage1.jpg';

const Blogspageone = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-3 text-danger text-center">Healing Healthcare Burnout and Turnover</h1>
      <p className="text-muted text-center">by user | Nov 20, 2024 | Blog | 30 comments</p>

      <img
        src={Blogsimg1}
        className="img-fluid rounded mb-4 d-block mx-auto"
        alt="Healthcare professionals"
        style={{ maxWidth: '50%', height: 'auto' }}
      />

      <h4 className="mt-4 text-danger text-center">How Staffing Agencies and Telehealth Can Help</h4>
      <p className="bg-danger bg-opacity-10 p-3 rounded">
        Burnout is pushing more professionals to leave, leaving hospitals struggling to provide care.
        According to the AAMC, the U.S. could be short up to <strong>86,000 physicians by 2034</strong>.
        McKinsey adds that <strong>1.1 million nurses will be needed by 2025</strong>.
        These shortages directly impact patients' lives and recovery.
      </p>

      <div className="card my-5 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Blogsimg2}
              alt="Telehealth illustration"
              className="img-fluid rounded-start h-100 object-fit-cover"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Technology's Role in Healthcare</h5>
              <p className="card-text">
                Telehealth and AI are totally shaking up how healthcare works. Doctors can now keep tabs on patients and even treat them from miles away—no waiting rooms, no stress. It’s smart, it’s efficient, and it takes a huge load off hospital teams without cutting corners on care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h5 className="mt-4 text-danger text-center">Namma People: Supporting the Shift</h5>
      <p className="bg-danger bg-opacity-10 p-3 rounded">
        With the increasing demand for flexible, remote care, <strong>Namma People</strong> helps connect hospitals
        with professionals skilled in telehealth. Our mission is to support both patient care and staff well-being
        through technology and human connection.
      </p>
      <p>
  When your team’s doing well, everyone wins—especially the patients. That’s why we’re all about keeping top talent around with flexible remote roles, smarter schedules, and real emotional support. Happy teams make healthier outcomes.
</p>


      <h4 className="mt-4 text-danger text-center">The Future of Healthcare Staffing</h4>
      <p className="bg-danger bg-opacity-10 p-3 rounded">
        As hospitals evolve, <strong>Namma People</strong> is here to help them find and retain the right talent—ensuring
        that caregivers and patients alike are cared for. Let’s build a sustainable, human-first future for healthcare.
      </p>

      <div className="mt-4 text-center">
        <Link to="/contact" className="btn btn-danger px-4 py-2">
          Contact Namma People Today
        </Link>
      </div>
    </div>
  );
};

export default Blogspageone;
