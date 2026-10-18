import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);

    console.log("Message captured from the contact form:", data);

    const firstName = data.firstName || "there";

    alert(
      "Thank you, " +
        firstName +
        "! Your message has been captured successfully."
    );

    navigate("/");
  }

  return (
    <main>
      <h1 className="page-heading">Get In Touch</h1>

      <p className="page-sub">
        Thank you for visiting my portfolio. If you would like to learn more
        about my projects, education, or technical skills, feel free to get in
        touch with me. I welcome the opportunity to connect and communicate
        about software development, web development, artificial intelligence,
        and technology-related projects.
      </p>

      {/* Contact information strip */}
      <section className="contact-strip">
        <h2>Contact Information</h2>

        <div className="item">
          <span className="label">Name</span>
          <strong>Shumaya Jannat Hera</strong>
        </div>

        <div className="item">
          <span className="label">Location</span>
          <strong>Toronto, Ontario</strong>
        </div>

        <div className="item">
          <span className="label">Phone</span>
          <a href="tel:4374454787">437-445-4787</a>
        </div>

        <div className="item">
          <span className="label">Email</span>
          <a href="mailto:mhera@my.centennialcollege.ca">
            mhera@my.centennialcollege.ca
          </a>
        </div>
      </section>

      {/* Interactive message form */}
      <section className="panel form-panel">
        <h2>Send Me a Message</h2>

        <form id="message-form" onSubmit={handleSubmit}>
          <div className="two-col">
            <div className="field">
              <label htmlFor="firstName">First Name *</label>

              <input
                type="text"
                id="firstName"
                name="firstName"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="lastName">Last Name *</label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="contactNumber">Contact Number *</label>

            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email Address *</label>

            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message *</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-solid">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;