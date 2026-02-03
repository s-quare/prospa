import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/useTheme";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const { isDark } = useTheme();

  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [currentPath]);

  const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
    { name: "Me", link: "/about" },
  ];
  return (
    <div
      style={{
        zIndex: 200,
        height: 50,
        position: "sticky",
        top: 0,
        paddingTop: 10,
        marginBottom: 20,
      }}
      className="bg-transparent"
    >
      <div
        className={` ${isDark ? "bg-black" : "bg-white"} w-100`}
        style={{ position: "absolute", top: 0, left: 0, height: 15 }}
      ></div>
      <div
        style={{
          fontSize: "clamp(10px, 2.5vw, 12px)",
          height: 40,
          backdropFilter: "blur(8px)",
          backgroundColor: isDark
            ? "rgba(0,0,0,0.65)"
            : "rgba(255,255,255,0.65)",
          maxWidth: "500px",
        }}
        className={`${
          isDark ? "shadow-light" : "shadow"
        } position-relative rounded-5 ${
          isDark ? "border-gray" : "border"
        } fw-bold w-100 mx-auto text-secondary px-3 d-flex align-items-center justify-content-between`}
      >
        <span
          style={{ color: isDark ? "steelblue" : "steelblue" }}
          className="fw-bolder monospace f-14 cursor"
        >
          Prospa
        </span>
        <span>
          {links.map((item) => (
            <button
              onClick={() => navigate(item.link)}
              className={`mx-1 p-0 fw-bold border-2 ${
                currentPath === item.link &&
                `${
                  isDark
                    ? "text-white border-bottom-white"
                    : "text-black border-bottom-black"
                }`
              }`}
              key={item.name}
              style={{ color: "gray" }}
              disabled={currentPath === item.link}
            >
              {item.name}
            </button>
          ))}
          <ThemeToggle />
        </span>
      </div>
    </div>
  );
};

export default Header;
