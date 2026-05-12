import React from "react";
import { Link } from "react-router-dom";
import '../stylesheet/style.css'
import worldimg from '../assets/imges/home/img4.jpg'
import img1 from '../assets/imges/home/img1.jpg'
import img2 from '../assets/imges/home/img2.jpg'
import img3 from '../assets/imges/home/img3.jpg'

// company
import accent from '../assets/imges/home/accenture.jpg'
import cognizant from '../assets/imges/home/cognine.jpg'
import genpact from '../assets/imges/home/genpact.jpg'
import infosys from '../assets/imges/home/infosy.jpg'
import techmach from '../assets/imges/home/techmach.jpg'

// banner
import homebanner from '../assets/imges/home/homebanner.jpg'


const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>



<section className="banner">
  <div className="container-fluid text-center px-0">
    <img
      src={homebanner}
      alt="About HRIFY"
      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      className="img-fluid rounded shadow"
    />
  </div>
</section>




      {/* Hero Section */}
      <section className="d-flex align-items-center p-5" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-5 fw-bold text-danger">
                Fostering Genuine Connections in a Virtual World
              </h1>
              <p className="lead">
                Bridging technology and human empathy to drive productivity forward.
              </p>

              <Link to="/services/engineering-manufacturing" className="btn btn-danger px-4 mt-3">
                Find Out How We Support Your Workforce's Growth
              </Link>


            </div>
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <img
                src={worldimg}
                alt="Hero"
                className="img-fluid"
                style={{ width: '80%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

    
{/* Trusted Partners */}
<section className="text-center py-4 bg-danger-subtle">
  <h5 className="text-danger">TRUSTED PARTNERS</h5>

  <marquee behavior="alternate" direction="left" scrollamount="">
    {[infosys, techmach, cognizant, genpact, accent].map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`partner-${i}`}
        style={{
          height: "100px",
          width: "auto",
          margin: "0 40px",
          objectFit: "contain"
        }}
      />
    ))}
  </marquee>
