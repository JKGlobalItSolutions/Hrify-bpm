import React from 'react';

import aboutimg_md from "../assets/chair.png"


// banner
import howwearebanner from '../assets/imges/home/howwearebanner.jpg'


const Whoweare = () => {


  const metrics = [
    { title: '4000+', desc: 'Employees Worldwide' },
    { title: '120+', desc: 'Countries Covered' },
    { title: '22k+', desc: 'Jobs Created Globally' },
    { title: '75%', desc: 'Diverse Workforce Representation' },
    { title: '70%', desc: 'Fortune 100 Client Engagements' },
    { title: '98%', desc: 'Project Delivery Success Rate' },
    { title: '12+', desc: 'Years of Leadership Excellence' }
  ];


  return (
    <div className="container-fluid ">
      <section className="banner mb-2">
        <div className="container-fluid text-center ">
          <img
            src={howwearebanner}
            alt="About HRIFY"
            style={{ width: '100%', height: '401px', objectFit: 'cover' }}
            className="img-fluid rounded shadow"
          />
        </div>
      </section>


      {/* Section: Company Overview */}
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold text-danger">Celebrating Excellence</h1>
        <p className="lead mb-4">
          Our global impact, award-winning services, and visionary leadership define our journey in staffing excellence.
        </p>
        <img
          src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
          alt="Celebrating Success"
          className="img-fluid rounded shadow-sm mb-4"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </section>

      {/* Section: Meet the Leaders */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Meet Our Leadership Team</h2>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src='' className="card-img-top" alt='' />
              <div className="card-body text-center">
                <h5 className="card-title text-danger">J. Jayakrishnan M.E, MBA.</h5>
                <p className="card-subtitle fw-semibold mb-2">Managing Director</p>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section: Global Impact Metrics */}
      <section className="bg-light py-5 text-center mb-5">
        <h2 className="mb-4">Company at a Glance</h2>
        <div className="row justify-content-center g-4">
          {metrics.map((metric, index) => (
            <div className="col-6 col-sm-4 col-md-3" key={index}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <h4 className="text-danger fw-bold">{metric.title}</h4>
                <p className="mb-0">{metric.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section
        className="py-5"
        style={{
          background: 'linear-gradient(90deg, #0080a7 0%, #00b4d8 100%)',
          color: 'white'
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* Image Section */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">

              <div
                className="p-3 rounded"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", marginLeft: "-20px" }} // light overlay
              >
                <img
                  src={aboutimg_md}
                  alt="J. Jayakrishnan"
                  className="img-fluid rounded shadow"
                  style={{
                    maxHeight: "320px",
                    objectFit: "cover",
                    padding: "8px",
                    backgroundColor: "white",  // white background added here
                  }}
                />
                <h5 className="mt-3 text-white fw-bold">J. Jayakrishnan M.E, MBA.</h5>
                <p className="mb-0">Managing Director</p>
              </div>

            </div>

            {/* Vision & Mission Text */}
            <div className="col-12 col-md-8">
              <h4 className="text-warning fw-bold mb-3" style={{ fontSize: "2rem" }}>VISION</h4>
              <p className="mb-4" style={{ fontSize: "1.25rem" }}>
                "Known for its innovative solutions and exceptional client service, HRIFY Technologies sets the standard in <span className="fw-bold text-warning">Talent Management & Business Process Management</span> with its cutting-edge technologies and commitment to exceeding customer expectations."
              </p>

              <h4 className="text-warning fw-bold mb-3" style={{ fontSize: "2rem" }}>MISSION</h4>
              <p style={{ fontSize: "1.25rem" }}>
                Our goal is to connect with as many businesses as possible, offering top-tier IT solutions through a robust and expansive network of skilled teams, all while ensuring client satisfaction and fostering a culture of happiness among our employees.
              </p>
            </div>

          </div>
        </div>
      </section>





    </div>
  );
};

export default Whoweare;
