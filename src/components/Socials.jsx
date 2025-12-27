import { useTheme } from "../context/useTheme";
const Socials = () => {
  const { socialLinks } = useTheme();

  return (
    <>
      {Object.values(socialLinks).map((item) => (
        <a
          key={item.name}
          target="_blank"
          href={item.link}
          style={{ all: "unset" }}
        >
          <i className={`cursor hover-exp d-inline-block ${item.iconClass}`}></i>
        </a>
      ))}
    </>
  );
};

export default Socials;
