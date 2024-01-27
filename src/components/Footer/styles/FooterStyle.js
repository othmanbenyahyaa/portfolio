import styled, { keyframes } from 'styled-components';
import theme from "../../../styles/Theme.js"


export const Container = styled.div`
  top: 0;
  left:0;
  display: flex;
  width:100%;
  flex-direction:column;


  `;
  export const TitleBox =styled.div`
  display:flex;
  justify-content:flex-start;
  padding:0px 43px;

  `;
  
  export const Title = styled.h1`
    display: flex;
    margin: 0;
    flex-direction:column;
    h1{
      margin:0;
      color:${theme.primaryTextColor};
      font-family: 'Anton', sans-serif;
      font-size: 140px;
      font-style: normal;
      font-weight: 700;
      line-height: 130px;
      @media (max-width: 600px) {
        font-size:52px;
        line-height: 50px;

      }
      @media (min-width:601px) {
        font-size:62px;
        line-height: 50px;

      }
      @media (min-width: 768px) {
        font-size:92px;
        line-height: 82px;

      }
      @media (min-width: 992px) { 
        font-size:108px;
        line-height: 98px;

      }
      @media (min-width: 1220px) {
        font-size:140px;
        line-height: 130px;

      }
     
  `;
  export const Nav =styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  padding:0px 43px;

  `;
  export const Media=styled.div`
  width:100%;
  display:flex;
  border:1px solid ${theme.btnBorderColor};
  border-left:none;
  border-right:none;
  border-bottom:none;
  padding:20px 0px;

  `;

  export const MItem=styled.div`
  display:flex;
  
  text-align:center;
  p {
    margin:0;
    color:${theme.primaryTextColor};
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -.5px;
    line-height: 24px;
    text-decoration: none;
    text-transform: none;
    margin-right:12px;
    cursor:pointer;
    position: relative;
    overflow: hidden; 
    @media (max-width: 600px) {
      font-size: 8px;
      line-height: 8px;

    }
    @media (min-width:601px) {
      font-size: 10px;
      line-height: 8px;

    }
    @media (min-width: 768px) {
      font-size: 12px;
      line-height: 8px;
  
    }
    @media (min-width: 992px) { 
      font-size: 16px;
      line-height: 8px;

    }
    @media (min-width: 1220px) {
      font-size: 18px;
      line-height: 24px;
    }
    
       a{
        color:${theme.primaryTextColor} ;
        text-decoration: none; 

        }
    &:hover::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px; 
      background: ${theme.animationColor};
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
  export const MediaItems=styled.div`
  display:flex;

  `;
  export const UserName=styled.div`
  width:100%;
  display:flex;
  margin:0;
  justify-content:flex-end;
  h1{
    margin:0;
    color:${theme.primaryTextColor};
    font-family: 'Anton', sans-serif;
    font-size: 20px;
    font-style: bold;
    font-weight: 900;
    @media (max-width: 600px) {
      font-size: 8px;
    }
    @media (min-width:601px) {
      font-size: 10px;
    }
    @media (min-width: 768px) {
      font-size: 12px;
    }
    @media (min-width: 992px) { 
      font-size: 16px;
    }
    @media (min-width: 1220px) {
      font-size: 20px;
    }
  
    a{
      color:${theme.primaryTextColor};
      text-decoration: none; 
    }

  }
  `;


  export const NavContact=styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 0px;
  `;
  export const TxtItem=styled.div`
  display:flex;
  justify-content:flex-start;
  h1{
    margin:0;
    color:${theme.primaryTextColor};
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -1.3px;
    line-height: 26px;
    @media (max-width: 600px) {
      font-size: 12px;
      line-height: 26px;
    }
    @media (min-width:601px) {
      font-size: 12px;
      line-height: 26px;

    }
    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 26px;

    }
    @media (min-width: 992px) { 
      font-size: 22px;
      line-height: 26px;

    }
    @media (min-width: 1220px) {
      font-size: 32px;
      line-height: 26px;

    }
  
  }

  `;



  // Define the keyframes for the marquee animation
const marqueeAnim = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(-100%);
}
`;
  export const BtnItem=styled.div`
  display:flex;

  `;
 
 
 export const ButtonContainer = styled.a`
  display: flex;
  background:${theme.btnBgColor};
  color:${theme.btnBgTextColor};
  margin:0;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.2s ease-out;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 8px;
  }
  @media (min-width:601px) {
    font-size: 10px;


  }
  @media (min-width: 768px) {
    font-size: 12px;


  }
  @media (min-width: 992px) { 
    font-size: 16px;


  }
  @media (min-width: 1220px) {
    font-size: 20px;


  }

  &:hover {
    background:${theme.btnBgColor};
    color:${theme.btnBgTextColor};
  }
`;

export const ButtonInner = styled.div`
  display: flex;
  position: relative;
  padding:10px 20px;
  color:${theme.btnBgTextColor};
   text-decoration: none;
   @media (max-width: 600px) {
    padding:2px 10px;
  }
  @media (min-width:601px) {
    padding:2px 10px;


  }
  @media (min-width: 768px) {
    padding:4px 16px;


  }
  @media (min-width: 992px) { 
    padding:5px 20px;


  }
  @media (min-width: 1220px) {
    padding:10px 20px;


  }
  span::after {
    content: attr(data-text);
    position: absolute;
    right: 0; 
    width: 100%;
    text-align: center;
  }

  ${ButtonContainer}:hover & {
    animation: ${marqueeAnim} 1.5s linear infinite; 
    animation-play-state: running;
  }
`;
 
 
export const CopyRight = styled.div`
width:100%;
display: flex;

`;
export const Item = styled.div`
  display: flex;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  margin: 0;
  align-items: flex-end;
  justify-content: center;
  background:${theme.cpyBackgroundColor};
  color:${theme.primaryTextColor};
  @media (max-width: 600px) {
    font-size: 8px;
  }
  @media (min-width:601px) {
    font-size: 8px;
  }
  @media (min-width: 768px) {
    font-size: 10px;
  }
  @media (min-width: 992px) { 
    font-size: 12px;
  }
  @media (min-width: 1220px) {
    font-size: 12px;
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