import React from 'react';
import { Link } from 'react-router-dom';
import ats1 from '../assets/imges/about/ats1.jpg';
import ats2 from '../assets/imges/about/ats2.jpg';
import ats3 from '../assets/imges/about/ats3.jpg';


const Blogspagethree = () => {
  return (
    <div className="container my-5" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '1.1rem', lineHeight: '1.8' }}>
      <h1 className="mb-3 text-danger text-center">Looking for a Job? How to Get Past Applicant Tracking Systems (ATS)</h1>
     

      <img src={ats1} alt="ATS Overview" className="img-fluid rounded mx-auto d-block mb-4" />

      <p>
        You’ve polished your resume, written a compelling cover letter, and hit Submit, but then… nothing.
      </p>
      <p>
        If this sounds familiar, you might be dealing with the hiring world’s invisible filter: the Applicant Tracking System, or ATS.
      </p>

      <div className="bg-danger-subtle p-3 rounded mb-4">
        <p>
          Forbes says 90% of companies now use ATS software, yet only about 25% of resumes make it through to HR. That means
          understanding ATS is key to getting noticed.
        </p>
      </div>

      <h4 className="text-danger text-center">What Is an Applicant Tracking System (ATS)?</h4>
      <p>
        Think of ATS as a digital assistant. It scans your resume looking for specific keywords and skills that match the job
        description. It helps hiring teams narrow down candidates quickly.
      </p>

      <h4 className="text-danger text-center">How Do Applicant Tracking Systems Work?</h4>
      <p>
        ATS software compares your resume to the job posting. It scans for terms like job titles, certifications, tools, and relevant
        skills. The more matches it finds, the better your ranking.
      </p>

      <div className="card my-4 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ats2} className="img-fluid rounded-start h-100 object-fit-cover" alt="Resume Screening" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-danger text-center">Knockout Questions: The First Checkpoint</h5>
              <p className="card-text">
                Early ATS filters include knockout questions like: “Are you willing to relocate?” or “Do you have a required
                certification?” One wrong answer and your resume may be rejected immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-danger text-center">How Hiring Managers Use ATS</h4>
      <p>
        Once a resume makes it through, managers use ATS to search for specific candidates based on skills or past employers.
        Your keywords and formatting matter even more here.
      </p>

      <h4 className="text-danger text-center">What Are Resume Scores?</h4>
      <p>
        Many systems assign a score to your resume—typically from 0 to 100. A score of 80+ increases your chances of being seen by
        a human recruiter.
      </p>

      <div className="bg-danger-subtle p-3 rounded mb-4">
        <p>
          To improve your score, match your resume to each job. Use the job description’s exact language in your summary,
          skills, and experience sections.
        </p>
      </div>

      <h4 className="text-danger text-center">Tips to Improve Your Resume Score</h4>
      <ul>
        <li><strong>Use Relevant Keywords:</strong> Pull keywords directly from the job description.</li>
        <li><strong>Avoid Keyword Stuffing:</strong> Don’t overload your resume unnaturally.</li>
        <li><strong>Customize Your Resume:</strong> Tailor your resume for each application.</li>
      </ul>

      <h4 className="text-danger text-center">ATS-Friendly Resume Formatting</h4>
      <p>
        Fancy designs may confuse the system. Keep things clean and simple.
      </p>

      <ul>
        <li>Stick to standard headings like <em>Experience</em>, <em>Skills</em>, <em>Education</em>.</li>
        <li>Avoid graphics, tables, or text boxes.</li>
        <li>Use fonts like Arial or Times New Roman.</li>
      </ul>

      <div className="card my-4 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={ats3} className="img-fluid rounded-start h-100 object-fit-cover" alt="Future of ATS" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-danger text-center">What’s Next for ATS?</h5>
              <p className="card-text">
                ATS is evolving. Newer systems use AI to better match candidates, recognize soft skills, and even evaluate career
                progression. Some are experimenting with video resumes and instant feedback for applicants.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="text-danger text-center">Final Thoughts</h4>
      <p>
        ATS can seem like a barrier, but with the right resume strategy, it becomes your ally. Optimize your resume, use smart
        formatting, and target each job—you’ll increase your chances of landing that interview.
      </p>

      <div className="mt-4 text-center">
        <Link to="/contact" className="btn btn-primary px-4">
          Let’s Talk About Your Job Strategy
        </Link>
      </div>
    </div>
  );
};

export default Blogspagethree;
