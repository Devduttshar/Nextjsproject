import React from "react";
import Index from "./index";
import image from '../public/rajat.jpeg'

const About = () => {
  return (
    <>
      <Index />
      <div className="about-page-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-text">
            <h1>About Us</h1>
            <p>
            At Tingle, we provide direct access to HR contacts and the latest vacancy details across Delhi NCR, including Noida, Gurugram, and Chandigarh. Our platform connects computer science professionals with top companies, offering verified information on recent hiring trends. We are committed to supporting your career growth by simplifying the job search process and delivering high-quality, reliable resources to help you achieve your goals.


            </p>
          </div>
          <div className="about-hero-image">
            <img
              src="https://aacmanchar.edu.in/images/departments/placement.webp"
              alt="About Us"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
          At Tingle, we are dedicated to simplifying your job search by providing direct access to HR contacts and vacancy details from top companies across Delhi NCR, including Noida, Gurugram, and Chandigarh. Our platform is designed to connect ambitious professionals with the latest job openings and hiring trends.

We continuously update our database with the most recent hiring companies, ensuring you never miss out on the best opportunities. Whether you're a fresh graduate or an experienced professional, our goal is to empower you with the tools and resources you need to achieve your career goals.

At Tingle, we believe in fostering a culture of innovation, collaboration, and excellence. We are committed to delivering high-quality services that not only meet but exceed your expectations.

Join us and take the next step in your career journey with confidence
          </p>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <h2>Services</h2>
          <div className="values-cards">
            <div className="card">
              <h3> Computer Science student</h3>
              <p>
              Any CS / IT Branch student 
              </p>
            </div>
            <div className="card">
              <h3>MBA Students</h3>
              <p>
                Sales / Marketing and HR related Job
              </p>
            </div>
            <div className="card">
              <h3> Mix Job only Graduation Based BSC/BA etc</h3>
              <p>
              Call center , Sales , Third party work etc
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="photodev.jpeg"
                alt="Team Member"
              />
              <h3>Dev dutt Sharma</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img
                src="rajat.jpeg"
                alt="Team Member"
              />
              <h3>Rajat choudhary</h3>
              <p> CTO </p>
            </div>
            <div className="team-member">
              <img
                src="arun.jpeg"
                alt="Team Member"
              />
              <h3>Arun Raghav</h3>
              <p> Manager </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
