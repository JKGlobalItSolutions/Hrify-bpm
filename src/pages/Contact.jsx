import React from 'react';



// banner
import contactbanner from '../assets/imges/home/contactbanner.jpg'

const Contact = () => {
  return (
    <div>


<section className="banner">
  <div className="container-fluid text-center px-0">
    <img
      src={contactbanner}
      alt="About HRIFY"
      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      className="img-fluid rounded shadow"
    />
  </div>
</section>


      <div className="container py-5">
        <div className="row">
          {/* Connect With Nammapeople Form Column */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-center text-danger mb-4">Connect With Nammapeople</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name*</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Last Name*</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Business Email*</label>
                    <input
                      type="email"
                      name="businessEmail"
                      className="form-control"
                      required
                      placeholder="example@company.com"
                    />
                    <small className="text-muted">Business Email Only</small>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number*</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Location*</label>
                    <select
                      name="location"
                      className="form-select"
                      required
                    >
                      <option value="">Please Select</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="Europe">Europe</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">I am looking for*</label>
                    <select
                      name="inquiryType"
                      className="form-select"
                      required
                    >
                      <option value="">Please Select</option>
                      <option value="Hiring Services">Hiring Services</option>
                      <option value="Staff Augmentation">Staff Augmentation</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Please provide a brief overview of your requirements*</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      required
                      placeholder="Briefly describe your hiring or job needs..."
                    ></textarea>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-danger btn-lg">Submit</button>
                </div>
              </form>
            </div>
          </div>

          {/* Our Address and Map Column */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-center text-danger mb-4">Our Address</h3>
              <p className="text-center">
                <strong>Hrify technologies pvt ltd </strong><br />
                Annai Collector Nagar, <br />
                opp collector Office <br />
                Vengikkal <br />
                Tiruvannamalai-606604<br />
              8438438413, 8807880764
              </p>

              {/* Google Map Embed */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.410471739315!2d72.83361101674513!3d19.216250546102553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8362fe6b089%3A0x67298c4fc0b92a06!2sNammapeople!5e0!3m2!1sen!2sin!4v1681328684374!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
