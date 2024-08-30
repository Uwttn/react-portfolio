export default function Home() {
  return (
    <div class="card" style={{ marginTop: "30px"}}>
      <h1 align="center" class="card bg-primary-subtle">
        Deployed Projects
      </h1>

      <div
        style={{
          margin: "10px",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          class="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/code-refactor/">
            <strong>code-refactor</strong>
          </a>
          <img src="src/components/images/refactor.png" />
        </div>

        <div
          class="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/portfolio/">
            <strong>portfolio</strong>
          </a>
          <img src="src/components/images/portfolio.png" alt="portfolio" />
        </div>

        <div
          class="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/payroll/">
            <strong>payroll</strong>
          </a>
          <img src="src/components/images/payroll.png" alt=" Portfolio" />
        </div>

        <div
          align="center"
          class="card bg-primary-subtle"
          style={{ marginTop: "20px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/blog/">
            <strong>blog</strong>
          </a>
          <img src="src/components/images/blog.png" alt="My  blog" />
        </div>
      </div>

      <div
        style={{
          margin: "10px",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <div
          class="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/tasks/">
            <strong>tasks</strong>
          </a>
          <img src="src/components/images/tasks.png" />
        </div>

        <div
          class="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://uwttn.github.io/weather/">
            <strong>weather</strong>
          </a>
          <img src="src/components/images/weather.png" alt="weather" />
        </div>

        <div
          class="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "20%", height: "auto" }}
        >
          <a href="https://www.youtube.com/watch?v=BEzvjQ_8fgY&list=PLk8XMm2RW3E87aiavU5ivWAPg0ldUqFru&index=5">
            <strong>readme-generator</strong>
          </a>
          <img src="src/components/images/readme.png" alt=" Portfolio" />
        </div>

        <div
          align="center"
          class="card bg-primary-subtle"
          style={{ marginTop: "20px", width: "20%", height: "auto" }}
        >
          <a href="https://www.youtube.com/watch?v=fIofu08UHdI&list=PLk8XMm2RW3E87aiavU5ivWAPg0ldUqFru&index=4">
            <strong>logo-generator</strong>
          </a>
          <img src="src/components/images/logo.png" alt="My  blog" />
        </div>
      </div>
    </div>
  );
}
