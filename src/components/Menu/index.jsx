import  { useState, useEffect } from 'react';
import { Container, LogoSection, NavSection, NavItems, Item } from "./styles/MenuStyle.js";

function Menu() {
  const [logoValue, setLogoValue] = useState("Othman Benyahya");

  // Array of navigation items information
  const navItems = [
    { link: "/work", text: "PROJECTS" },
    { link: "/about", text: "ABOUT" },
    { link: "/contact", text: "CONTACT" },
  ];

  useEffect(() => {
    const logoValues = [ "Othman Benyahya","오스만 베냐야", "عثمان بنيحي","ⵓⵟⵀⵎⴰⵏ ⴱⵏⵢⴰⵀⵢⴰ","Осман Бенйахя","オスマン ベニャヤ",];
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
          <h1 className="animated-text"><a href="/">{logoValue}</a></h1>
        </LogoSection>
        <NavItems>
          {navItems.map((item, index) => (
            <Item key={index}>
              <p className="animated-text"><a href={item.link}>{item.text}</a></p>
            </Item>
          ))}
        </NavItems>
      </NavSection>
    </Container>
  );
}

export default Menu;