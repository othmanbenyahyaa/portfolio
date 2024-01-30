import  { useState, useEffect } from 'react';
import { Container, LogoSection, NavSection, NavItems, Item } from "./styles/MenuStyle.js";
import DarkModeIcon from "../../assets/dark.png";
import LightModeIcon from "../../assets/light.png";

function Menu() {
  const [logoValue, setLogoValue] = useState("Othman Benyahya");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add your logic to toggle dark/light mode here
  };

  // Array of navigation items information
  const navItems = [
    { link: "/work", text: "PROJECTS" },
    { link: "/about", text: "ABOUT" },
    { link: "/contact", text: "CONTACT" },
    { icon: isDarkMode ? LightModeIcon : DarkModeIcon, alt: isDarkMode ? "Light Mode" : "Dark Mode", onClick: toggleDarkMode },
  ];

  useEffect(() => {
    const logoValues = ["Othman Benyahya", "오스만 베냐야", "عثمان بنيحي", "ⵓⵟⵀⵎⴰⵏ ⴱⵏⵢⴰⵀⵢⴰ", "Осман Бенйахя", "オスマン ベニャヤ",];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % logoValues.length;
      setLogoValue(logoValues[currentIndex]);
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <NavSection>
        <LogoSection>
          <h1><a href="/">{logoValue}</a></h1>
        </LogoSection>
        <NavItems>
          {navItems.map((item, index) => (
            <Item key={index} onClick={item.onClick}>
              {item.link ? (
                <p><a href={item.link}>{item.text}</a></p>
              ) : (
                <img src={item.icon} alt={item.alt} />
              )}
            </Item>
          ))}
        </NavItems>
      </NavSection>
    </Container>
  );
}

export default Menu;
