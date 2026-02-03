import { useTheme } from "../context/useTheme";
import Socials from "../components/Socials";
import MessageBox from "../components/MessageBox";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiNextdotjs,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import ResumeButtons from "../components/ResumeButtons";

const About = () => {
  const { isDark } = useTheme();
  const skills = [
    { icon: <SiHtml5 size={25} color="#E34F26" />, name: "HTML5" },
    { icon: <SiCss3 size={25} color="#1572B6" />, name: "CSS3" },
    { icon: <SiJavascript size={25} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiReact size={25} color="#61DAFB" />, name: "React" },
    { icon: <SiBootstrap size={25} color="#7952B3" />, name: "Bootstrap" },
    { icon: <SiTailwindcss size={25} color="#06B6D4" />, name: "Tailwind" },
    { icon: <SiFramer size={25} color="#0055FF" />, name: "Framer" },
    { icon: <SiGit size={25} color="#F05032" />, name: "Git" },
    { icon: <SiNextdotjs size={25} color="#444444" />, name: "Next.js" },
    { icon: <SiFirebase size={25} color="#FFCA28" />, name: "Firebase" },
    { icon: <SiSupabase size={25} color="#3ECF8E" />, name: "Supabase" },
  ];

  return (
    <div className="fw-bold px-3" style={{ overflowX: "hidden" }}>
      <h4 className="display-4 py-3 fw-bold">
        <span data-aos="fade-left" className="d-block">
          From
        </span>
        <span data-aos="fade-left" data-aos-delay={200} className="d-block">
          Curiosity
        </span>
        <span data-aos="fade-left" data-aos-delay={300} className="d-block">
          To
        </span>
        <span
          data-aos="fade-left"
          data-aos-delay={400}
          className="blue d-block"
        >
          Code.
        </span>
      </h4>
      <div data-aos="fade-up" data-aos-delay={1200}>
        <p className="f-14 fw-normal">
          My entry into frontend development was driven by a fundamental
          curiosity about the architecture of the web, an obsession with how
          granular components converge to form a cohesive digital experience.
          What began as an exploration of the 'how' has evolved into a dedicated
          pursuit of engineering intuitive interfaces and high-impact solutions.
          <br />
          My name is Ebube Prosper, and this is the evolution of my craft.
        </p>
        <p className="mb-2 mt-3 f-10 text-secondary">__The path so far</p>
        <p className="f-14 fw-normal mb-2">
          Early 2024, Took my first steps into web development, starting with
          HTML/CSS fundamentals and building simple static sites. Discovered
          React and fell in love with component-based architecture. Built
          Synergy Kithause as my first substantial React project to understand
          state management and modern JavaScript. <br />
        </p>
        <p className="f-14 fw-normal mb-1">
          <span className="fw-bold">2025 - Building Solutions. </span>
          Transitioned from learning projects to building applications that
          solve actual needs:
        </p>
        <ul className="f-14 fw-normal">
          {[
            "Created WhisperIn to address anonymous communication needs",
            "Built TonesFlex to explore API integration creatively",
            "Developed multiple responsive interfaces, honing UI/UX skills",
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="f-14 fw-normal">
          <span className="text-secondary">Present - Continuous Growth. </span>
          Currently deepening my expertise in Next.js, TypeScript, and advanced
          React patterns while seeking opportunities to contribute to meaningful
          projects.
        </p>
        <div className="py-2">
          <ResumeButtons />
        </div>
        <div className=" mt-5 mb-2 d-flex align-items-center gap-3">
          <i className="fa-solid fa-code blue" style={{ fontSize: 40 }}></i>
          <h3 className="fw-bold text-secondary">My Development Ethos</h3>
        </div>
        <p className="f-14 fw-normal max-500">
          I believe great software is built at the intersection of logic and
          empathy. Here is the framework I use to bring ideas to life.
        </p>
        <div className="flex-scroll gap-5">
          {[
            {
              id: 1,
              title: "Problem-First Mindset",
              description:
                "I start by understanding what needs solving, not what needs coding. Every feature should answer a user need or solve a pain point.",
              icon: "bi bi-lightbulb",
            },
            {
              id: 2,
              title: "Clean & Maintainable",
              description:
                "Code is read more than it's written. I prioritize readability, proper documentation, and scalable architecture.",
              icon: "bi bi-layers",
            },
            {
              id: 3,
              title: "User-Centered Execution",
              description:
                "The best interfaces disappear. I build experiences that feel intuitive, responsive, and delightful to use.",
              icon: "bi bi-fingerprint",
            },
            {
              id: 4,
              title: "Continuous Learning",
              description:
                "The frontend landscape evolves rapidly. I stay current through building, experimenting, and community engagement.",
              icon: "bi bi-infinity",
            },
          ].map((item) => (
            <div
              key={item.id}
              style={{ border: "2px solid dimgray", maxWidth: 300 }}
              className={`${
                isDark ? "shadow-lite" : "shadow border"
              } p-3 text-center rounded-4`}
            >
              {<i className={`fs-1 ${item.icon}`}></i>}
              {<h4 className="fw-bold mb-4">{item.title}</h4>}
              {<p className="f-12 fw-normal">{item.description}</p>}
            </div>
          ))}
        </div>

        <div>
          <p className=" mt-4 pt-2 ps-2 fw-bold blue">Tools I Build With</p>
          <>
            {[
              [
                "Core Technologies",
                "Next.Js • React • JavaScript (ES6+) • HTML5 • CSS3",
                "Modern frameworks and the foundational web technologies that power them.",
              ],
              [
                "Styling & UI",
                "Tailwind CSS, Daisy, Bootstrap",
                "Creating layouts that work beautifully across all devices and screen sizes.",
              ],
              [
                "Development Tools",
                "Git • GitHub • VS Code • Chrome DevTools • npm/yarn",
                "The workflow and tools that ensure quality, collaboration, and efficiency.",
              ],
              [
                "Currently Mastering",
                "Next.js • TypeScript • Advanced React Patterns",
                "Modern frameworks and the foundational web technologies that power them.Expanding my toolkit to build faster, more type-safe applications.",
              ],
            ].map((item, index) => (
              <div className="px-2" key={index}>
                <hr />
                <p className="mb-1">{item[0]}</p>
                <p className="text-secondary mb-1 f-12">{item[1]}</p>
                <p className="fw-normal mb-1">{item[2]}</p>
              </div>
            ))}
          </>
        </div>

        <div className="marquee-container position-relative">
          <div className="marquee-content">
            {skills.map((skill, index) => (
              <div
                key={`skill-1-${index}`}
                className="d-flex align-items-center gap-2"
              >
                {skill.icon}
                <span className="fw-bold small">{skill.name}</span>
              </div>
            ))}
            
            {/* double mapping */}
            {skills.map((skill, index) => (
              <div
                key={`skill-2-${index}`}
                className="d-flex align-items-center gap-2"
              >
                {skill.icon}
                <span className="fw-bold small">{skill.name}</span>
              </div>
            ))}
          </div>
          <div
            className="position-absolute w-100 h-100"
            style={{
              top: 0,
              right: 0,
              backgroundImage: isDark
                ? "linear-gradient(to right, rgba(0,0,0,1), transparent, transparent, transparent, transparent, transparent, rgba(0,0,0,1))"
                : "linear-gradient(to right, rgba(255,255,255,1), transparent, transparent, transparent, transparent, transparent, rgba(255,255,255,1))",
            }}
          ></div>
        </div>

        <hr className="mt-2 mb-5" />

        <div>
          <p className="pt-3">How I Learn & Grow</p>
          {[
            [
              "Project-Based Learning",
              "I believe in learning by building. Each project in my portfolio represents not just a final product, but a learning journey with specific goals and takeaways.",
            ],
            [
              "Community Engagement",
              "Active participation in developer communities, code reviews, and open-source contributions (when possible).",
            ],
            [
              "Structured Experimentation",
              "Dedicating time to exploring new technologies through focused mini-projects and coding challenges.",
            ],
            [
              "Documentation & Reflection",
              "Maintaining detailed notes on challenges overcome and patterns discovered.",
            ],
          ].map((item, index) => (
            <div key={index}>
              <p className="mb-1 d-flex align-items-center">
                <i className="fa-solid fa-circle blue f-8 me-1"></i>
                {item[0]}
              </p>
              <p className="fw-normal f-12">{item[1]}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="f-12 fw-normal mt-5">
            Currently, I am focused on deepening my expertise in Next.js,
            specifically by building server-rendered applications and exploring
            the expansive full-stack capabilities within the React ecosystem. To
            ensure the reliability of my builds, I am simultaneously advancing
            my TypeScript skills, prioritizing the development of robust,
            type-safe code that enhances the overall developer experience.
            Beyond my personal projects, I am actively looking for opportunities
            to contribute to open-source initiatives as a way to give back to
            the developer community. My ultimate goal right now is to join a
            collaborative environment where I can apply these skills to
            real-world challenges and grow alongside an experienced team.
          </p>
        </div>

        <div className="py-4 fw-normal">
          <p className="mb-2">Let's connect today! Reach out via socials</p>
          <div className="d-flex mb-4 fs-3 gap-3">
            <Socials />
          </div>
          <p className="mb-0">Leave a message or feedback below</p>
          <div className="">
            <MessageBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
