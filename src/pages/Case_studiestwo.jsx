import React from 'react';
import ExecutiveSummary from '../assets/imges/about/Executive_Summary.jpg'; 


const Case_studiestwo = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center text-danger mb-4">
                Namma People’s Targeted Hiring Strategy for a Leading US Telecom Provider
            </h2>
          

            <div className="card mb-4 shadow-sm">
            <img src={ExecutiveSummary} className="card-img-top rounded w-50 " alt="Telecom Recruitment Success" />
                <div className="card-body">
                    <h5 className="card-title text-danger">Executive Summary</h5>
                    <p className="card-text">
                        A top-tier wireless telecommunications provider in the United States partnered with <strong>Namma People</strong> to overcome an ambitious hiring challenge.
                        Within just <strong>three weeks</strong>, 350+ skilled professionals were onboarded across two mission-critical locations:
                        <strong> San Jose, Costa Rica</strong> and <strong>Ewing, New Jersey</strong>.
                    </p>
                    <p className="card-text">
                        This agile hiring strategy helped position <strong>Namma People</strong> as the client’s #1 global BPO partner.
                    </p>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title text-danger ">Client Overview</h5>
                            <ul className="list-unstyled">
                                <li>📡 Industry: Wireless Telecommunications</li>
                                <li>👥 Subscribers: Over 100 million</li>
                                <li>🔌 Services: 4G LTE, 5G, broadband, mobile</li>
                                <li>🌎 Requirement: Bilingual, scalable hiring</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
  <div className="card h-100 border-1 shadow-sm">
    <div className="card-body">
      <h5 className="card-title text-center text-danger mb-4">Challenge</h5>
      <div>
        <p className="mb-2">⏱ <strong>Urgent multi-location hiring</strong></p>
        <p className="mb-2">🗣 <strong>Bilingual recruitment (EN/ES)</strong></p>
        <p className="mb-2">✅ <strong>Compliance + onboarding within 3 weeks</strong></p>
        <p className="mb-0">📊 <strong>SLA-bound operations in high-pressure zones</strong></p>
      </div>
    </div>
  </div>
</div>



            </div>

            <div className="card mb-4 shadow-sm">
  <div className="card-body">
    <h5 className="card-title text-danger text-center">Namma People’s Strategy</h5>
    <div>
      <p className="mb-2">✅ <strong>Custom bilingual talent pipelines</strong></p>
      <p className="mb-2">💻 <strong>Virtual interview hubs for speed</strong></p>
      <p className="mb-2">📈 <strong>Real-time dashboards for transparency</strong></p>
      <p className="mb-0">🎯 <strong>Pre-deployment orientation to reduce ramp-up time</strong></p>
    </div>
  </div>
</div>


            <div className="card mb-4 shadow-sm border-1">
                <div className="card-body">
                    <h5 className="card-title text-center text-danger mb-4">Results</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0">🚀 <strong>350+ professionals</strong> onboarded in 3 weeks</li>
                        <li className="list-group-item border-0">📌 <strong>100% target</strong> fulfillment</li>
                        <li className="list-group-item border-0">🏆 <strong>Ranked #1</strong> Global BPO Partner</li>
                        <li className="list-group-item border-0">⚙️ <strong>Boosted client agility</strong> during peak service load</li>
                    </ul>
                </div>
            </div>


            <div className="bg-light p-4 rounded shadow-sm">
                <h5 className="text-center text-danger">Conclusion</h5>
                <p className="text-center">
                    With the right people and process, even the tightest deadlines can become success stories.
                    <strong> Namma People</strong> delivers workforce solutions that are fast, focused, and future-ready.
                </p>
            </div>
        </div>
    );
};

export default Case_studiestwo;

