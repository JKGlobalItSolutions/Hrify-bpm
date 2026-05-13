import React from 'react';
import img from '../assets/imges/about/blok_img2.jpg';

const Case_studiestwo = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-danger mb-2">
        Hrify BPM’s Targeted Hiring Strategy for a Leading US Telecom Provider
      </h1>
    
      <div className="card mb-4 shadow-sm border-1">
        <div className="d-flex justify-content-center p-3">
          <img src={img} className="card-img-top rounded w-50" alt="Telecom Recruitment Success" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-danger text-center fw-bold">Executive Summary</h5>
          <p className="card-text text-muted">
            A top-tier wireless telecommunications provider in the United States partnered with <strong className="text-dark">Hrify BPM</strong> to overcome an ambitious hiring challenge.
            Within just <strong className="text-dark">three weeks</strong>, 350+ skilled professionals were onboarded across two mission-critical locations:
            <strong className="text-dark"> San Jose, Costa Rica</strong> and <strong className="text-dark">Ewing, New Jersey</strong>.
          </p>
          <p className="card-text text-muted">
            This agile hiring strategy helped position <strong className="text-dark">Hrify BPM</strong> as the client’s #1 global BPO partner.
          </p>
        </div>
      </div>


      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-danger">Client Overview</h5>
              <ul className="list-unstyled">
                <li>📡 Industry: Wireless Telecommunications</li>
                <li>👥 Subscribers: Over 100 million</li>
                <li>🔌 Services: 4G LTE, 5G, broadband, mobile</li>
                <li>🌎 Requirement: Bilingual, scalable hiring</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-danger">Challenge</h5>
              <ul className="list-unstyled">
                <li>⏱ Urgent multi-location hiring</li>
                <li>🗣 Bilingual recruitment (EN/ES)</li>
                <li>✅ Compliance + onboarding within 3 weeks</li>
                <li>📊 SLA-bound operations in high-pressure zones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-danger">Hrify BPM’s Strategy</h5>
          <ul>
            <li>✅ Custom bilingual talent pipelines</li>
            <li>💻 Virtual interview hubs for speed</li>
            <li>📈 Real-time dashboards for transparency</li>
            <li>🎯 Pre-deployment orientation to reduce ramp-up time</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-danger">Results</h5>
          <ul>
            <li>🚀 350+ professionals onboarded in 3 weeks</li>
            <li>📌 100% target fulfillment</li>
            <li>🏆 Ranked #1 Global BPO Partner</li>
            <li>⚙️ Boosted client agility during peak service load</li>
          </ul>
        </div>
      </div>

      <div className="bg-light p-4 rounded shadow-sm">
        <h5 className="text-center text-danger">Conclusion</h5>
        <p className="text-center">
          With the right people and process, even the tightest deadlines can become success stories.
          <strong> Hrify BPM</strong> delivers workforce solutions that are fast, focused, and future-ready.
        </p>
      </div>
    </div>
  );
};

export default Case_studiestwo;
