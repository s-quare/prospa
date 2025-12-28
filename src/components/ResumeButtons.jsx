import { useTheme } from "../context/useTheme";
const ResumeButtons = () => {
  const { isDark } = useTheme();

  const resumeUrl = "/ProspaResume.pdf";

  return (
    <div className="d-flex gap-3">
      <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
        <button
          className={`bg-secondary px-2 text-white f-10 rounded`}
          type="button"
        >
          <i className="fa-solid fa-eye"></i> View Resume
        </button>
      </a>

      <a href={resumeUrl} download="Ebube_Prosper_Resume.pdf">
        <button
          className={`f-10 px-2 rounded ${isDark ? "bg-blue" : "shadow"}`}
          type="button"
        >
          <i className="fa-solid fa-download"></i> Download Resume
        </button>
      </a>
    </div>
  );
};

export default ResumeButtons;
