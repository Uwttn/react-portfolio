import "../css/about.css";

export default function About() {
  return (
    <>
      <div className="content">
          <br />
          <a href="assets/Resume 2024.09.29.pdf">
            <button>Download My Resume</button>
          </a>
        <div className="section">
          <h1>Passions</h1>
          <p>
            I'm a passionate software developer focusing on front-end
            development with a strong foundation in HTML, CSS, and JavaScript. I
            enjoy creating clean, efficient code that powers user-friendly
            applications, and I'm always looking to expand my skills.
          </p>

{/* Proficient with these languages */}
          <h1>Proficient in:</h1>
          <table>
          <tr>
            <td id="head">Technologies</td>
            <td id="head">Description</td>
          </tr>
          <tr>
            <td>HTML/CSS</td>
            <td>extensive experience working with these, focusing on clean code and styling across browsers.</td>
          </tr>
          <tr>
            <td>JavaScript</td>
            <td>worked with JavaScript for functionality, including dynamic elements like NavBars, clocks, and JSON-based data structures.</td>
          </tr>
          <tr>
            <td>Bootstrap</td>
            <td>Used Bootstrap for styling in my React portfolio.</td>
          </tr>
          <tr>
            <td>Node.js</td>
            <td>worked on backend projects using Node.js, specifically in conjunction with MongoDB and Apollo for GraphQL.</td>
          </tr>
          <tr>
            <td>GraphQL</td>
            <td>familiar with mutations for creating, updating, and removing entities like users, decks, and cards.</td>
          </tr>
          <tr>
            <td>MongoDB</td>
            <td>Working on improving skills with this database technology for backend development.</td>
          </tr>
          <tr>
            <td>Git</td>
            <td>Used GitHub for version control and have implemented functionality on my website, like the flip card with GitHub and LinkedIn logos.</td>
          </tr>
      </table>

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
