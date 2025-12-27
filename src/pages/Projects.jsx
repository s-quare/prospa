import { useTheme } from "../context/useTheme";
import Socials from "../components/Socials";
import MessageBox from "../components/MessageBox";
const Projects = () => {
  const { projectData, isDark } = useTheme();

  return (
    <div className="px-3" style={{overflowX: 'hidden'}}>
      <h4  data-aos='fade-up' className="mt-5 text-secondary display-5 mb-4 blue fw-bold">Projects</h4>
      <p  data-aos='fade-up' className="fw-bold">
        A collection of projects that showcase my frontend development journey.
        Each represents a different challenge, from API integration to user
        experience design.
      </p>
      <p  data-aos='fade-left' className="f-10 text-secondary fw-bold">
        x4 • React • JavaScript • Modern Web
      </p>
      <hr />

      <div>
        {Object.values(projectData).map((item) => (
          <div
           data-aos='fade-up'
            data-aos-delay={50}
            key={item.id}
            className="d-md-grid mb-5 mt-5 gap-4 pb-5"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div
              className="bg-img"
              style={{
                minHeight: 350,
                maxWidth: 400,
                borderRadius: "0 0 15px 20px",
                backdropFilter: "blur(12px)",
                backgroundImage: `linear-gradient(to top, ${
                  isDark
                    ? "rgba(0,0,0,1), rgba(0,0,0,0.4), rgba(0,0,0,0))"
                    : "rgba(255,255,255,1), rgba(255,255,255,0.1), rgba(255,255,255,0.1), rgba(255,255,255,0))"
                }, url(/images/${item.id}.png)`,
              }}
            ></div>
            <div className="p-3">
              <p className="f-10 fw-bold text-secondary mt-2 mb-0">
                {item.category}
              </p>
              <h5 className="fw-bold">{item.name}</h5>
              <p className="blue fw-bold ">{item.tagline}</p>
              <p className="f-12 fw-bold mb-2">{item.description}</p>
              <ul className="f-12" style={{ listStyle: "none" }}>
                <p className="mb-1 fw-bold">Key features</p>
                {item.keyFeatures.map((feature, index) => (
                  <li key={index} className="fw-bold f-10">
                    <i className="bi bi-star blue me-1 "></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="d-flex gap-3 flex-wrap ">
                {item.techStack.map((stack, index) => (
                  <button
                    className={`f-10 px-2 py-1 rounded-3 ${
                      isDark ? "bg-dark text-white" : "bg-white shadow"
                    }`}
                    key={index}
                  >
                    <span className="d-inline-flex gap-1 align-items-center">
                      <i
                        style={{ color: stack.color || "red" }}
                        className={`${stack.icon} f-14`}
                      ></i>
                      {stack.name}
                    </span>
                  </button>
                ))}
              </div>
              <p className="f-12 fw-bold mt-2 text-secondary">
                <span className="blue fw-bold">Drive: </span>
                {item.impact}
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href={item.liveLink} target="_blank">
                  <button className="bg-blue rounded py-1 px-4 f-12">
                    <i className="bi bi-share f-10 me-1"></i> View Live
                  </button>
                </a>
                <a href={item.gitLink} target="_blank">
                  <button
                    className={`f-12 rounded py-1 px-4 ${
                      isDark
                        ? "dark-theme border shadow-light"
                        : "light-theme shadow"
                    }`}
                  >
                    <i className="bi bi-github me-1"></i> Git Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div  data-aos='fade-up'>
        <p className="fw-bold text-secondary mb-2">Have a project in mind?</p>
        <p className="mb-2">
          I'm always interested in new challenges and opportunities to build
          meaningful web applications. <br />
          What I Can Help With:
        </p>
        <ul className="f-12 fw-bold">
          {[
            "React application development",
            "API integration projects",
            "UI/UX improvements",
            "Frontend architecture",
            "Performance optimization",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="mb-1">
          Let's discuss how I can contribute to your next project. <br /> Start
          a conversation{" "}
        </p>
        <div className="d-flex gap-3 py-2 ps-3 flex-wrap fs-4 mb-3">
          <Socials />
        </div>
        <p>You can also leave a message or feedback below</p>
        <div className="pb-5">
            <MessageBox />
        </div>
      </div>
    </div>
  );
};

export default Projects;
