import styled from "styled-components";
import theme from "../styles/Theme.js"
export const Container = styled.div`
width:100%;
height:100%;
display:flex;
top:0;
left:0;
box-sizing: border-box;
position:fixed;
overflow: auto;
flex-direction:column;
background-color:${theme.primaryBackgroundColor};
`;
export const HeadSection=styled.div`
width:100%;
display:flex;
background:green;

`;
export const ContentSection=styled.div`
width:100%;
display:flex;
flex-direction:column;

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
*/


