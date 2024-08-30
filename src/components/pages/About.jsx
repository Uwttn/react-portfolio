export default function About() {
  return (
    <>
      <div class="card" style={{ marginTop: "30px" }}>
        <h1 align="center" class="card bg-primary-subtle">
          About Me
        </h1>
        <p
          align="center"
          clas="card "
          style={{ marginTop: "10px", width: "100%", height: "auto" }}
        >
          Web developer with a psychology background specializing in creating
          intuitive and adaptable user interfaces. Earned a certificate in Full
          Stack Web Development from the University of Central Florida Coding
          Bootcamp. Attentive to detail and clarity are at the core of my
          designs and development. My strengths in teamwork and intuitive
          problem-solving are at the core of my ability to create effective and
          user-centered digital products.
        </p>
      </div>

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
        style={{
          margin: "10px",
          width: "90%",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          class="card bg-primary-subtle"
          align="center"
          style={{ marginTop: "10px", width: "40%", height: "auto"}}
        >
          <h1><strong>Psychology Background</strong></h1>
          <img src="src/components/images/The Journey Of Life.jpg" alt="The journey of life" />
          <br />
          <p><a href="https://www.linkedin.com/in/uwttn/">LinkedIn</a></p>
          <p><a href="https://github.com/Uwttn">GitHub</a></p>
        </div>
          <img src="src/components/images/graduation.jpg" class="card" align="center" style={{ width: '30%', height:'100%', display:'flex'}}/>
      </div>

        
      </div>

    </>
  );
}
