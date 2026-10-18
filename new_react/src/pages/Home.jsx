import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* Welcome section */}
      <section className="hero">
        <div className="hero-copy">
          <h1>Welcome to My Personal Portfolio</h1>

          <p>
            Hello, and welcome! I'm{" "}
            <strong>Shumaya Jannat Hera</strong>, a Software Engineering
            Technology – Artificial Intelligence student at Centennial College
            in Toronto, Ontario.
          </p>

          <p>
            This portfolio provides an overview of my educational background,
            technical skills, academic projects, and areas of interest. Here,
            you can explore some of the projects I have worked on and learn
            more about my experience in programming, web development,
            artificial intelligence, databases, and software design.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-solid" to="/about">
              About Me
            </Link>

            <Link className="btn btn-ghost" to="/projects">
              View My Projects
            </Link>

            <Link className="btn btn-ghost" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>

        <figure className="hero-figure">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
            alt="Photo of Shumaya Jannat Hera"
          />
        </figure>
      </section>

      {/* Mission statement */}
      <section className="mission">
        <h2>My Mission</h2>

        <p>
          My mission is to continuously develop my knowledge and skills in
          software engineering and artificial intelligence while creating
          practical and meaningful technology solutions. I aim to apply what I
          learn through academic projects and hands-on development while
          improving my programming, problem-solving, system design, and
          documentation skills.
        </p>

        <p>
          I also want to continue learning new technologies and gain experience
          that will help me contribute effectively to future software and AI
          projects.
        </p>
      </section>
    </main>
  );
}

export default Home;