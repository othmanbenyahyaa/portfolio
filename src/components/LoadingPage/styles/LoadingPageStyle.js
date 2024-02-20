// LoadingPageStyle.js
import styled from 'styled-components';
import theme from "../../../styles/Theme.js";


export const Container = styled.div`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  background: ${theme.secondBackgroundColor};
`;
export const Item=styled.div`
display:flex;
align-items:center;
gap:0 7px;
h1{
  margin: 0;
    color: ${theme.secondTextColor};
    font-family: 'Anton', sans-serif;
    font-size: 53px;
    line-height: 36px;
    letter-spacing: -2.3px;
    font-weight: 900;
    font-style: bold;
    text-decoration: none;
    text-transform: uppercase;
  }
img{
  width:54px;
  height:54px;
}
`;

