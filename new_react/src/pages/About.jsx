function About() {
  return (
    <main>
      <h1 className="page-heading">About Me</h1>

      <p className="page-sub">
        A quick introduction to who I am and what I do.
      </p>

      <section className="panel about">
        <figure className="about-figure">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
            alt="Photo of Shumaya Jannat Hera"
          />

          <figcaption>Shumaya Jannat Hera</figcaption>
        </figure>

        <div className="about-body">
          <h2>Shumaya Jannat Hera</h2>

          <p>
            I am currently studying{" "}
            <strong>
              Software Engineering Technology – Artificial Intelligence
              (Co-op) Advanced Diploma
            </strong>{" "}
            at Centennial College in Toronto, Ontario. My studies have given
            me an opportunity to develop a foundation in programming, web
            development, databases, software engineering, and artificial
            intelligence.
          </p>

          <p>
            I have foundational knowledge of{" "}
            <strong>
              Python, C#, Java, HTML, CSS, JavaScript, SQL, Oracle, machine
              learning, and AI systems design
            </strong>
            . I am also familiar with software requirements, system design,
            use-case diagrams, workflow documentation, testing, debugging, and
            web development.
          </p>

          <p>
            Through academic group and individual projects, I have gained
            practical experience in designing systems, documenting
            requirements, creating diagrams, developing websites, and
            presenting project ideas. These projects have helped me strengthen
            my teamwork, communication, problem-solving, and technical skills.
          </p>

          <p>
            I enjoy learning new technologies and applying my knowledge to
            practical projects. My goal is to continue developing my skills in
            software engineering and artificial intelligence and use them to
            create useful and user-focused technology solutions.
          </p>

          <p>
            <a
              className="btn btn-ghost"
              href={`${import.meta.env.BASE_URL}files/Shumaya_Resume.pdf`}
              download
            >
              Download My Resume (PDF)
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;