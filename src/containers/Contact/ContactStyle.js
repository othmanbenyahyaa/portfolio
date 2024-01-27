import styled from "styled-components";
import theme from "../../styles/Theme.js"

export const Container = styled.div`
top: 0;
left:0;
display: flex;
width:100%;
flex-direction:column;
position:fixed;
`;

export const ContactInfo=styled.div`
display:flex;
width:100%;
flex-direction:column;
gap:30px;
padding:0px 0px 6px 230px;
@media (max-width: 600px) {
  padding:22px 0px 6px 40px;
  gap:26px;

}
@media (min-width:601px) {
  padding:22px 0px 6px 40px;
  gap:26px;

}
@media (min-width: 768px) {
  padding:32px 0px 6px 40px;
  gap:26px;

}
@media (min-width: 992px) { 
  padding:12px 0px 6px 230px;
  gap:30px;

}
@media (min-width: 1220px) {
  padding:8px 0px 6px 230px;
  gap:30px;

}

`;
export const HiItem=styled.div`
display:flex;

h1{
  margin:0;
  color:${theme.primaryTextColor};
  font-family: 'Anton', sans-serif;
  font-size: 300px;
  font-style: bold;
  font-weight: 900;
  line-height: 262px;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 78px;
    line-height:28px;
  }
  @media (min-width:601px) {
    font-size: 92px;
    line-height:32px;
  }
  @media (min-width: 768px) {
    font-size: 102px;
    line-height:40px;
  }
  @media (min-width: 992px) {
    font-size: 286px;
    line-height: 208px; 
  }
  @media (min-width: 1220px) {
    font-size: 300px;
    line-height: 262px;
    }
}
`;

export const ParaItem=styled.div`
display:flex;
max-width:800px;

p{
  margin:0;
  color:${theme.primaryTextColor};
    font-family: "Inter", sans-serif;
    font-size: 42px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
    @media (max-width: 600px) {
      font-size: 18px;
      line-height:18px;
      max-width:276px;
    }
    @media (min-width:601px) {
      font-size: 18px;
      line-height:18px;
      max-width:276px;
    
    }
    @media (min-width: 768px) {
      font-size: 20px;
      line-height:18px;
      max-width:376px;
     
    }
    @media (min-width: 992px) {
    
    }
    @media (min-width: 1220px) {
      font-size: 42px;
      line-height: 42px;
      max-width:800px;

      }
  
}
`
export const ContactItem=styled.div`
display:flex;
flex-direction:column;

`;
export const Item =styled.div`
display:flex;
gap:0 3px;
span{
  color:${theme.primaryTextColor};
  margin:0;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none; 
  a {
    color: ${theme.primaryTextColor};
    text-decoration: none;
    &:hover {
      text-decoration: none; 
    }
  }

  @media (max-width: 600px) {
    font-size: 9px;
    font-weight: 400;
  }
  @media (min-width:601px) {
    font-size: 9px;
    font-weight: 400;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    font-weight: 400;
  }
  @media (min-width: 992px) {
    font-size: 18px;
    font-weight: 400;
  }
  @media (min-width: 1220px) {
    font-size: 16px;
    font-weight: 400;
    }
}
`;

export const MediaItems=styled.div`
display:flex;
`;

export const MItem=styled.div`
display:flex;
text-align:center;
p {
  margin:0;
  color:${theme.primaryTextColor};
  font-family: "Inter", sans-serif;
  font-size: 14px;
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
    line-height: 14px;
    margin-right:6px;

  }
  @media (min-width:601px) {
    font-size: 8px;
    line-height: 14px;
    margin-right:6px;
  }
  @media (min-width: 768px) {
    font-size: 10px;
    line-height: 24px;
    margin-right:6px;
  }
  @media (min-width: 992px) {
    font-size: 12px;
    line-height: 24px;
    margin-right:10px;
  }
  @media (min-width: 1220px) {
    font-size: 14px;
    line-height: 24px;
    margin-right:12px;

    }
  
    a {
      color: ${theme.primaryTextColor};
      text-decoration: none;
      &:hover {
        text-decoration: none; 
      }
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