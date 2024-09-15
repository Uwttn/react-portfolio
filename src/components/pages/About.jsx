import styles from "../css/about.module.css";
import React, { useState } from "react";

const MyFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <content>
      <div
        className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
        onClick={toggleFlip}
      >
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <h1>Click Me!</h1>
            <p className={styles.text}>
              Open to working with teams of all sizes and backgrounds to create
              innovative solutions.
            </p>
          </div>
          <div className={styles.flipCardBack}>
            <h1>Jose Muchati</h1>
            <p className={styles.text}>
              <a href="mailto:muchati@icloud.com" id={styles.email}>
                Email Me
              </a>
              <br />
              <strong>Actively seeking opportunities.</strong>
            </p>

            <a href="https://www.linkedin.com/in/uwttn/">
              <img className={styles.contact} src="/assets/LinkedIn.png" />
            </a>
            <a href="https://github.com/Uwttn">
              <img className={styles.contact} src="/assets/github.png" />
            </a>
          </div>
        </div>
      </div>
    </content>
  );
};

export default function About() {
  return (
    <>
      {/* Education */}
      <div className={styles.content}>
        <div className={styles.section}>
          <h1 className="bg-primary-subtle" style={{ borderRadius: 15 }}>
            Education
          </h1>
          <div className="card bg-primary-subtle">
            <strong>University of Central Florida</strong>
            <em>Coding Bootcamp Certification - June 2024 - September 2024</em>
            <br />
            <p>
              Topics covered: JavaScript, Cascadian Style Sheet (CSS), HTML5,
              SQL, NoSQL, GitHub, MongoDB, MySQL, PostgreSQL, Express, React,
              Node, Handlebars, jQuery, Bootstrap, and PureCSS, C (Programming
              Language), Git, Application Programming Interface (API),
              Object-Oriented Programming (OOP), Computer Science Concepts,
              MERN, REST APIs.
            </p>
            <div align="left">
              <strong>Florida Gulf Coast University</strong>
              <div>
                <em>BA in Psychology - August 2020 - December 2022</em>
              </div>
              <strong>Cumulative GPA: 3.5 - Cum Laude</strong>
            </div>
            <br />
            <div align="left">
              <strong>Immokalee Technical College</strong>
              <br />
              <em>Certificate of Completion January 2017 - June 2018</em>
            </div>
            <br />
            <div align="left">
              <strong>Marjory Stoneman Douglas</strong>
              <br />
              <em>High School Diploma - August 2008 - April 2012</em>
            </div>
          </div>
        </div>

        {/* Employment */}
        <div className={styles.section}>
          <h1 className="bg-primary-subtle" style={{ borderRadius: 15 }}>
            Employment
          </h1>
          <div className="card bg-primary-subtle" align="left">
            <strong>Collier County Government – Facilities Management</strong>
            <em>Operations Coordinator – August 2023 – May 2024</em>
            <ul>
              <li>
                Developed and implemented Excel formulas for efficient contract
                management, enhancing data accuracy and automation.
              </li>
              <li>
                Managed comprehensive data analysis to be utilized for
                forecasting and strategic planning.
              </li>
              <li>
                Created and maintained dashboards and pivot tables in Excel,
                while improving data presentation and decision-making processes.
              </li>
              <li>
                Used ArcGIS’s data analysis tools to improve geographical data
                accuracy and utility for operational purposes.
              </li>
              <li>
                Designed a user-friendly GIS application for management and
                reporting of geographical data.
              </li>
            </ul>

            <strong>Employment Network of Southwest Florida</strong>
            <em>Administrative Assistant – March 2023 - June 2023</em>
            <ul>
              <li>
                Implemented and managed billing procedure, ensuring accuracy and
                compliance for Social Security purposes.
              </li>
              <li>
                Audited client wages and managed data entry, while enhancing
                record-keeping accuracy.
              </li>
              <li>
                Developed and utilized efficient filing systems, while improving
                document retrieval and office workflow.
              </li>
            </ul>
          </div>
        </div>

        <div>
        <div
          className={styles.section}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <MyFlip />
          <img src="https://avatars.githubusercontent.com/u/133266199?s=400&u=5b64529ee80188424d5e6f6206bbb62cf84ea6d3&v=4" />
          <br />
          <a href="assets/Resume.pdf">
            <button>Download My Resume</button>
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
