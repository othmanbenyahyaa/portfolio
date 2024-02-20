
import styled from 'styled-components';
import theme from "../../../styles/Theme.js";



export const Container = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 132px 42px;
  background: ${theme.secondBackgroundColor};
  position: relative;
  
  @media (max-width: 600px) {
    padding:72px 42px;
    height: max-content;
  }
  
  @media (min-width: 601px) {
    padding:72px 42px;
    height: max-content;
  }

  @media (min-width: 768px) {
    padding:92px 42px;
    height: max-content;
  }

  @media (min-width: 992px) {
    padding: 128px 42px;
    height: max-content;
  }

  @media (min-width: 1220px) {
    padding: 132px 42px;
    height: max-content;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  position: relative;
`;


export const Desgin = styled.div`
width:100%;
height:100%;
  display: none;
  position: absolute;
  align-items:center;
  justify-content:center;
  img {
    width:700px;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;
    @media (max-width: 600px) {
      width:296px;
    }  
       @media (min-width:601px) {
        width:296px;
      }
       @media (min-width: 768px) {
        width:412px;
      }
       @media (min-width: 992px) { 
        width:600px;
      }
       @media (min-width: 1220px) {
        width:700px;
      }
  }
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative; /* To establish a stacking context for z-index */

  p {
    margin: 0;
    color: ${theme.secondTextColor};
    font-family:${theme.primaryFonts};
    font-size: 46px;
    font-weight: 400;
    font-style: bold;
    text-decoration: none;
    text-transform: uppercase;
    text-align: left;
    position: relative;
    @media (max-width: 600px) {
      font-size: 22px;
    }  
       @media (min-width:601px) {
        font-size: 22px;
       }
       @media (min-width: 768px) {
        font-size: 26px;
       }
       @media (min-width: 992px) { 
        font-size: 46px;
       }
       @media (min-width: 1220px) {
        font-size: 46px;
       }
  }

  h1 {
    margin: 0;
    color: ${theme.secondTextColor};
    font-family:${theme.primaryFonts};
    font-size: 132px;
    line-height: 128px;
    letter-spacing: -2.9px;
    font-weight: 900;
    font-style: bold;
    text-decoration: none;
    text-transform: uppercase;
    @media (max-width: 600px) {
      font-size:28px;
      line-height: 32px;
      letter-spacing: -0.9px;
    }  
       @media (min-width:601px) {
        font-size:28px;
        line-height: 40px;
        letter-spacing: -1.3px;
      
      }
       @media (min-width: 768px) {
        font-size:68px;
        line-height: 62px;
        letter-spacing: -1.3px;
      
      }
       @media (min-width: 992px) { 
        font-size: 132px;
        line-height: 128px;

      }
       @media (min-width: 1220px) {
        font-size: 132px;
        line-height: 128px;

      }

    img {
      width: 78px;
      height: 78px;
      @media (max-width: 600px) {
        width: 22px;
        height: 22px; 
        }  
         @media (min-width:601px) {
          width: 32px;
          height: 32px; 
        }
         @media (min-width: 768px) {
          width: 52px;
          height: 52px;
        }
         @media (min-width: 992px) { 
          width: 72px;
          height: 72px; 

        }
         @media (min-width: 1220px) {
          width: 78px;
          height: 78px;
        }
    }

    &:hover {
    }
  }
`;
export const BtnZone=styled.div`
display:flex;
gap:0px 10px;
`;




 







 
  





