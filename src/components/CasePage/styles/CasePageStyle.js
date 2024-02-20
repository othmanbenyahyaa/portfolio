import styled from "styled-components";
import theme from "../../../styles/Theme.js"


export const Container = styled.div`
top: 0;
left:0;
display: flex;
width:100%;
height:100%;
flex-direction:column;
box-sizing: border-box;
overflow: auto;
`;

export const Section=styled.div`
display:flex;
flex-direction:column;
gap:30px;
padding:0px 0px 0px 230px;
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
export const CaseInfo=styled.div`
display:flex;
max-width:900px;
flex-direction:column;
`;
export const Title=styled.div`
display:flex;
h1{
  margin:0;
  color:${theme.primaryTextColor};
  font-family: 'Anton', sans-serif;
  font-size: 98px;
  font-style: bold;
  font-weight: 900;
  line-height: 150px;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 68px;
    line-height: 68px;
  }
  @media (min-width:601px) {
    font-size: 68px;
    line-height: 68px;
  }
  @media (min-width: 768px) {
    font-size: 89px;
    line-height: 92px;
  }
  @media (min-width: 992px) { 
    font-size: 98px;
    line-height: 150px;
  }
  @media (min-width: 1220px) {
    font-size: 98px;
    line-height: 150px;
  }
}
`;
export const SubTitle=styled.div`
display:flex;
h3{
  margin:0;
  color:${theme.primaryTextColor};
  font-family: 'Anton', sans-serif;
  font-size: 42px;
  font-style: bold;
  font-weight: 900;
  line-height: 46px;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (min-width:601px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 38px;
  }
  @media (min-width: 992px) { 
    font-size: 42px;
    line-height: 46px;
  }
  @media (min-width: 1220px) {
    font-size: 42px;
    line-height: 46px;
  }
}
`;
export const Description=styled.div`
display:flex;
p{
  max-width:900px;
  color:${theme.primaryTextColor};
      font-family: "Inter", sans-serif;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: -1.3px;
      line-height: 28px;
      text-decoration: none;
      text-transform: none;
      @media (max-width: 600px) {
        font-size: 18px;
        line-height: 20px;
      }
      @media (min-width:601px) {
        font-size: 18px;
        line-height: 20px;
      }
      @media (min-width: 768px) {
        font-size: 22px;
        line-height: 24px;
      }
      @media (min-width: 992px) { 
        font-size: 26px;
        line-height: 28px;
      }
      @media (min-width: 1220px) {
        font-size: 26px;
        line-height: 28px;
      }
}
`;
export const Btns=styled.div`
display:flex;
justify-content:flex-start;
gap:0px 7px;
padding:20px 0px ;
`;
export const CodeBtn=styled.div` 
display: flex;
align-items: center;
padding: 7px 26px;
background-color:none; 
color:${theme.btnTextColor}; 
border:1px solid ${theme.btnBorderColor};
cursor: pointer;
font-size:12px;
border-radius:25px;
@media (max-width: 600px) {
  font-size:8px;
  padding: 5px 7px;
}
@media (min-width:601px) {
  font-size:8px;
  padding: 5px 7px;
}
@media (min-width: 768px) {
  font-size:12px;
  padding: 7px 26px;
}
@media (min-width: 992px) { 
  font-size:12px;
  padding: 7px 26px;
}
@media (min-width: 1220px) {
  font-size:12px;
  padding: 7px 26px;
}

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
padding: 7px 26px;
background-color:none; 
color:${theme.btnTextColor}; 
border:1px solid ${theme.btnBorderColor};
cursor: pointer;
font-size:12px;
border-radius:25px;
@media (max-width: 600px) {
  font-size:8px;
  padding: 5px 7px;
}
@media (min-width:601px) {
  font-size:8px;
  padding: 5px 7px;
}
@media (min-width: 768px) {
  font-size:12px;
  padding: 7px 26px;
}
@media (min-width: 992px) { 
  font-size:12px;
  padding: 7px 26px;
}
@media (min-width: 1220px) {
  font-size:12px;
  padding: 7px 26px;
}

&:hover {

}

img {
  width: 15px;
  height: 15px; 
  margin-right: 5px; 
}
;` 









export const CaseImgs=styled.div`
display:flex;
width:100%;
flex-direction:column;
gap:5px;

@media (max-width: 600px) {
  gap:2px;

}
@media (min-width:601px) {
  gap:3px;

}
@media (min-width: 768px) {
  gap:4px;

}
@media (min-width: 992px) { 
  gap:5px;

}
@media (min-width: 1220px) {
  gap:5px;

}

`;
export const PImage = styled.div`
display: flex;
overflow: hidden; 
width:100%;
img {
  width:900px;
  height: max-content; 
  object-fit: cover;
  transition: transform 0.3s ease-in-out; 
  @media (max-width: 600px) {
    width:268px;

  }
  @media (min-width:601px) {
    width:360px;

  }
  @media (min-width: 768px) {
    width:700px;

  }
  @media (min-width: 992px) { 
    width:900px;

  }
  @media (min-width: 1220px) {
    width:900px;

  }
}
&:hover img {
  transform: scale(0.9); 
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

