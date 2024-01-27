import styled from 'styled-components';
import theme from "../../../styles/Theme.js"


export const Container = styled.div`
top: 0;
left: 0;
display: flex;
max-width: 1920px;
height: max-content;
padding: 0px 42px;
border: none;
position: sticky;
z-index: 1;
background:none;
backdrop-filter: blur(2.4px);
-webkit-backdrop-filter: blur(4.4px);
`;

export const Item=styled.div`
display:flex;
align-items:center;
gap:0 10px;
margin:0;
p{
    margin:0;
    color:${theme.primaryTextColor};
    font-family: 'Anton', sans-serif;
    font-size:32px;
    cursor:pointer;
    @media (max-width: 600px) {
        font-size:18px;
      }
      @media (min-width:601px) {
        gap:0 6px;
        font-size:22px;
      }
      @media (min-width: 768px) {
        gap:0 8px;
        font-size:26px;
      }
      @media (min-width: 992px) { 
        gap:0 10px;
        font-size:28px;
      }
      @media (min-width: 1220px) {
        gap:0 10px;
        font-size:32px;
      }
    a{
        color:${theme.primaryTextColor};
        text-decoration: none; 
    }
}

img{
margin:0;
}
`;
      /*
${theme.primaryBackgroundColor}
${theme.secondBackgroundColor}
${theme.cpyBackgroundColor}
${theme.primaryTextColor}
${theme.secondTextColor}
${theme.btnBgColor}
${theme.btnBorderColor}
${theme.btnBgTextColor}
${theme.btnTextColor}
${theme.animationColor}
*/