function Services() {
  return (
    <main>
      <h1 className="page-heading">My Services</h1>

      <p className="page-sub">
        Areas where I can contribute and keep growing.
      </p>

      {/* Programming */}
      <section className="panel service">
        <img
          src={`${import.meta.env.BASE_URL}images/programming.png`}
          alt="Programming"
        />

        <div>
          <h2>Programming</h2>

          <p>
            I have foundational knowledge of{" "}
            <strong>Python, C#, and Java</strong> and can apply programming
            concepts to academic and software development projects. I am
            interested in continuing to develop my programming skills and
            building practical software solutions.
          </p>
        </div>
      </section>

      {/* Web Development */}
      <section className="panel service">
        <img
          src={`${import.meta.env.BASE_URL}images/webDevelopment.png`}
          alt="Web Development"
        />

        <div>
          <h2>Web Development</h2>

          <p>
            I have experience working with{" "}
            <strong>HTML, CSS, and JavaScript</strong> and have created a
            multi-page website using HTML and CSS. I can develop structured
            webpages with organized content and internal navigation.
          </p>
        </div>
      </section>

      {/* AI & Machine Learning */}
      <section className="panel service">
        <img
          src={`${import.meta.env.BASE_URL}images/AiMAchineLearning.png`}
          alt="AI and Machine Learning"
        />

        <div>
          <h2>AI &amp; Machine Learning</h2>

          <p>
            I have foundational knowledge of{" "}
            <strong>
              artificial intelligence concepts, machine learning, and AI
              systems design
            </strong>{" "}
            through my academic studies. I am interested in applying AI
            concepts to practical software and technology projects.
          </p>
        </div>
      </section>

      {/* Database Development */}
      <section className="panel service">
        <img
          src={`${import.meta.env.BASE_URL}images/database.png`}
          alt="Database Development"
        />

        <div>
          <h2>Database Development</h2>

          <p>
            I have knowledge of{" "}
            <strong>SQL, Oracle, and database concepts</strong> as part of my
            software engineering studies. I understand the importance of
            organizing and managing data within software systems.
          </p>
        </div>
      </section>

      {/* Software Requirements & System Design */}
      <section className="panel service">
        <img
          src={`${import.meta.env.BASE_URL}images/software.png`}
          alt="Software Requirements and System Design"
        />

        <div>
          <h2>Software Requirements &amp; System Design</h2>

          <p>
            I have experience working with{" "}
            <strong>
              software requirements, system design, use-case diagrams,
              workflow diagrams, and project documentation
            </strong>
            . I have applied these concepts in academic group projects to
            describe and organize system functionality.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Services;