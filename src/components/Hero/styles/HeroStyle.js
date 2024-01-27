import styled, { keyframes } from 'styled-components';
import theme from "../../../styles/Theme.js";
const backInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%; 
  height:100vh; 
  top:0;
  right:0;
  box-sizing: border-box;
  flex-direction:column;
  justify-content:center;
  padding:42px 42px;
  background-color:${theme.secondBackgroundColor};
  
  @media (max-width: 600px) {
    padding:18px 42px;
    height:max-content; 
  }  
     @media (min-width:601px) {
      padding:22px 42px;
      height:max-content; 
     }
     @media (min-width: 768px) {
      padding:28px 42px;
      height:max-content; 
     }
     @media (min-width: 992px) { 
      padding:34px 42px;
      height:max-content; 
     }
     @media (min-width: 1220px) {
      padding:42px 42px;
      height:100vh; 

     }
  `;

export const ProfileSection=styled.div`
width:100%;
display:flex;
justify-content:center;

`;
export const Infos=styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
.animated-text {
  opacity: 0;
  animation: ${backInLeft} 0.9s ease-in-out forwards;
}
p{
  margin:0;
  color:${theme.secondTextColor};
  font-family: 'Anton', sans-serif;
  font-size: 46px;
  font-style: bold;
  font-weight: 400;
  letter-spacing: -0.9px;
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 600px) {
    font-size: 22px;
    letter-spacing: -0.3px;
  }  
     @media (min-width:601px) {
      font-size: 22px;
      letter-spacing: -0.3px;
     }
     @media (min-width: 768px) {
      font-size: 26px;
      letter-spacing: -0.9px;
     }
     @media (min-width: 992px) { 
      font-size: 46px;
      letter-spacing: -0.9px;
     }
     @media (min-width: 1220px) {
      font-size: 46px;
      letter-spacing: -0.9px;
     }
}
h1{
 
  margin:0;
    color:${theme.secondTextColor};
    font-family: 'Anton', sans-serif;
    font-size: 220px;
    line-height: 202px;
    letter-spacing: -1.9px;
    font-weight: 900;
    font-style: bold;
    text-decoration: none;
    text-transform: uppercase;
    
    @media (max-width: 600px) {
      font-size: 62px;
      line-height: 57px;
      letter-spacing: -2.9px;
     }
     @media (min-width:601px) {
      font-size: 88px;
      line-height: 94px;
      letter-spacing: -3.9px;
     }
     @media (min-width: 768px) {
      font-size: 142px;
      line-height: 132px;
      letter-spacing: -1.9px;
     }
     @media (min-width: 992px) { 
      font-size: 220px;
      line-height: 202px;
      letter-spacing: -1.9px;

     }
     @media (min-width: 1220px) {
      font-size: 220px;
      line-height: 202px;
      letter-spacing: -1.9px;
     } 
}
`;

 







 
  





