import { Container,Item } from './styles/LoadingPageStyle.js';
import Emoji5 from "../../assets/graphs/emoji4.png"
const LoadingPage = () => {
  return (
    <Container>
      <Item>
        <h1>OTHMAN</h1>  
        <img src={Emoji5} alt="Icon"/>  
      </Item>
    </Container>
  );
};

export default LoadingPage;

