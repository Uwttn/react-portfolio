import React from "react";
import "../css/style.css";
import Typewriter from "typewriter-effect";
import Nav from "./Nav"

export default function Projects() {
  return (
    <>
      {/* Card Starts here */}
      <div className="background">
        
        <Nav />
      <div className="card content">
        <h1 align="center" className="card bg-primary">
          Deployed Projects
        </h1>
        <Write />
        <div className="main">
          <RowOne />
        </div>
        <div className="main">
          {/* <RowTwo /> */}
        </div>
      </div>
      <Footer />
      {/* Card Ends here */}
      </div>
    </>
  );
}

//importing typewriter-effect

function Write() {
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Jose Muchati")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Web Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("UI / UX Designer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Front-End Developer")
            .start();
        }}
      />
    </div>
  );
}

function RowOne() {
  return (
    <>
      {/* Portfolio */}
      <div className="card bg-primary-subtle resize">
        <a href="https://www.youtube.com/watch?v=eP6vSEuVqBo&t=9s">
          <strong className="links">README Generator</strong>
        </a>
        <img src="assets/README.png" />
        <a href="https://github.com/Uwttn/readme-generator">
          <strong className="links">Repository</strong>
        </a>
      </div>
      {/* Payroll */}
      <div className="card bg-primary-subtle resize">
        <a href="https://uwttn.github.io/payroll/">
          <strong className="links">Payroll</strong>
        </a>
        <img src="assets/payroll.png" />
        <a href="https://github.com/Uwttn/payroll">
          <strong className="links">Repository</strong>
        </a>
      </div>
      {/* weather */}
      <div className="card bg-primary-subtle resize">
        <a href="https://uwttn.github.io/weather/">
          <strong className="links">Weather</strong>
        </a>
        <img src="assets/weather.png" alt="Portfolio" />
        <a href="https://github.com/Uwttn/weather">
          <strong className="links">Repository</strong>
        </a>
      </div>
      {/* Portfolio */}
      <div className="card bg-primary-subtle resize">
        <a href="https://uwttn.github.io/portfolio/">
          <strong className="links">Portfolio</strong>
        </a>
        <img src="assets/portfolio.png" alt="Portfolio" />
        <a href="https://github.com/Uwttn/portfolio">
          <strong className="links">Repository</strong>
        </a>
      </div>
    </>
  );
}

function RowTwo() {
  return (
    <>
      {/* README Generator */}
      <div className="card bg-primary-subtle resize">
        <a href="https://www.youtube.com/watch?v=eP6vSEuVqBo&t=9s">
          <strong className="links">README Generator</strong>
        </a>
        <img src="assets/README.png" />
        <a href="https://github.com/Uwttn/readme-generator">
          <strong className="links">Repository</strong>
        </a>
      </div>
      {/* Payroll */}
      <div className="card bg-primary-subtle resize">
        <a href="https://uwttn.github.io/payroll/">
          <strong className="links">Payroll</strong>
        </a>
        <img src="assets/payroll.png" />
        <a href="https://github.com/Uwttn/payroll">
          <strong className="links">Repository</strong>
        </a>
      </div>
      {/* weather */}
      <div className="card bg-primary-subtle resize">
        <a href="https://uwttn.github.io/weather/">
          <strong className="links">Weather</strong>
        </a>
        <img
          src="https://raw.githubusercontent.com/Uwttn/weather/main/assets/weather.png"
          alt="Portfolio"
        />
        <a href="https://github.com/Uwttn/weather">
          <strong className="links">Repository</strong>
        </a>
      </div>
      {/* FlipIt */}
      <div className="card bg-primary-subtle resize">
        <a href="https://flipit-57ng.onrender.com/">
          <strong className="links">FlipIt</strong>
        </a>
        <img
          src="https://github.com/user-attachments/assets/2ab1a638-e80f-4764-8242-1ca91d5e061a"
          alt="Portfolio"
        />
        <a href="https://github.com/AllredW/FlipIt">
          <strong className="links">Repository</strong>
        </a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <h1 align="center" className="bg-primary">Contact Information</h1>
    <div className="info bg-primary-subtle">
      <a href="https://github.com/Uwttn">
        <img src="assets/github.png" />
      </a>
      <a href="https://www.linkedin.com/in/uwttn/">
        <img src="assets/LinkedIn.png" />
      </a>
    </div>
    </>
  );
}


