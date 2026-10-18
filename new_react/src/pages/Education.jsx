function Education() {
  return (
    <main>
      <h1 className="page-heading">My Education</h1>

      <p className="page-sub">
        My academic journey and professional development.
      </p>

      {/* Timeline of qualifications */}
      <ul className="timeline">
        <li>
          <h2>
            Software Engineering Technology – Artificial Intelligence
            (Co-op) Advanced Diploma
          </h2>

          <p className="when">
            September 2025 – Present · Centennial College, Toronto, Ontario
          </p>

          <p>
            I am currently studying Software Engineering Technology –
            Artificial Intelligence at Centennial College. The program has
            provided me with knowledge and practical experience in programming,
            web development, software engineering, databases, and artificial
            intelligence.
          </p>

          <p>
            <strong>GPA:</strong> 4.12 / 4.5 (A)
          </p>

          <div className="chips">
            <span className="chip">Python Programming</span>
            <span className="chip">Unix/Linux OS</span>
            <span className="chip">Database Concepts (SQL)</span>
            <span className="chip">C# Programming</span>
            <span className="chip">Web Interface Design</span>
            <span className="chip">Client-Side Web Development</span>
            <span className="chip">Java Programming</span>
            <span className="chip">
              Software Engineering Fundamentals
            </span>
            <span className="chip">
              Software Requirements Engineering
            </span>
            <span className="chip">AI Systems Design</span>
            <span className="chip">Web Application Development</span>
            <span className="chip">
              Statistics &amp; Discrete Mathematics
            </span>
          </div>
        </li>

        <li>
          <h2>
            Bachelor of Business Administration – Finance (Partial Completion)
          </h2>

          <p className="when">
            2020 – 2022 · Independent University, Bangladesh, Dhaka
          </p>

          <p>
            I completed two years of coursework toward a four-year Bachelor of
            Business Administration program with a focus on Finance.
          </p>

          <p>
            <strong>Qualification:</strong> Partial Completion
          </p>
        </li>
      </ul>

      {/* Community & volunteer experience */}
      <section className="panel volunteer">
        <h2>Volunteer &amp; Community Experience</h2>

        <ul>
          <li>
            <span className="years">2016 – 2019</span>
            <span className="role">
              Computer Lab &amp; Academic Support Volunteer
            </span>
            <br />
            Dinajpur Govt. Girls' High School and Dinajpur Govt. College,
            Bangladesh
          </li>

          <li>
            <span className="years">2019 – 2023</span>
            <span className="role">
              Private Tutor — Mathematics, ICT &amp; Physics
            </span>
            <br />
            Bangladesh
          </li>

          <li>
            <span className="years">2017 – 2019</span>
            <span className="role">
              Blood Donation &amp; Community Support Volunteer
            </span>
            <br />
            Dinajpur, Bangladesh
          </li>

          <li>
            <span className="years">2020 – 2022</span>
            <span className="role">University Event Volunteer</span>
            <br />
            Independent University, Bangladesh, Dhaka
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Education;