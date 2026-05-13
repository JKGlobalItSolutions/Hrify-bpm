import React from 'react';
import { Link } from 'react-router-dom';
import Engineeringrecuer from '../assets/imges/about/engineer_recuriment.jpg'; 


const Case_studiesthree = () => {
  return (
    <div className="container my-5">
      <h1 className="text-danger text-center mb-3">
        Hrify BPM’s Strategic Recruitment of HVAC, Plumbing, and Electrical Engineers
      </h1>
    

      <img
        src={Engineeringrecuer}
        alt="Engineering Recruitment"
        className="img-fluid rounded shadow mb-4 d-block mx-auto"
      />

      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-danger text-center">Executive Summary</h5>
          <p>
            A leading US-based energy and materials company partnered with <strong>Hrify BPM</strong> to tackle an urgent talent acquisition challenge.
          </p>
          <p>
            Within just three months, <strong>Hrify BPM</strong>’s expert hiring team successfully sourced and placed skilled HVAC, plumbing, and electrical design engineers—accelerating project timelines and optimizing workforce efficiency.
          </p>
          <p>
            By combining deep industry insights with agile recruiting methods, <strong>Hrify BPM</strong> earned recognition as the client’s top operations supplier, delivering beyond expectations with speed, accuracy, and commitment.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Client Overview</h5>
              <p>
                A U.S.-based pioneer in battery recycling and materials manufacturing, this client is focused on recovering high-demand resources like lithium, cobalt, and nickel.
              </p>
              <p>
                They are actively partnering with major automotive and tech companies while scaling rapidly to support global sustainability initiatives for electric vehicles and electronics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/contact" className="btn btn-danger px-4">
          Let’s Discuss Workforce Solutions
        </Link>
      </div>
    </div>
  );
};

export default Case_studiesthree;
