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
      <p className="f-14 mb-5">
        I help bring ideas to life through clean code and thoughtful frontend
        solutions. Whether you have a project in mind or just want to connect,
        I'd love to hear from you.
      </p>
      <div className="mb-1 fw-bold">
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-circle f-8 me-1 text-success"></i>
          <span className="text-secondary">
            Currently Available for New Projects
          </span>
        </div>
        <span className="d-block mt-1 fw-normal">I'm open to:</span>
      </div>

      <ul className="f-14" style={{ listStyle: "none" }}>
        {[
          "React development work",
          "Next.Js Full Stack web apps",
          "Frontend feature implementation",
          "UI/UX improvements",
          "Collaborative opportunities",
          "Small to medium web applications",
        ].map((item, index) => (
          <li key={index}>
            <i className="fa-solid text-success fa-check me-1 f-8"></i>
            {item}
          </li>
        ))}
      </ul>

      <h6
        style={{ scrollMarginTop: 70 }}
        className="ScrollHere fw-bold mt-2 blue"
      >
        Get In-Touch
      </h6>

      <div className="mt-1">
        <span className="d-block fw-bold">Email</span>
        <div className="d-flex gap-2">
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

      <div className="">
        <p className="mb-1 mt-3">Or Start a quick chat</p>
        <div className="d-flex gap-3 fs-4 blue">
          <Socials />
        </div>
      </div>

      <div className="">
        <p className="mt-4 mb-1">Or send me a message</p>
        <div className="my-3">
          <MessageBox />
        </div>
      </div>

      <div>
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

      <div className="mt-4 fw-bold">
        <p className="mb-2 monospace">Project preferences</p>
        <ul className="f-12">
          {[
            [
              "Full-Stack React / Next.Js Applications",
              "Modern SPAs, dashboards, admin panels, and interactive user experiences",
            ],
            [
              "API & Third-Party Integrations",
              "REST/GraphQL, real-time data, authentication flows, and external service connections",
            ],
            [
              "Responsive & Mobile-First Design",
              "Cross-device layouts, accessibility, and performance across browsers and screen sizes",
            ],
            [
              "Performance & Optimization",
              "Fast load times, code splitting, lazy loading, memoization, and smooth animations",
            ],
            [
              "Backend & Infrastructure",
              "Firebase, Node.js/Express, serverless functions, authentication, and database design",
            ],
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
        <p className="f-14">
          The best projects begin with a conversation. Let's discuss how I can
          help bring your vision to life. Prefer asynchronous communication?
          Email works perfectly too. Let's get connected
        </p>
        <button className="bg-blue mt-2" onClick={scrollToStuff}>
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
