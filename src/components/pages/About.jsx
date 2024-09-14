import styles from "../css/about.module.css";

export default function About() {
  return (
    <>
      <div>
        <div>
          <div
            className={`${styles.section} card bg-primary-subtle`}
          >
            <h1>
              <strong>About Me</strong>
            </h1>
            <p>
              Web developer with a psychology background specializing in
              creating intuitive and adaptable user interfaces. Earned a
              certificate in Full Stack Web Development from the University of
              Central Florida Coding Bootcamp. Attentive to detail and clarity
              are at the core of my designs and development. My strengths in
              teamwork and intuitive problem-solving are at the core of my
              ability to create effective and user-centered digital products.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <h1 className="bg-primary-subtle" align="center" style={{borderRadius: 15}}>
            <strong>Jose Muchati</strong>
          </h1>
          <img
            src="https://avatars.githubusercontent.com/u/133266199?v=4"
            alt="me"
          />
        </div>

        {/* Education */}
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
              <em>
                BA in Psychology - August 2020 - December 2022
              </em>
              </div>
              <strong>Cumulative GPA: 3.5 - Cum Laude</strong>
            </div>
            <br />
            <div align="left">
              <strong>
                Immokalee Technical College 
              </strong>
                 <br />
              <em>
              Certificate of Completion January 2017 - June
                2018
              </em>
            </div>
            <br />
            <div align="left">
              <strong>Marjory Stoneman Douglas</strong>
              <br />
              <em>High School Diploma - August 2008 - April 2012</em>
            </div>
          </div>
        </div>

        <div className={styles.section}>
            <h1 className="bg-primary-subtle" style={{ borderRadius: 15 }}>Employment</h1>
          <div className="card bg-primary-subtle" align="left">
            <strong>Collier County Government – Facilities Management</strong>
            <em>Operations Coordinator – August 2023 – May 2024
            </em>
            <ul>
            <li>Developed and implemented Excel formulas for efficient contract management, enhancing data accuracy and automation.</li>
            <li>Managed comprehensive data analysis to be utilized for forecasting and strategic planning.</li>
            <li>Created and maintained dashboards and pivot tables in Excel, while improving data presentation and decision-making processes.</li>
            <li>Used ArcGIS’s data analysis tools to improve geographical data accuracy and utility for operational purposes.</li>
            <li>Designed a user-friendly GIS application for management and reporting of geographical data.</li>
            </ul>

            <strong>Employment Network of Southwest Florida
            </strong>
            <em>Administrative Assistant – March 2023 - June 2023</em>
            <ul>
              <li>Implemented and managed billing procedure, ensuring accuracy and compliance for Social Security purposes.</li>
              <li>Audited client wages and managed data entry, while enhancing record-keeping accuracy.</li>
              <li>Developed and utilized efficient filing systems, while improving document retrieval and office workflow.</li>
            </ul>
          </div>


        </div>
      </div>
    </>
  );
}
