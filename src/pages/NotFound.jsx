import { useTheme } from "../context/useTheme";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  return (
    <div
      className="d-grid p-3 text-center"
      style={{ minHeight: "calc(100vh - 70px)", placeItems: "center" }}
    >
      <div>
        <img src="/images/404.png" className="w-75" style={{ maxWidth: 250 }} />
        <h5 className="display-5 my-4 fw-bold text-secondary">
          Page Not Found
        </h5>
        <p>
          Sorry the page your looking for doesn't exist or has been moved. Here
          are helpful links to get you back on track.
        </p>
        <div className="d-flex mt-5 gap-4 justify-content-center">
          <button onClick={() => navigate(-1)} className="bg-blue f-12">
            Previous page
          </button>
          <button
            onClick={() => navigate("/", { replace: true })}
            className={`f-12 ${
              !isDark ? "light-theme shadow" : "dark-theme shadow-lite"
            }`}
          >
            Home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
