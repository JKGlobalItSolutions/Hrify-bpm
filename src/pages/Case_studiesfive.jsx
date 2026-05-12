import React from 'react';
import teamworkImg from '../assets/imges/about/teams_collap.jpg'
import factoryImg from '../assets/imges/about/manufacturing_site.jpg'

const Case_studiesfive = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-danger mb-2">
        Rapid Workforce Deployment for a Global Manufacturer
      </h2>
     

      <img
        src={teamworkImg}
        alt="Team Collaboration"
        className="img-fluid rounded shadow w-50 mb-4 mx-auto d-block"
      />

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-danger text-center">Executive Summary</h5>
          <p>
            When a global manufacturing giant faced unprecedented demand across their production facilities,
            Namma People stepped in with precision hiring solutions. We rapidly sourced and onboarded
            over 300 specialized personnel across engineering, logistics, and QA departments.
          </p>
          <p>
            Our streamlined strategy, supported by advanced hiring technologies and dedicated teams,
            ensured business continuity and boosted the client’s operational efficiency during a crucial expansion phase.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <img src={factoryImg} alt="Manufacturing Site" className="card-img-top object-fit-cover" />
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Client Overview</h5>
              <p>
                A multinational manufacturer with production facilities across the Americas and Asia,
                specializing in precision tools, machinery, and electronic components.
              </p>
              <p>
                Their supply chain demands require real-time workforce scaling and cross-border staffing expertise
                to meet customer delivery timelines and uphold product quality.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
          <div className="card-body" style={{ fontFamily: 'Inter, sans-serif' }}>
  <h5 className="card-title text-danger text-center fw-bold mb-3">Namma People’s Approach</h5>
  <ul className="list-unstyled text-muted">
    <li>• Developed geo-targeted job campaigns focusing on high-skill labor zones to ensure localized efficiency.</li>
     <br />
     <li>• Leveraged internal ATS and AI-powered sourcing tools to match candidates with role requirements precisely.</li>
     <br />
   
    <li>• Established temporary training hubs near both San Jose and Ewing locations to fast-track onboarding.</li>
    <br />
    
    <li>• Provided 24/7 recruitment coordination in sync with the client’s HR team for real-time updates.</li>
    <br />
    
    <li>• Implemented performance analytics dashboards to track recruitment KPIs and candidate quality metrics.</li>
    <br />
    
    <li>• Maintained a strong feedback loop with hiring managers to continuously optimize the sourcing process.</li>
    <br />
    <li>• Deployed multilingual recruiters to support culturally diverse candidate pools in each region.</li>
  </ul>
</div>

          </div>
        </div>
      </div>

      <div className="card shadow-sm mb-5">
        <div className="card-body">
          <h5 className="card-title text-danger text-center">Impact Delivered</h5>
          <p>✅ 300+ workforce deployed in record time across 5 global facilities</p>
          <p>✅ Improved shift productivity by 33%</p>
          <p>✅ Reduced external staffing costs by 28%</p>
          <p>✅ Enhanced brand perception as an employer of choice</p>
        </div>
      </div>
    </div>
  );
};

export default Case_studiesfive;
