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
        <div>
          <div
            className="section"
          >
            <MyFlip />
            <img src="https://avatars.githubusercontent.com/u/133266199?s=400&u=5b64529ee80188424d5e6f6206bbb62cf84ea6d3&v=4" />
            <br />
            <a href="assets/Resume.pdf">
              <button>Download My Resume</button>
            </a>
          </div>
        </div>
    </>
  );
}
