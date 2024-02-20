import { useState, useEffect } from 'react';
import {
  Container,
  LogoSection,
  LinksSection,
  NavSection,
  NavItems,
  ItemMenu,
  ItemClose,
  ContentSection,
  Content,
  TitlesBox,
  MenuBox,
  ContentFooter,
  GetCv,
  SoMedia,
  CopyR,
  MenuCard,
  CardTitle,
  CardItems,
  Item
} from "./styles/MenuStyle.js";
import Emoji from "../../assets/graphs/emoji3.png";
import MenuIcon from "../../assets/icons/menuIcon.png";
import CloseIcon from "../../assets/icons/closeIcon.png";

function Menu() {
  const [logoValue, setLogoValue] = useState("OTHMAN");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const logoValues = ["OTHMAN", "오스만 ", "عثمان ", "ⵓⵟⵀⵎⴰⵏ ", "Осман ", "オスマン "];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % logoValues.length;
      setLogoValue(logoValues[currentIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const handleMenuClick = () => {
    toggleMenu();
  };

  const handleCloseClick = () => {
    toggleMenu();
  };

  const titlesData = ["CONTACT ME", "FIND PROJECT"];
  const cardItemsData = [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/about" },
    { title: "PROJECTS", link: "/work" },
    { title: "CONTACT", link: "/contact" }
  ];
  const socialMediaData = [
    { title: "INSTAGRAM", link: "https://instagram.com" },
    { title: "GITHUB", link: "https://github.com" },
    { title: "LINKEDIN", link: "https://linkedin.com" }
  ];

  return (
    <Container>
      <NavSection>
        <LogoSection>
          <h1><a href="/">{logoValue}</a></h1>
          <img src={Emoji} alt="emoji" />
        </LogoSection>
      
        <NavItems>
        <LinksSection>
          <p><a href="/">DOWNLOAD RESUME</a></p>
          <p><a href="/work">FIND PROJECT</a></p>
        </LinksSection>
          <ItemMenu onClick={handleMenuClick} style={{ display: menuOpen ? 'none' : 'flex' }}>
            <p>MENU</p>
            <img src={MenuIcon} alt="menu" />
          </ItemMenu>
          <ItemClose onClick={handleCloseClick} style={{ display: menuOpen ? 'flex' : 'none' }}>
            <p>CLOSE</p>
            <img src={CloseIcon} alt="close" />
          </ItemClose>
        </NavItems>
      </NavSection>
      <ContentSection style={{ display: menuOpen ? 'flex' : 'none' }}>
        <Content>
          <TitlesBox>
            {titlesData.map((title, index) => (
              <h1 key={index}>{title}</h1>
            ))}
          </TitlesBox>
          <MenuBox>
            <MenuCard>
              <CardTitle>
                <h1>MENU</h1>
              </CardTitle>
              <CardItems>
                {cardItemsData.map((item, index) => (
                  <Item key={index}>
                    <a href={item.link}><h2>{item.title}</h2></a>
                  </Item>
                ))}
              </CardItems>
            </MenuCard>
          </MenuBox>
        </Content>
        <ContentFooter>
          <GetCv>
            <p>DOWNLOAD RESUME</p>
          </GetCv>
          <SoMedia>
            {socialMediaData.map((socialMedia, index) => (
              <a href={socialMedia.link} key={index}><p>{socialMedia.title}</p></a>
            ))}
          </SoMedia>
          <CopyR>
            <p>OTHMAN ©️ 2024</p>
          </CopyR>
        </ContentFooter>
      </ContentSection>
    </Container>
  );
}

export default Menu;



