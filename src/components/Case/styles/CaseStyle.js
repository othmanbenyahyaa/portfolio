import styled from 'styled-components';
import theme from "../../../styles/Theme.js"


export const Container = styled.div`
width: 100%;
display: flex;
justify-content:center;
@media (max-width: 600px) {
  flex-direction:column-reverse;
  gap:24px;
}
@media (min-width:601px) {
  flex-direction:column-reverse;
  gap:24px;


}
@media (min-width: 768px) {
  flex-direction:column-reverse;
  gap:28px;


}
@media (min-width: 992px) { 
  flex-direction:row;
  gap:0px;

}
@media (min-width: 1220px) {
  flex-direction:row;
  gap:0px;

}

`;
export const PImage = styled.div`
display: flex;
overflow: hidden; 
cursor:pointer;

img {
  width:700px;
  height: 360px; 
  object-fit: cover;
  transition: transform 0.3s ease-in-out; 
  @media (max-width: 600px) {
    width:100%;
    height: 150px; 
  }
  @media (min-width:601px) {
    width:100%;
    height: 180px;
  }
  @media (min-width: 768px) {
    width:100%;
    height: 340px;
  }
  @media (min-width: 992px) { 
    width:700px;
    height: 360px; 
  }
  @media (min-width: 1220px) {
    width:700px;
    height: 360px; 
  }
}
&:hover img {
  transform: scale(0.9); 
}
`;

export const PInfo=styled.div` 
display: flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
padding:0px 10px 0px 0px;

`;
export const Title=styled.div`
display: flex;
h1{
    margin:0;
    color: ${theme.primaryTextColor};
      font-family: "Inter", sans-serif;
      font-size: 36px;
      font-style: bold;
      font-weight: 900;
      letter-spacing: -1.3px;
      line-height: .9px;
      @media (max-width: 600px) {
        font-size: 24px;
      }
      @media (min-width:601px) {
        font-size: 26px;
      }
      @media (min-width: 768px) {
        font-size: 28px;
      }
      @media (min-width: 992px) { 
        font-size: 32px;
      }
      @media (min-width: 1220px) {
        font-size: 36px;
      }
   
}
`;
export const SubTitle=styled.div`
display: flex;
h3{
  margin:0;
  color: ${theme.primaryTextColor};
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  line-height: 46px;
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (min-width:601px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 992px) { 
    font-size: 18px;
  }
  @media (min-width: 1220px) {
    font-size: 18px;
  }

}

`;
export const Btns=styled.div`
display:flex;
justify-content:flex-start;
gap:0px 4px;
`;
export const CodeBtn=styled.div` 
display: flex;
align-items: center;
padding: 5px 10px;
background-color:none; 
color:${theme.btnTextColor}; 
border:1px solid ${theme.btnBorderColor};
cursor: pointer;
font-size:8px;
border-radius:25px;

&:hover {

}

img {
  width: 15px;
  height: 15px; 
  margin-right: 5px; 
}
;` 
export const LivePre=styled.div` 
display: flex;
align-items: center;
padding: 5px 10px;
background-color:none; 
color:${theme.btnTextColor}; 
border:1px solid ${theme.btnBorderColor};
cursor: pointer;
font-size:8px;
border-radius:25px;

&:hover {

}

img {
  width: 15px;
  height: 15px; 
  margin-right: 5px; 
}
;` 
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
 