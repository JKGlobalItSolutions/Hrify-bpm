import React from 'react';
import { Link } from 'react-router-dom';

import img from '../assets/imges/about/casestudieslastimg.jpg'


const CaseStudiessix = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-3 text-danger text-center">130+ Hires in 3 Weeks: How Namma People Delivered Under Pressure for a Financial Services Leader</h1>
   

      <img src={img} alt="Financial Services Case Study" className="img-fluid rounded  w-50 mx-auto d-block mb-4" />

      <h4 className="text-danger text-center">Executive Summary</h4>
      <p>
        A leading U.S.-based financial services provider partnered with Namma People to address an urgent hiring need.
        Faced with tight timelines and a competitive labor market, they required 130+ Retirement Plan Service Representatives within three weeks and over 200 full-time employees within eight months.
      </p>
      <p>
        The outcome was an outright success. Learn how Namma People strategically solved the issue and secured the #1 ranking across all performance metrics. See how we demonstrated what a reliable and confident workforce partner can achieve under pressure, going above and beyond every expectation.
      </p>

      <h4 className="text-danger text-center">Client Overview</h4>
      <ul>
        <li>One of the largest financial services providers in the U.S.</li>
        <li>Specializes in retirement plan services and customer support.</li>
        <li>Requires bilingual professionals to meet client needs across key regions.</li>
      </ul>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-danger text-center">Challenge</h5>
          <p>
            Tight timelines and the need for bilingual talent across key regions made this a high-pressure recruitment challenge. The client needed to quickly scale their workforce to meet business goals while maintaining high-quality service.
          </p>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-danger text-center">Results</h5>
          <p>
            ✅ 130+ Retirement Plan Service Representatives hired in 3 weeks.<br />
            ✅ 200+ full-time employees onboarded within 8 months.<br />
            ✅ #1 ranking across all performance metrics.<br />
            ✅ Delivered under extreme pressure with superior client satisfaction.
          </p>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link to="/contact" className="btn btn-danger px-4">
          Let’s Talk About Your Workforce Needs
        </Link>
      </div>
    </div>
  );
};

export default CaseStudiessix;
