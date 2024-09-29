import "../css/style.css";

export default function Home() {
  return (
    <>
    {/* Card Starts here */}
      <div className="card">
        <h1 align="center" className="card bg-primary" id="header">
          Jose's Deployed Projects
        </h1>
        <Resume />
        <div className="main">
          <RowOne />
        </div>
        <div className="main">
        {/* <RowTwo /> */}
        </div>

      </div> 
      {/* Card Ends here */}
    </>
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
          <img
            src="assets/weather.png"
            alt="Portfolio"
          />
          <a href="https://github.com/Uwttn/weather">
            <strong className="links">Repository</strong>
          </a>
        </div>
        {/* Portfolio */}
        <div className="card bg-primary-subtle resize">
          <a href="https://uwttn.github.io/portfolio/">
            <strong className="links">Portfolio</strong>
          </a>
          <img
            src="assets/portfolio.png"
            alt="Portfolio"
          />
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

function Resume() {
  return (
    <div className="info">
      <a href="assets/Resume 2024.09.29.pdf">
        <button>Download My Resume</button>
      </a>
    </div>
  );
}
