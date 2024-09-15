import styles from "../css/style.module.css";

export default function Home() {
  return (
    <body className="card" style={{ marginTop: "30px" }}>
      <h1 align="center" className="card bg-primary-subtle">
        Jose's Deployed Projects
      </h1>

        {/* Start of container */}
      <div className={styles.main}>

        {/* Portfolio */}
        <div
          className="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/portfolio/">
            <strong>Portfolio</strong>
          </a>
          <img
            src="https://github.com/Uwttn/portfolio/blob/main/assets/website-view.png?raw=true"
            style={{ height: "100%" }}
          />
          <a href="https://github.com/Uwttn/portfolio"><strong>Repository</strong></a>
        </div>
        {/* Payroll */}
        <div
          className="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/payroll/">
            <strong>Payroll</strong>
          </a>
          <img
            src="https://raw.githubusercontent.com/Uwttn/payroll/main/assets/image.png"
            style={{ height: "100%" }}
          />
          <a href="https://github.com/Uwttn/payroll"><strong>Repository</strong></a>
        </div>
        {/* weather */}
        <div
          className="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/weather/">
            <strong>Weather</strong>
          </a>
          <img
            src="https://raw.githubusercontent.com/Uwttn/weather/main/assets/weather.png"
            alt="Portfolio"
            style={{ height: "100%" }}
          />
          <a href="https://github.com/Uwttn/weather"><strong>Repository</strong></a>
        </div>
        {/* FlipIt */}
        <div
          className="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://flipit-57ng.onrender.com/">
            <strong>FlipIt</strong>
          </a>
          <img
            src="https://github.com/user-attachments/assets/2ab1a638-e80f-4764-8242-1ca91d5e061a"
            alt="Portfolio"
            style={{ height: "100%" }}
          />
          <a href="https://github.com/AllredW/FlipIt"><strong>Repository</strong></a>
        </div>

        {/* End of Container */}
      </div>
    </body>
  );
}
