import styled, { keyframes } from 'styled-components';
import theme from "../../../styles/Theme.js";

export const growAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const BtnWithIconStyle = styled.div`
  background: #232323;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, color 0.3s ease;
  color: white;
  padding: 10px 38px;
  margin-top: 20px;
  gap: 0 10px;
  font-family:${theme.secondaryFonts};

  &:hover {
    background: #ffd900;
    animation: ${growAnimation} 0.3s ease-in-out;
    color: black;
    gap: 0 40px;
  }

  img {
    width: 25px;
    height: 25px;

    @media (max-width: 600px) {
      width: 18px;
      height: 18px;
    }

    @media (min-width: 601px) {
      width: 18px;
      height: 18px;
    }

    @media (min-width: 768px) {
      width: 22px;
      height: 22px;
    }

    @media (min-width: 992px) {
      width: 25px;
      height: 25px;
    }

    @media (min-width: 1220px) {
      width: 25px;
      height: 25px;
    }
  }
`;


