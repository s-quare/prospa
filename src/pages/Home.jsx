import { useTheme } from "../context/useTheme";
import TypingAnimation from "../components/TypingAnimation";
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
} from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const { isDark, projectData } = useTheme();
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isTyping) {
      document.documentElement.style.scrollSnapType = "none";
    } else {
      document.documentElement.style.scrollSnapType = "y mandatory";
    }
  }, [isTyping]);

  return (
    <div>
      <div
        className="position-relative d-grid"
        style={{
          minHeight: "calc(100vh - 70px)",
          placeItems: "center",
          scrollSnapAlign: "start",
          scrollMarginTop: 70,
          overflow: "hidden",
        }}
      >
        <img
          src="/images/gradient.png"
          className="Mental-Img max-350"
          style={{
            width: "60%",
            filter: "blur(10px)",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
        <div className="position-relative text-center">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className={`display-4 fw-bold monospace`}
          >
            Prospa
          </h1>
          <p className={`fw-bold monospace ${!isDark && "text-muted"} `}>
            <TypingAnimation />
          </p>
        </div>
      </div>

      <div
        style={{
          scrollSnapAlign: "start",
          scrollMarginTop: 70,
          minHeight: "calc(100vh - 70px)",
          placeItems: "center",
          overflowX: "hidden",
        }}
        className="d-grid px-3"
      >
        <div className={`text-center`}>
          <p data-aos="fade-up" className="text-secondary f-12 fw-bold">
            Prospa | Frontend Developer
          </p>
          <h1 data-aos="flip-up" className="display-5 fw-bold blue">
            Building Interactive Experiences That Connect People.
          </h1>
          <div data-aos="fade-up">
            <p className={`px-4 f-10 fw-bold mt-4 ${!isDark && "text-muted"}`}>
              I transform ideas into interactive web applications using React.
              Currently focused on creating seamless user experiences while
              exploring Next.js and modern frontend patterns.
            </p>
          </div>
          <div className="d-flex gap-3 w-100 justify-content-center mt-5">
            <button
              data-aos="fade-right"
              data-aos-delay="1000"
              className="bg-blue f-12 rounded-3"
              onClick={() => navigate("/projects")}
            >
              Projects
            </button>
            <button
              data-aos="fade-left"
              data-aos-delay="1000"
              className="bg-white shadow f-12 rounded-3"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          scrollSnapAlign: "start",
          scrollMarginTop: 70,
          overflowX: "hidden",
        }}
        className="others"
      >
        {/* About me */}
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "2fr 5fr", gap: 4 }}
        >
          <div
            className="d-grid"
            data-aos="zoom-in"
            style={{ placeItems: "start center" }}
          >
            <img
              src="/images/person.png"
              className="w-75 shadow rounded-pill"
              style={{ aspectRatio: "1/1" }}
            />
          </div>

          <div className="d-grid" style={{ placeItems: "center" }}>
            <div>
              <h5 data-aos="fade-up" className="fw-bold">
                About Me
              </h5>
              <p
                data-aos="fade-up"
                data-aos-delay={300}
                className="f-12 fw-bold text-secondary"
              >
                <span className="d-block monospace mb-2 f-14">Prospa</span>
                I'm a frontend developer passionate about creating intuitive web
                experiences. My approach combines clean code with user-centered
                design, always aiming to build solutions that are both
                functional, responsive and delightful to use. <br />
                When I'm not coding, exploring beauty of lines through sketches
                while vibing to music or doing movies. <br />
                <span
                  onClick={() => navigate("/contact")}
                  className="blue cursor"
                >
                  More about me
                </span>
              </p>
              <p data-aos="fade-left" className="f-16 fw-bold">
                Skills
              </p>

              <div className="d-flex gap-2 flex-wrap">
                <SiHtml5 title="HTML5" size={20} color="#E34F26" />
                <SiCss3 title="CSS3" size={20} color="#1572B6" />
                <SiJavascript
                  title="ES6 JavaScript"
                  size={20}
                  color="#F7DF1E"
                />
                <SiReact title="React" size={20} color="#61DAFB" />
                <SiBootstrap title="Bootstrap" size={20} color="#7952B3" />
                <SiTailwindcss title="Tailwind" size={20} color="#06B6D4" />
                <SiFramer title="Framer Motion" size={20} color="#0055FF" />
                <SiGit title="Git" size={20} color="#F05032" />
              </div>

              <p className="fw-bold my-3 f-10">
                Currently learning:{" "}
                <span className="text-secondary">
                  Next.js • TypeScript • Advanced React Patterns
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* projects */}

        {/* featured project WhisperIn */}
        <div className="w-100 px-3 pt-3 fw-bold">
          <h5 className="mb-3 fw-bold f-10 text-secondary">
            <i className="bi bi-collection-fill"></i> Recent Projects
          </h5>
          <h3 data-aos="fade-up" className="my-2 fw-bold blue">
            WhisperIn
          </h3>
          <p data-aos="fade-up" className="text-secondary f-12 mb-1">
            <i className="bi bi-chat-dots-fill me-1"></i>
            Anonymous Messaging Platform
          </p>
          <button
            style={{
              backgroundColor: "rgba(70, 130, 180,0.2)",
            }}
            data-aos="fade-up"
            className="blue mt-2 mb-3 shadow fw-bold f-10 py-1 px-2 rounded-pill d-flex align-items-center"
          >
            <i className="fa-solid fa-circle f-8 me-1"></i>
            <span>Featured Project</span>
          </button>
          <p data-aos="fade-up" className="f-12">
            A privacy-focused messaging application that allows users to receive
            anonymous feedback. Implemented real-time features and SEO
            optimization to appear in Google search results.
          </p>
          <ul className="ps-1 f-10 mb-1" style={{ listStyle: "none" }}>
            <span className="d-block mb-1">This project features - </span>
            {[
              "User Authentication & Profiles",
              "Real-time Messaging",
              "SEO Optimized (Google Indexed)",
              "Responsive React Application",
            ].map((item, index) => (
              <li
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 150}
                key={index}
              >
                <i className="fa-solid fa-check me-1 blue"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2" data-aos="fade-up">
            <a href={projectData.whisperin.liveLink} target="_blank">
              <button className="px-2 f-12 fw-bold" style={{ color: "purple" }}>
                Try WhisperIn
              </button>
            </a>
            <a href={projectData.whisperin.gitLink} target="_blank">
              <button className="blue px-2 f-12 fw-bold">
                Code repository
              </button>
            </a>
          </div>
        </div>

        {/* tonesFlex */}
        <div className="w-100 px-3 pt-4 fw-bold">
          <h3 data-aos="fade-up" className="my-2 fw-bold blue">
            TonesFlex
          </h3>
          <p data-aos="fade-up" className="text-secondary f-12 mb-1">
            <i className="bi bi-chat-dots-fill me-1"></i>
            AI-Powered Mood-to-Music Playlist Curator
          </p>
          <p data-aos="fade-up" className="f-12">
            An intelligent music discovery platform that translates moods,
            keywords, or artists into personalized Spotify playlists. Using
            natural language processing to bridge emotional states with perfect
            musical matches.
          </p>
          <ul className="ps-1 f-10 mb-1" style={{ listStyle: "none" }}>
            <span className="d-block mb-1">This project features - </span>
            {[
              "Natural Language Mood Interpretation",
              "Spotify API Integration",
              "Intelligent Playlist Curation",
              "One-Click Spotify Playlist Export",
              "Responsive Music Discovery Interface",
            ].map((item, index) => (
              <li
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 200}
                key={index}
              >
                <i className="fa-solid fa-check me-1 blue"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex gap-2">
            <a href={projectData.tonesflex.liveLink} target="_blank">
              <button className="px-2 f-12 fw-bold text-success">
                Open TunesFlex
              </button>
            </a>
            <a href={projectData.tonesflex.gitLink} target="_blank">
              <button className="blue px-2 f-12 fw-bold">
                Code repository
              </button>
            </a>
          </div>
          <button
            onClick={() => navigate("/projects")}
            className={`f-12 py-1 my-4 ${
              isDark ? "light-theme" : "dark-theme"
            }`}
          >
            View Projects
          </button>
        </div>

        <div className="ps-2 mt-4 fw-bold f-12">
          <h4 className="fw-bold blue">Let's work together</h4>
          <p className="mb-1">
            Interested in building something awesome? I'm down for freelance
            projects and open to new opportunities.
          </p>
          <ul className="ps-3" style={{ listStyle: "none" }}>
            <span className="mb-1">I'm currently available for: </span>
            {[
              "React development projects",
              "Frontend feature implementation",
              "UI/UX improvements",
              "Collaborative opportunities",
            ].map((item, index) => (
              <li key={index}>
                {" "}
                <i className="fa-solid fa-check blue f-10 me-1"></i> {item}
              </li>
            ))}
          </ul>
          <p className="mb-1">
            Get in touch to discuss your project or just say hello!
          </p>
          <div className="d-flex gap-3 f-16 ps-4">
            <Socials />
          </div>
          <div
            onFocus={() => setIsTyping(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsTyping(false);
              }
            }}
          >
            <MessageBox />
          </div>
          <div className="py-4" />
        </div>
      </div>
      {/* others end */}
    </div>
  );
};

export default Home;
