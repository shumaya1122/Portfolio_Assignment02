function Projects() {
  return (
    <main>
      <h1 className="page-heading">My Projects</h1>

      <p className="page-sub">
        Academic group and individual projects I have contributed to.
      </p>

      {/* Project 1 */}
      <article className="project">
        <div className="project-media">
          <img
            src={`${import.meta.env.BASE_URL}images/project1.jpeg`}
            alt="Smart Study Group Finder project image"
          />
        </div>

        <div className="project-body">
          <span className="badge">Group Project</span>

          <h2>Smart Study Group Finder</h2>

          <p>
            The <strong>Smart Study Group Finder</strong> is a course and
            section-based system designed to help Centennial College students
            find suitable study partners. The project focuses on helping
            students connect with other students who are taking similar
            courses or sections.
          </p>

          <p>
            The proposed system includes features such as{" "}
            <strong>
              student registration, profile creation, group searching, group
              joining, and group chat
            </strong>
            , giving students a structured way to find and communicate with
            potential study partners.
          </p>

          <p>
            <strong>My Role:</strong> I contributed to the project design,
            documentation, and explanations of major system functionalities. I
            also participated in developing and presenting the different ideas
            and system components.
          </p>

          <p>
            <strong>Outcome:</strong> The project resulted in a structured
            concept for a study-group matching system that could help students
            find suitable study partners based on their courses and sections.
          </p>
        </div>
      </article>

      {/* Project 2 */}
      <article className="project">
        <div className="project-media">
          <img
            src={`${import.meta.env.BASE_URL}images/project2.jpeg`}
            alt="AI-Enhanced Smart Library and Study System project image"
          />
        </div>

        <div className="project-body">
          <span className="badge">Group Project</span>

          <h2>AI-Enhanced Smart Library &amp; Study System</h2>

          <p>
            The{" "}
            <strong>
              AI-Enhanced Smart Library &amp; Study System
            </strong>{" "}
            builds on the concept of a study-group matching system by adding
            AI-assisted study and library-support features. The project was
            designed to provide students with additional tools to support their
            academic activities.
          </p>

          <p>
            The system includes functions for{" "}
            <strong>
              study-group creation, group joining, room booking, and resource
              recommendations
            </strong>
            , combining study-group support with library and study-related
            services.
          </p>

          <p>
            <strong>My Role:</strong> I supported software requirements
            documentation, use-case descriptions, workflow diagrams, and
            project presentation. I also contributed to organizing and
            explaining different system functionalities.
          </p>

          <p>
            <strong>Outcome:</strong> The project developed a broader study and
            library-support concept that combines group study functionality
            with room booking and resource recommendation features.
          </p>
        </div>
      </article>

      {/* Project 3 */}
      <article className="project">
        <div className="project-media">
          <img
            src={`${import.meta.env.BASE_URL}images/project3.jpeg`}
            alt="Colours of Bangladeshi Culture website screenshot"
          />
        </div>

        <div className="project-body">
          <span className="badge">Individual Web Project</span>

          <h2>Colours of Bangladeshi Culture</h2>

          <p>
            <strong>Colours of Bangladeshi Culture</strong> is an individual
            multi-page website created using <strong>HTML and CSS</strong>.
            The website presents information about different aspects of
            Bangladeshi culture, including clothing, festivals, and food.
          </p>

          <p>
            The website contains several connected pages, including{" "}
            <strong>
              Home, Cultural Topics, Contact, and Sitemap &amp; Credits
            </strong>
            . The information was organized into structured sections so
            visitors could easily navigate the different cultural topics.
          </p>

          <p>
            <strong>My Role:</strong> As an individual project, I was
            responsible for developing the website and organizing its content. I
            created the connected webpages and added internal navigation links
            between the different sections.
          </p>

          <p>
            <strong>Outcome:</strong> The project resulted in a structured
            multi-page cultural website that presents information about
            Bangladeshi clothing, festivals, and food culture in an organized
            and accessible format.
          </p>
        </div>
      </article>
    </main>
  );
}

export default Projects;