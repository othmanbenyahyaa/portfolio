
import { Container, Item } from './styles/NavStyle.js';
import Line from "../../assets/line.png";

const Nav = () => {
  const navItems = [
    { text: 'HOME', link: '/' },
  ];

  return (
    <Container>
      {navItems.map((navItem, index) => (
        <Item key={index}>
          <p><a href={navItem.link}>{navItem.text}</a></p>
          <img src={Line} alt="line" />
        </Item>
      ))}
    </Container>
  );
};

export default Nav;



