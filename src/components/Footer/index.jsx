import { Container, TitleBox, Title, Nav, Media, MItem, MediaItems, UserName, NavContact, TxtItem, BtnItem, ButtonContainer, ButtonInner, CopyRight, Item } from "./styles/FooterStyle.js";
import { Link } from 'react-router-dom';

function Footer() {
  const itemsData = [
    ' Made in Morocco 🇲🇦 By OTHMAN BENYAHYA 2024. ',
  ];

  const navContactData = {
    text: 'ARE YOU MINDING A PROJECT ?',
    buttonText: 'CONTACT ME',
    buttonLink: '/contact',
  };

  const mediaItemsData = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com' },
    { name: 'Github', link: 'https://github.com' },
    { name: 'Instagram', link: 'https://www.instagram.com/' },
  ];

  const userNameData = 'OTHMAN BENYAHYA';

  return (
    <Container>
      <TitleBox>
        <Title>
          <h1>LET S</h1>
          <h1>CONNECT</h1>
        </Title>
      </TitleBox>

      <Nav>
        <NavContact>
          <TxtItem>
            <h1>{navContactData.text}</h1>
          </TxtItem>
          <BtnItem>
            <ButtonContainer>
              <ButtonInner as={Link} to={navContactData.buttonLink}>
                <span>{navContactData.buttonText}</span>
              </ButtonInner>
            </ButtonContainer>
          </BtnItem>
        </NavContact>
        <Media>
          <MediaItems>
            {mediaItemsData.map((mediaItem, index) => (
              <MItem key={index}><p><a href={mediaItem.link}>{mediaItem.name}</a></p></MItem>
            ))}
          </MediaItems>
          <UserName>
            <h1><a href="/">{userNameData}</a></h1>
          </UserName>
        </Media>
      </Nav>
      <CopyRight>
        {itemsData.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </CopyRight>
    </Container>
  );
}

export default Footer;
