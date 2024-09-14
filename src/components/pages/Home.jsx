import styles from "../css/style.module.css";

export default function Home() {
  return (
    <body class="card" style={{ marginTop: "30px" }}>
      <h1 align="center" class="card bg-primary-subtle">
        Jose's Deployed Projects
      </h1>
{/* Portfolio */}
      <div className={styles.main}>
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
          <a href="https://github.com/Uwttn/portfolio">Repository</a>
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
          <a href="https://github.com/Uwttn/payroll">Repository</a>
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
          <a href="">Repository</a>
        </div>
{/* FlipIt */}
        <div
          className="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "20px", width: "20%", height: "auto" }}
        >
          <a href="https://flipit-57ng.onrender.com/">
            <strong>FlipIt</strong>
          </a>
          <img
            src="public/assets/FlipIt.png"
            alt="My blog"
            style={{ height: "100%" }}
          />
          <a href="https://github.com/AllredW/FlipIt">Repository</a>
        </div>
      </div>

{/* Footer */}
      <div
        className="card"
        style={{
          width: "100%",
          height: "100px",
          background: "black",
          display: "flex",
          position: "relative",
          bottom: "0",
          marginTop: "20%"
        }}
      >
        <div
          style={{
            marginTop: "10px",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        >
          <button
            className="bg-primary"
            style={{ marginRight: "20px", borderRadius: "10px" }}
          >
            <a
              href="https://www.linkedin.com/in/uwttn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin"
                style={{ margin: "20px", color: "white" }}
              ></i>
            </a>
          </button>
          <button
            className="bg-primary"
            style={{ marginRight: "20px", borderRadius: "10px" }}
          >
            <a
              href="https://github.com/Uwttn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-github"
                style={{ margin: "20px", color: "black" }}
              ></i>
            </a>
          </button>
        </div>
      </div>
     
    </body>
  );
}
