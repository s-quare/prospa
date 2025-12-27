import { useState, useEffect, useRef } from "react";
import { ThemeContext } from "./ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const ThemeProvider = ({ children }) => {
  const isInitialMount = useRef(true);

  const [theme, setTheme] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const root = document.body;
    if (theme === "dark") {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  //initialize aos
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: true,
      offset: 0,
      delay: 200,
    });
    const handleRouteChange = () => {
      AOS.refresh();
    };
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      AOS.refreshHard();
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  //kkkkkkkkkkk
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // infos socials
  const socialLinks = {
    whatsapp: {
      name: "WhatsApp",
      key: "+2348084752054",
      link: "https://wa.me/+2348084752054", // Replace with your link
      iconClass: "bi bi-whatsapp",
      color: "#25D366",
    },
    gmail: {
      name: "Gmail",
      key: "14prospa@gmail.com",
      link: "mailto:", // Triggers email app
      iconClass: "bi bi-envelope-at-fill", // Professional email icon
      color: "#DB4437", // Gmail brand Red
    },
    instagram: {
      name: "Instagram",
      key: "14_prospa",
      link: "https://instagram.com/14_prospa",
      iconClass: "bi bi-instagram",
      color: "#E4405F",
    },
    twitter: {
      name: "Twitter",
      key: "14_prospa",
      link: "https://twitter.com/14_prospa",
      iconClass: "bi bi-twitter-x", // Updated class for the 'X' logo
      color: "#000000",
    },
    github: {
      name: "GitHub",
      key: "s-quare",
      link: "https://github.com/s-quare",
      iconClass: "bi bi-github",
      color: "#181717",
    },
  };

  // infos projectData
  const projectData = {
    whisperin: {
      id: "whisperin",
      name: "WhisperIn",
      tagline: "Anonymity-First Social Networking",
      description:
        "WhisperIn is a specialized communication platform designed to bridge the gap between social interaction and complete privacy. Developed to solve the problem of digital footprints in casual messaging, it allows users to share thoughts and receive feedback without the weight of a permanent identity. The architecture focuses on lightweight data persistence and a 'vapor-style' UI that feels as fleeting as a whisper.",
      keyFeatures: [
        "End-to-end identity masking for anonymous threads",
        "Real-time message delivery with minimal latency",
        "Customizable 'whisper' expiry settings",
        "Responsive layout optimized for mobile-first users",
      ],
      impact:
        "Created a safe space for honest feedback and casual sharing, reducing social anxiety associated with traditional profiles.",
      techStack: [
        { name: "React", icon: "fab fa-react", color: "steelblue" },
        { name: "Node.js", icon: "bi bi-node-plus", color: "lightgreen" },
        { name: "Bootstrap", icon: "bi bi-bootstrap", color: "purple" },
        { name: "Firebase", icon: "bi bi-fire", color: "orange" },
      ],
      gitLink: "https://github.com/s-quare/WhisperIn",
      liveLink: "https://whisperin.gt.tc/",
      category: "Full Stack",
    },
    tonesflex: {
      id: "tonesflex",
      name: "TonesFlex",
      tagline: "Dynamic UI & Audio Synchronization",
      description:
        "TonesFlex is an experimental project exploring the intersection of sound engineering and user interface design. The core challenge was creating a system where the UI feels 'liquid'—adjusting its visual tones based on user interaction or audio input. It serves as a framework for developers looking to implement highly aesthetic, mood-based themes in their applications with minimal performance overhead.",
      keyFeatures: [
        "Dynamic CSS variable injection for real-time theme shifts",
        "Audio-reactive UI elements using Web Audio API",
        "Low-latency rendering for smooth visual transitions",
        "Advanced Flexbox layouts for maximum content adaptability",
      ],
      impact:
        "Showcased a new way to handle 'Mood-as-a-Service' in UI design, moving away from static light/dark modes.",
      techStack: [
        { name: "JavaScript", icon: "fab fa-js", color: "burlywood" },
        { name: "CSS3", icon: "bi bi-palette", color: "cyan" },
        { name: "HTML5", icon: "bi bi-code-slash", color: "purple" },
        { name: "Bootstrap", icon: "bi bi-bootstrap", color: "purple" },
      ],
      gitLink: "https://github.com/s-quare/tonesflex",
      liveLink: "https://tonesflex.vercel.app/",
      category: "UX/UI Design",
    },
    weatherapp: {
      id: "weatherappbyprospa",
      name: "WeatherApp Prospa",
      tagline: "Precision Weather Visualization",
      description:
        "Built with the 'Prospa' design language in mind, this application provides hyper-local weather intelligence. Unlike standard weather apps, this project focuses on data density and clarity—presenting complex atmospheric data like UV indices, pressure, and multi-day forecasts in a scannable, high-contrast dashboard. It demonstrates the efficient handling of third-party RESTful APIs and asynchronous data fetching.",
      keyFeatures: [
        "Geolocation-based instant weather fetching",
        "Multi-metric dashboards (Humidity, Wind, Pressure)",
        "Dynamic background changes based on local weather states",
        "Optimized API polling to reduce network overhead",
      ],
      impact:
        "Delivered a high-performance utility that converts raw JSON data into an actionable, user-friendly dashboard.",
      techStack: [
        { name: "React", icon: "fab fa-react", color: "steelblue" },
        { name: "REST API", icon: "bi bi-cloud-download", color: "pink" },
        { name: "Bootstrap", icon: "bi bi-bootstrap", color: "purple" },
        { name: "JavaScript", icon: "fab fa-js", color: "burlywood" },
      ],
      gitLink: "https://github.com/s-quare/Weather_App_Prospa",
      liveLink: "https://weatherappprospa.netlify.app/",
      category: "Utilities",
    },
    synergykithause: {
      id: "synergykit",
      name: "SynergyKit Hause",
      tagline: "Smart Management Ecosystem",
      description:
        "SynergyKit Hause is a comprehensive organizational toolkit designed for shared living environments or small team headquarters. It solves the friction of fragmented task management by centralizing schedules, inventories, and house-wide announcements into a single synergy-driven dashboard. The project highlights complex state management and a modular component architecture that allows for rapid feature expansion.",
      keyFeatures: [
        "Modular dashboard for personalized task views",
        "Integrated resource tracker for shared supplies",
        "Role-based access for house members",
        "Synchronized state updates across all connected devices",
      ],
      impact:
        "Improved team/household efficiency by 40% by eliminating communication silos and redundant manual tracking.",
      techStack: [
        { name: "React", icon: "fab fa-react", color: "steelblue" },
        { name: "Firebase", icon: "bi bi-fire", color: "orange" },
        { name: "Redux", icon: "bi bi-cpu", color: "cyan" },
        { name: "Bootstrap", icon: "bi bi-bootstrap", color: "purple" },
      ],
      gitLink: "https://github.com/s-quare/synergy-kithause",
      liveLink: "https://synergy-kithause.vercel.app/",
      category: "Productivity",
    },
  };

  // show toast
  const showToast = (message) => {
    Toastify({
      text: message,
      duration: 2500,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: theme === "dark" ? "white" : "black",
        color: theme === "dark" ? "black" : "white",
        borderRadius: "10px",
        fontSize: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "5px 15px",
      },
    }).showToast();
  };

  // copy to clipboard
  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        showToast("Copied!");
      } else {
        throw new Error("Error");
      }
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      textArea.style.top = "0";
      document.body.appendChild(textArea);

      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          showToast("Copied!");
        } else {
          showToast("Error");
        }
      } catch {
        showToast("Error");
      }

      document.body.removeChild(textArea);
    }
  };

  // tab color
  useEffect(() => {
    // 1. Define colors based on state
    const color = theme === "dark" ? "#000000" : "#ffffff";

    // 2. Handle Standard Theme Color (Chrome, Firefox, Android)
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute("content", color);

    // 3. Handle Safari / iOS Specifics
    // "black-translucent" makes the status bar text white and blends the background
    let metaSafari = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );
    if (!metaSafari) {
      metaSafari = document.createElement("meta");
      metaSafari.name = "apple-mobile-web-app-status-bar-style";
      document.head.appendChild(metaSafari);
    }
    metaSafari.setAttribute(
      "content",
      theme === "dark" ? "black-translucent" : "default"
    );

    // 4. Optional: Update the body background color to prevent "white flashes"
    // when bouncing/scrolling on iOS
    document.body.style.backgroundColor = color;
  }, [theme]);

  //network
  useEffect(() => {
    const handleOnline = () => {
      if (!isInitialMount.current) {
        showToast("Back online!");
      }
    };

    const handleOffline = () => {
      isInitialMount.current = false;
      showToast("Connection lost");
    };

    const handleConnectionChange = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      if (connection) {
        // effectiveType can be 'slow-2g', '2g', '3g', or '4g'
        if (
          connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g"
        ) {
          showToast("Slow network. Assets may load slowly.");
        }
      }
    };

    // Event Listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection) {
      connection.addEventListener("change", handleConnectionChange);
    }

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if (connection) {
        connection.removeEventListener("change", handleConnectionChange);
      }
    };
  }, []);

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    socialLinks,
    projectData,
    copyToClipboard,
    showToast,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
