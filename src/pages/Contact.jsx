import { useTheme } from "../context/useTheme";
import Socials from "../components/Socials";
import MessageBox from "../components/MessageBox";
const Contact = () => {
  const { socialLinks, copyToClipboard } = useTheme();

  const scrollToStuff = () => {
    const target = document.querySelector(".ScrollHere");
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ overflowX: "hidden" }} className="p-4">
      <h6
        data-aos="fade-left"
        className="display-4 text-secondary fw-bold mb-4"
      >
        Let's Create Something Together
      </h6>
      <p data-aos="fade-up" className="f-12 fw-bold">
        I help bring ideas to life through clean code and thoughtful frontend
        solutions. Whether you have a project in mind or just want to connect,
        I'd love to hear from you.
      </p>
      <div data-aos="fade-up" className="mb-1 fw-bold">
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-circle f-8 me-1 text-success"></i>
          <span className="text-secondary">
            Currently Available for New Projects
          </span>
        </div>
        <span className="d-block mt-3">I'm open to:</span>
      </div>

      <ul className="f-12 fw-bold" style={{ listStyle: "none" }}>
        {[
          "React development work",
          "Frontend feature implementation",
          "UI/UX improvements",
          "Collaborative opportunities",
          "Small to medium web applications",
        ].map((item, index) => (
          <li data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index}>
            <i className="fa-solid text-success fa-check me-1 f-8"></i>
            {item}
          </li>
        ))}
      </ul>

      <h6
        data-aos="fade-up"
        style={{ scrollMarginTop: 70 }}
        className="ScrollHere fw-bold mt-4 blue"
      >
        Get In-Touch
      </h6>

      <div data-aos="fade-up" className="mt-3">
        <span className="d-block">Email</span>
        <div className="d-flex fw-bold gap-2">
          <span>{socialLinks.gmail.key}</span>
          <span>
            <i
              onClick={() => copyToClipboard(socialLinks.gmail.key)}
              className="fa-solid fa-copy cursor"
            ></i>
          </span>
          <a
            style={{ unset: "all" }}
            className="cursor text-reset"
            href={socialLinks.gmail.link}
            target="_blank"
          >
            <span>
              <i className={`cursor ${socialLinks.gmail.iconClass}`}></i>
            </span>
          </a>
        </div>
      </div>

      <div data-aos="fade-up" className="fw-bold">
        <p className="mb-1 mt-3">Start a quick chat</p>
        <div className="d-flex gap-3 fs-4 blue">
          <Socials />
        </div>
      </div>

      <div data-aos="fade-up" className="fw-bold">
        <p className="mt-4 mb-1">Or send me a message</p>
        <div className="my-3">
          <MessageBox />
        </div>
      </div>

      <div data-aos="fade-up">
        <p className="monospace mb-1 mt-5 pt-3 fw-bold">What next?</p>
        <span className="d-block mb-2">After you reach out: </span>
        <ol className="f-12">
          {[
            [
              "Initial Response",
              "I'll acknowledge your message within 24 hours",
            ],
            [
              "Discovery Call",
              "We'll schedule a 15-30 minute chat to discuss your needs",
            ],
            [
              "Proposal & Timeline",
              "I'll provide a clear scope, timeline, and investment",
            ],
            [
              "Collaboration Begins",
              "Regular updates and transparent communication throughout",
            ],
          ].map((item, index) => (
            <li key={index} className="mb-2">
              {" "}
              <span className="fw-bold">{item[0]}</span> <br /> {item[1]}.
            </li>
          ))}
        </ol>
      </div>

      <div data-aos="fade-up" className="mt-4 fw-bold">
        <p className="mb-2 monospace">Project preferences</p>
        <ul className="f-12">
          {[
            ["React Applications", "SPAs, dashboards, interactive interfaces"],
            ["API Integrations", "Third-party services, data visualization"],
            [
              "Responsive Development",
              "Mobile-first, cross-browser compatible",
            ],
            ["Performance Optimization", "Fast loading, smooth interactions"],
          ].map((item, index) => (
            <li className="mb-2" key={index}>
              <span>{item[0]}</span> <br />{" "}
              <span className="fw-normal">{item[1]}.</span>
            </li>
          ))}
        </ul>
      </div>

      <div data-aos="fade-up">
        <p className="text-secondary mb-2 mt-4 fw-bold">
          Ready to Start Your Project?
        </p>
        <p className="fw-bold f-12">
          The best projects begin with a conversation. Let's discuss how I can
          help bring your vision to life. Prefer asynchronous communication?
          Email works perfectly too. Let's get connected
        </p>
        <button className="bg-blue" onClick={scrollToStuff}>
          Get Started
        </button>
      </div>

      <div className="mt-5 mb-2 text-center text-secondary f-10 fw-bold">
        <p>
          ©{new Date().getFullYear()} <span className="blue">Prospa</span>. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
