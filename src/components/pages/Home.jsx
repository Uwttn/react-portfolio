import "../css/style.css";

export default function Home() {
  return (
    <div className="card">
      <h1 align="center" className="card bg-primary-subtle">
        Jose's Deployed Projects
      </h1>

      {/* Start of container */}
      <div className="main">
        {/* Portfolio */}
        <div className="card bg-primary-subtle resize" >
          <a href="https://uwttn.github.io/portfolio/">
            <strong className="links">Portfolio</strong>
          </a>
          <img src="https://github.com/Uwttn/portfolio/blob/main/assets/website-view.png?raw=true" />
          <a href="https://github.com/Uwttn/portfolio">
            <strong className="links">Repository</strong>
          </a>
        </div>
        {/* Payroll */}
        <div className="card bg-primary-subtle resize">
          <a href="https://uwttn.github.io/payroll/">
            <strong className="links">Payroll</strong>
          </a>
          <img src="https://raw.githubusercontent.com/Uwttn/payroll/main/assets/image.png" />
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
      </div>
      {/* End of Container */}
    </div>
  );
}
