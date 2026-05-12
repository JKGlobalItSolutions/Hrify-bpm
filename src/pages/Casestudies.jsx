import React from 'react'

import { Link } from 'react-router-dom'

import Blogsimg_4 from '../assets/imges/about/blog-3.jpg'
import Blogsimg4 from '../assets/imges/about/blog4.jpg'
import Blogsimg5 from '../assets/imges/about/blog5.jpg'
import Blogsimg6 from '../assets/imges/about/blog6.jpg'
import Blogsimg7 from '../assets/imges/about/blog7.jpg'



const Casestudies = () => {
    const cases = [
      {
        title: 'Rapid Insurance Staffing in 8 Seconds',
        date: 'Jan 29, 2025',
        desc:
          'During a nationwide natural disaster, a Fortune 500 insurance company urgently needed qualified claims processors. Nammapeople stepped in with lightning-fast response — deploying 42 specialized agents in just 8 seconds. The effort reduced downtime and allowed the client to maintain exceptional service levels during a critical time.',
        img: Blogsimg_4,
        link: '/services/Case_studiesone'
      },
      {
        title: 'Global BPO Success: 350+ Hires in 3 Weeks',
        date: 'Dec 10, 2024',
        desc:
          'A global BPO giant faced a massive expansion challenge across Latin America and Southeast Asia. Nammapeople delivered a tailored recruitment strategy that sourced, vetted, and placed over 350 support professionals in just 21 days — accelerating business continuity and onboarding success.',
        img: Blogsimg4,
        link: '/services/Case_studiestwo'
      },
      {
        title: 'Hiring HVAC & Electrical Engineers at Scale',
        date: 'Dec 10, 2024',
        desc:
          'A top-tier energy and infrastructure firm needed niche engineering talent across the U.S. Nammapeople deep technical recruiting network enabled rapid placement of HVAC, plumbing, and electrical engineers — ensuring projects moved forward without delay.',
        img: Blogsimg5,
        link: '/services/Case_studiethree'
      },
      {
        title: 'EV Leader Gears Up With 200+ Workforce Hires',
        date: 'Dec 10, 2024',
        desc:
          'A major electric vehicle manufacturer with operations in the U.S. and Europe sought engineering, design, and manufacturing talent for four Gigafactories. Nammapeople assembled a cross-functional hiring team and delivered 200+ professionals — enabling on-time production milestones.',
        img: Blogsimg6,
        link: '/services/Case_studiesfive'
      },
      {
        title: '130+ Financial Services Reps in 3 Weeks',
        date: 'Dec 10, 2024',
        desc:
          'With open enrollment season approaching, a financial services client needed rapid support. Nammapeople built and deployed a customized recruitment pipeline, hiring 130+ retirement plan service reps in under 3 weeks. Performance KPIs improved by 38% post-hire.',
        img: Blogsimg7,
        link: '/services/Case_studiessix'
      }
    ];
  
    return (
      <div className="container-fluid py-5">
        <section className="text-center mb-5">
          <h2 className="display-5 fw-bold text-danger">Case Studies</h2>
          <p className="lead mx-auto" style={{ maxWidth: '750px' }}>
            Real-world success stories that demonstrate how Nammapeople helps businesses scale fast, hire smart, and lead with excellence.
          </p>
        </section>
  
        <div className="row g-4">
          {cases.map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <small className="text-muted mb-2">{item.date} | Case Study</small>
                  <h5 className="text-danger">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                 

                  <Link to={item.link} className="mt-auto btn btn-outline-danger">
  Read More
</Link>


                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* CTA Section */}
        <section className="text-center mt-5">
          <h4 className="fw-bold mb-3">Let’s Discuss Your Hiring Needs</h4>
          <p className="lead">
            Call us at <a href="tel:9792362377" className="text-danger fw-bold">979-236-2377</a> or{' '}
            <a href="#" className="text-danger fw-bold">Request a Quote</a>
          </p>
          <button className="btn btn-danger">Schedule an Appointment</button>
        </section>
      </div>
    );
  };

export default Casestudies





