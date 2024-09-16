
import "../css/flip.css";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export default function MySafari() {
  return (
    <div className={isSafari ? "safari-styles" : "default-styles"}>
      <div className="logo-container">
        <a href="https://www.linkedin.com/in/uwttn/">
          <img className="contact" src="/assets/LinkedIn.png" />
        </a>
        <a href="https://github.com/Uwttn">
          <img className="contact" src="/assets/github.png" />
        </a>
      </div>
    </div>
  );
}