</section>







      {/* Services Section */}
      <section className="text-center py-5 bg-white">
        <h6 className="text-uppercase">Empower, Enhance, Excel</h6>
        <h2 className="fw-bold text-danger">Shaping the Future of Support</h2>
        <p className="mx-auto w-75">
          We extend assistance in improving business processes that empower the organization's overall growth. <br />
          Our ultimate goal is to improve corporate performance through a systematic approach
        </p>
        <div className="row row-cols-1 row-cols-md-4 p-3 g-4 ">
          {[
            {
              title: "Staff Augmentation",
              desc: "Boost your team’s capabilities with our premium talent resources to drive business success.",
              btn: "Explore Further"
            },
            {
              title: "Managed Service",
              desc: "Enhance operational efficiency with our tailored managed services.",
              btn: "Understand More"
            },
            {
              title: "Hire-Train-Deploy",
              desc: "Quickly build your team with our fast-track hire, train, and deploy approach.",
              btn: "View More Insights"
            },
            {
              title: "Healthcare Staffing",
              desc: "Staffing solutions aligned with your values to elevate patient care.",
              btn: "Discover More"
            }
          ].map((service, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-danger fw-bold">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                </div>
                <div className="card-footer bg-white border-0">
                  {/* <button className="btn btn-danger w-100">{service.btn}</button> */}
                  <Link to="/services/staff-augmentation" className="btn btn-danger px-4 mt-3">
                    {service.btn}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-fluid py-5 mb-4 bg-danger-subtle">
        <div className="container"> {/* centers content */}
          <div className="row align-items-center">
            <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
              <img
                src={img2}
                alt="Office"
                className="img-fluid rounded"
                style={{ width: '100%', maxWidth: '500px', height: '300px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8">
              <h6 className="text-danger">ABOUT</h6>
              <h3 className="fw-bold">Unlock the Power of <br /> Communication</h3>
              <p>For over two decades, Trustpeople has helped companies build stronger teams.
                Our secret? A proven mix of precision hiring, human understanding, and cultural alignment.</p>
              {/* <button className="btn btn-danger">DISCOVERY STORY</button> */}
              <Link to="/careers/Hiretalent" className="btn btn-danger px-4 mt-3">
                DISCOVERY STORY
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Strategy Section */}
      <section className="container rounded bg-dark text-white p-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h6>Strategy & Transformation</h6>
            <h3 className="fw-bold">Reengineering the Customer <br /> Service Experience</h3>
            <p>
              Our commitment to innovation is about anticipating customer needs, optimizing our response times, and ensuring every solution is not only effective, but also ahead of its time..
            </p>
            {/* <button className="btn btn-danger">Discover Our Impact</button> */}
            <Link to="/careers/Find-a-job" className="btn btn-danger px-4 mt-3">
              Discover Our Impact
            </Link>
          </div>
          <div className="col-md-6">
            <img
              src={img3}
              alt="AI Tech"
              className="img-fluid rounded"
              style={{ width: '100%', maxWidth: '500px', height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="text-center p-5">
        <h3 className="text-danger fw-bold">Why Trust People ?</h3>
        <p className="w-75 mx-auto">
          "Unlock unpaeallelled talent and exceptional service with our human-centric staffing solutions, designed to boost your productivity and customer satisfaction.
        </p>
      </section>

      <section className="row mt-3 g-3 bg-danger-subtle px-3">

        <div className="col-md-4 pb-3 p-4">
          <div className="p-3 h-100 bg-light rounded border-start border-bottom border-danger shadow-sm">
            <h5 className="fw-bold">TRUE HUMAN APPROCH</h5>
            <p>Leaders in human-centric Non-IT staff augmentation, we foster empathy, inclusivity, and diversity at every step of the hiring journey..</p>
          </div>
        </div>

        <div className="col-md-4 pb-3 p-4">
          <div className="p-3 h-100 bg-light rounded border-start border-bottom border-danger shadow-sm">
            <h5 className="fw-bold">HIGH VOLUME SOLUTIONS</h5>
            <p>We connect you to exceptional talent through a trusted network and thorough vetting—so your business never misses a beat.</p>
          </div>
        </div>

        <div className="col-md-4 pb-3 p-4">
          <div className="p-3 h-100 bg-light rounded border-start border-bottom border-danger shadow-sm">
            <h5 className="fw-bold">SPEED AND PRECISION</h5>
            <p>Time is money. We deliver sharp, efficient recruitment that keeps your business moving ahead.</p>
          </div>

        </div> <div className="col-md-4 pb-3 p-4">
          <div className="p-3 h-100 bg-light rounded border-start border-bottom border-danger shadow-sm">
            <h5 className="fw-bold">TALENT DEVELOPMENT</h5>
            <p>We champion candidate growth and development. With VEngage, we empower individuals to unlock their full potential and stay driven.</p>
          </div>
        </div>

        <div className="col-md-4 pb-3 p-4">
          <div className="p-3 h-100 bg-light rounded border-start border-bottom border-danger shadow-sm">
            <h5 className="fw-bold">20+ YEARS EXPERIENCE</h5>
            <p>For over two decades, we’ve delivered the right talent to the right teams—fueling growth and ensuring long-term business success.</p>
          </div>
        </div>

        <div className="col-md-4 pb-3 p-4">
          <div className="p-3 h-100 bg-light rounded border-start border-bottom border-danger shadow-sm">
            <h5 className="fw-bold">AGILE ORGANIZATION</h5>
            <p>We pivot with market trends and customer needs, delivering solutions that put your priorities first—every time.</p>
          </div>
        </div>

      </section>
      {/* Job Seekers Section */}
      <section className="container-fluid p-5">
        <div className="row align-items-stretch overflow-hidden" style={{ borderRadius: '10px' }}>

          {/* Left Red Card */}
          <div className="col-md-6 p-0">
            <div
              className="h-100 text-white d-flex flex-column justify-content-center position-relative p-5"
              style={{ backgroundColor: '#8B0000' }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderTop: '100% solid transparent',
                  borderLeft: '100px solid white',
                  zIndex: 1,
                }}
              />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h6 className="text-uppercase">Job Seekers</h6>
                <h2 className="fw-bold">Start a Career with Nammapeople  <br /> Company Today</h2>
                {/* <button className="btn btn-light mt-3">Apply Now</button> */}
                <Link to="/careers/Find-a-job" className="btn btn-light px-4 mt-3">
                  Apply Now
                </Link>

              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 p-0">
            <img
              src={img1}
              alt="Office"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
