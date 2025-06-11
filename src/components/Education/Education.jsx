import React from 'react';
import { Container } from 'react-bootstrap';
import EducationCard from './EducationCard';
import './Education.css';

const Education = () => {
  return (
    <section className="education-content" id="education">
      <Container>
        <h2 className="text-center heading mb-5" style={{ fontFamily: 'cursive' }}>
          &nbsp; Education Details.
        </h2>

        <div className="timeline">

          <div className="container-e left-container">
            <div className="timeline-bullet"></div>
            <EducationCard
              title="BE CSE"
              institution="SNS College of Engineering"
              year="2021 - 2025"
              grade="8.7 CGPA"
            />
            <span className="left-container-arrow"></span>
          </div>

          <div className="container-e right-container">
            <div className="timeline-bullet"></div>
            <EducationCard
              title="Higher Secondary (HSC)"
              institution="Adhiyaman Public School"
              year="2021 - 2022"
              grade="84%"
            />
            <span className="right-container-arrow"></span>
          </div>

          <div className="container-e left-container">
            <div className="timeline-bullet"></div>
            <EducationCard
              title="Secondary (SSLC)"
              institution="Dheeran Chinnamalai International Residential School"
              year="2020 - 2021"
              grade="87%"
            />
            <span className="left-container-arrow"></span>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Education;
