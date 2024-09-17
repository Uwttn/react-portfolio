import "../css/about.css";
import "../css/flip.css";
import MySafari from "../browser-compatability/safari";
import { useState } from "react";

const MyFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main>
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={toggleFlip}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Click Me!</h1>
            <p className="text">
              Open to working with teams of all sizes and backgrounds to create
              innovative solutions.
            </p>
          </div>
          <div className="flip-card-back">
            <h1>Jose Muchati</h1>
            <div className="text">
              <a href="mailto:muchati@icloud.com" id="email">
                Email Me
              </a>
              <br />
              <strong>Actively seeking opportunities.</strong>
            </div>
            <MySafari />
          </div>
        </div>
      </div>
    </main>
  );
};

export default function About() {
  return (
    <>
      <div className="content">
        <div className="section">
          <MyFlip />
          <img src="https://avatars.githubusercontent.com/u/133266199?s=400&u=5b64529ee80188424d5e6f6206bbb62cf84ea6d3&v=4" />
          <br />
          <a href="assets/Resume.pdf">
            <button>Download My Resume</button>
          </a>
        </div>
        <div className="section">
          <h1>Passions</h1>
          <p>
            I'm a passionate software developer focusing on front-end
            development with a strong foundation in HTML, CSS, and JavaScript. I
            enjoy creating clean, efficient code that powers user-friendly
            applications, and I'm always looking to expand my skills.
          </p>
        </div>
        <div className="section">
          <h1>Achievements</h1>
          <p>
            After completing a bootcamp and diving into various personal
            projects, I realized that adaptability and continuous learning are
            key to my growth. I've embraced challenges in mastering JavaScript
            and am currently improving my backend skills with MongoDB and
            Apollo.
          </p>
        </div>
        <div className="section">
          <h1>Approach</h1>
          <p>
            My approach to development is solution-driven—whether I’m working
            solo or in a team, I enjoy breaking down complex problems and
            creating intuitive digital experiences. In the future, I aim to
            collaborate with teams that value innovative solutions and building
            impactful projects.
          </p>
        </div>
      </div>
    </>
  );
}
