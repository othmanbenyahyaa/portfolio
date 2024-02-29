import styled, { keyframes } from 'styled-components';
import theme from "../../../styles/Theme.js";

const borderAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Container
export const Container = styled.div`
width: 100%;
height: max-content;
  top: 0;
  left: 0;
  display: flex;
  padding: 14px 42px;
  border: none;
  box-sizing: border-box;
  overflow: auto;
  flex-direction:column;
`;

// Menu Section
export const NavSection = styled.div`
  width: 100%;
  display: flex;
`;

// Logo
export const LogoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 28px;
    height: 28px;
    margin-left: 8px;

    @media (max-width: 600px) {
      width: 18px;
      height: 18px;
      margin-left: 4px;
    }
  }

  h1 {
    margin: 0;
    color: ${theme.secondTextColor};
    font-size: 28px;

    @media (max-width: 600px) {
      font-size: 12px;
      letter-spacing: -0.9px;
    }
    /* Add other media queries for different screen sizes */
    
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

// Links 
export const LinksSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 10px;

  a {
    font-family:${theme.secondaryFonts};
    text-decoration: none;
    color: inherit;
    margin: 0;
    border-bottom: 1px solid #ccc;
    transition: border-color 0.3s ease;
    position: relative;

    &:hover {
      border-bottom-color: transparent; /* Deactivate old border-bottom on hover */
    }

    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px; /* Push the border to bottom */
      width: 100%;
      height: 1px;
      background: white;
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

// Items 
export const NavItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${theme.secondTextColor};
`;

export const ItemMenu = styled.div`
  display: flex;
  gap: 0 5px;
  align-items: center;

  p {
    margin: 0;
    font-family:${theme.secondaryFonts};
    cursor: pointer;
    color: white;
  }

  img {
    cursor: pointer;
    width: 65px;
    height: 24px;
  }
`;

export const ItemClose = styled.div`
  display: flex;
  gap: 0 5px;
  align-items: center;

  p {
    margin: 0;
    font-family:${theme.secondaryFonts};
    cursor: pointer;
    color: white;
  }

  img {
    cursor: pointer;
    width: 38px;
  }
`;

// Content Section
export const ContentSection = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  z-index: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px 0px 62px 0px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
`;

export const TitlesBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  h1 {
    margin: 0;
    color: ${theme.secondTextColor};
    font-family:${theme.primaryFonts};
    font-size: 148px;
    line-height: 136px;
    letter-spacing: -2.9px;
    font-weight: 900;
    font-style: bold;
    text-decoration: none;
    text-transform: uppercase;
    cursor:pointer;
    &:hover {
      color: #ffd900;
    }
  }
`;

export const MenuBox = styled.div`
  display: flex;
`;

export const MenuCard = styled.div`
  display: flex;
  background: #222222;
  flex-direction: column;
  padding: 20px 192px 20px 30px;
  gap: 32vh;
  border-radius: 25px;
`;

export const CardTitle = styled.div`
  display: flex;

  h1 {
    font-family:${theme.secondaryFonts};
    margin: 0;
    font-size:12px;
  }
`;

export const CardItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;

  h2 {
    margin: 0;
    color: ${theme.secondTextColor};
    font-family:${theme.primaryFonts};
    font-size: 38px;
    line-height: 38px;
    letter-spacing: -0.9px;
    font-weight: 900;
    font-style: bold;
    text-decoration: none;
    text-transform: uppercase;
    cursor:pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
     opacity:0.6;  
  }
  }
`;

export const ContentFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 0px;
`;

export const GetCv = styled.div`
  display: flex;

  p {
    margin: 0;
    cursor:pointer;
    font-family:${theme.secondaryFonts};

  }
`;

export const SoMedia = styled.div`
  display: flex;
  gap: 0 7px;

  p {
    margin: 0;
    font-family:${theme.secondaryFonts};
    position: relative;
    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: white;
      animation: ${borderAnimation} 0.3s ease-out forwards;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const CopyR = styled.div`
  display: flex;

  p {
    margin: 0;
    font-family:${theme.secondaryFonts};

  }
`;

