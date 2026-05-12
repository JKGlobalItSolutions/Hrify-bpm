

import  aboutimg1 from '../assets/imges/about/abuservic1.jpg'
import  aboutimg2 from '../assets/imges/about/abuservic2.jpg'
import  aboutimg3 from '../assets/imges/about/abuservic3.jpg'
import  aboutimg4 from '../assets/imges/about/abuservic4.jpg'
import industry from '../assets/imges/about/Industry.jpg'

import { Link } from 'react-router-dom'

import React from 'react';

const Industries = () => {
  const industries = [
    {
      title: 'Customer Service',
      desc: 'Delivering outstanding customer experiences with trained professionals across inbound, outbound, and technical support roles.',
      img: aboutimg1
    },
    {
      title: 'Finance',
      desc: 'Supplying experienced financial analysts, accountants, and back-office support staff for top banks and fintech firms.',
      img: 'https://images.unsplash.com/photo-1556740772-1a741367b93e'
    },
    {
      title: 'Healthcare',
      desc: 'Providing non-clinical talent for hospitals and care facilities — including admin, billing, and patient coordination roles.',
      img:aboutimg2
    },
    {
      title: 'Engineering & Manufacturing',
      desc: 'Specialized workforce for assembly lines, QA, logistics, and technical support, ensuring smooth production cycles.',
      img:aboutimg3
    },
    {
      title: 'Insurance',
      desc: 'Claims processors, policy service reps, and customer liaisons who streamline insurance operations efficiently.',
      img:aboutimg4
    },
    {
      title: 'Recruitment Process Outsourcing',
      desc: 'Complete RPO services managing sourcing, hiring, onboarding, and compliance across volume recruitment needs.',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df'
    }
  ];

  return (
    <div className="container-fluid py-5">
      {/* Industries Header */}
      <section className="text-center mb-5">
        <h1 className="display-5 fw-bold text-danger">Industries We Serve</h1>
        <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
          We specialize in delivering non-IT talent across diverse sectors. Our tailored workforce solutions ensure operational excellence and adaptability for each unique industry need.
        </p>
        <img
          src={industry}
          alt="Industry sectors"
          className="img-fluid rounded shadow-sm my-4"
          style={{ maxHeight: '300px', objectFit: 'cover' }}
        />
      </section>

      <section className="mb-5">
        <div className="row g-4">
          {industries.map((industry, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm border-0">
              <img
  src={industry.img}
  className="card-img-top"
  alt={industry.title}
  style={{
    width: "100%",
    height: "80%",
    objectFit: "cover",
    display: "block"
  }}
/>

                <div className="card-body">
                  <h5 className="card-title text-danger">{industry.title}</h5>
                  <p className="card-text">{industry.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-5 bg-danger text-white text-center rounded-3 shadow">
        <h2 className="mb-3">Transform Your Workforce</h2>
        <p className="lead">Ready to build your team with industry-specialized talent?</p>
        
          <Link className="btn btn-light btn-lg" to="/careers/Hiretalent">Get Started</Link>
      </section>


    </div>
  );
};

export default Industries;
