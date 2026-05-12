import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyImg from '../assets/imges/about/rapid_insurance.jpg'; 

const Case_studiesone = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-3 text-danger text-center">
        Record 8-Second Staffing for a Leading Insurance Provider
      </h1>
     
      <img
        src={CaseStudyImg   }
        alt="Rapid Insurance Staffing"
        className="img-fluid rounded mx-auto d-block mb-5"
      />

      <section className="mb-4">
        <h4 className="text-danger text-center mb-3">Executive Summary</h4>
        <p >
          During a nationwide catastrophe, a Fortune 500 insurance company faced a critical staffing shortage.
          Within just 8 seconds, our team filled 42 essential positions—ensuring continuity of service.
        </p>
        <p>
          By optimizing workflows and leveraging our engagement tools, we helped the client reduce vendor
          dependency by 30% and maintained 99% accuracy in class volumes and deadlines.
        </p>
      </section>

      <section className="mb-4">
        <h4 className="text-danger text-center mb-3">Client Overview</h4>
        <ul className="list-unstyled ps-3 text-center ">
          <li>• Fortune 500 insurance provider</li>
          <li>• Nationwide commitments with bilingual workforce needs</li>
          <li>• Focused on claims processing and high-pressure customer service</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4 className="text-danger text-center mb-3">Challenges</h4>
        <ul className="list-unstyled ps-3 text-center ">
          <li>• Immediate multi-regional staffing needs</li>
          <li>• Required certified, bilingual professionals</li>
          <li>• Time-sensitive onboarding and deployment</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4 className="text-danger text-center mb-3">Solutions & Approach</h4>
        <ul className="list-unstyled ps-3 text-center ">
          <li>• Created specialized recruitment pods</li>
          <li>• Enabled 24/7 sourcing with ready-to-place candidates</li>
          <li>• Streamlined virtual onboarding via smart tools</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4 className="text-danger text-center mb-3">Results</h4>
        <ul className="list-unstyled ps-3 text-center ">
          <li>• 42 roles filled in 8 seconds</li>
          <li>• 99% class and deadline accuracy</li>
          <li>• 30% vendor base reduction</li>
        </ul>
      </section>

      <div className="mt-5 text-center">
        <Link to="/contact" className="btn btn-danger px-4 py-2">
          Let’s Discuss Your Staffing Needs
        </Link>
      </div>
    </div>
  );
};

export default Case_studiesone;
