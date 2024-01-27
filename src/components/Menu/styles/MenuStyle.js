import styled, { keyframes } from 'styled-components';
import theme from "../../../styles/Theme.js"

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

const backInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  top: 0;
  left:0;
  display: flex;
  max-width: 1920px;
  height: max-content;
  padding:14px 42px;
  border:none;
  position:sticky;
  z-index:1;
  background-color:${theme.secondBackgroundColor};
  `;
 

  export const NavSection=styled.div`
  width:100%;
  display:flex;
  `;
  export const NavItems=styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  color:${theme.secondTextColor};
  

  `;
  export const Item = styled.div`
  display: flex;
  position: relative;
  margin-right:7px;
  .animated-text {
    opacity: 0;
    animation: ${backInRight} 0.9s ease-in-out forwards;
  }
  p {
    color:${theme.secondTextColor};
    margin: 0;
    font-family: 'Anton', sans-serif;
    font-size: 18px;
    cursor: pointer;
    margin-left: 3px;
    font-weight: 500;
    position: relative;
    z-index: 1; 
    overflow: hidden; 
    @media (max-width: 600px) {
      font-size: 10px;
      margin-left: 2px;
    }
    @media (min-width:601px) {
      font-size: 12px;
      margin-left: 2px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
      margin-left: 3px;
    }
    @media (min-width: 992px) { 
      font-size: 18px;
      margin-left: 3px;
    }
    @media (min-width: 1220px) {
      font-size: 18px;
      margin-left: 3px;
    }
 
       a{
        color:${theme.secondTextColor};
        text-decoration: none; 

        }
    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px; 
      background:${theme.secondAnimationColor};
      animation: borderAnimation 0.3s ease-out forwards; 
    }
  }

  @keyframes borderAnimation {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
  export const LogoSection=styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  margin:0;
  .animated-text {
    opacity: 0;
    animation: ${backInLeft} 0.9s ease-in-out forwards;
  }
  
  h1{
    margin:0;
    color:${theme.secondTextColor};
    font-size:28px;
    @media (max-width: 600px) {
      font-size:12px;
      letter-spacing: -0.9px;
    }
    @media (min-width:601px) {
      font-size:12px;
      letter-spacing: -0.9px;
    }
    @media (min-width: 768px) {
      font-size:26px;
      letter-spacing: -1.9px;

    }
    @media (min-width: 992px) { 
      font-size:26px;
      letter-spacing: -1.9px;

    }
    @media (min-width: 1220px) {
      font-size:26px;
      letter-spacing: -1.9px;

    }
  
    a{
      color:${theme.secondTextColor};
      text-decoration: none; 
    }

  }

  `;

  