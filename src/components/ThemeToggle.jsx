import { useTheme } from "../context/useTheme";

const ThemeToggle = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`${
        isDark ? "text-white" : "text-black"
      } btn bg-transparent ms-3 border-0 p-0 f-16`}
      onClick={toggleTheme}
      style={{transition: '0.3s' ,transform: `rotate(${isDark ? '90' : '0'}deg)`}}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <i className="bi bi-sun-fill"></i>
      ) : (
        <i className="bi bi-moon-fill"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
