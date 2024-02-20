import styled from "styled-components";
import theme from "../../styles/Theme.js"


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

export const WorkInfo=styled.div`
display:flex;
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
  font-size: 260px;
  font-style: bold;
  font-weight: 900;
  line-height: 262px;
  text-decoration: none;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 68px;
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
    font-size: 260px;
    line-height: 208px; 
  }
  @media (min-width: 1220px) {
    font-size: 260px;
    line-height: 262px;
    }
}
`;
export const SubItem=styled.div`
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
    font-size: 22px;
    line-height: 22px;
  }
  @media (min-width:601px) {
    font-size: 22px;
    line-height: 22px;
  }
  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 32px;
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
export const SelectedItems=styled.div`
display:flex;
width:100%;
flex-direction:column;
gap:20px;
margin:0;

`;

export const CasesSec=styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:20px;
@media (max-width: 600px) {
 padding:0px 10px;
}
@media (min-width:601px) {
  padding:0px 10px;

}
@media (min-width: 768px) {
  padding:0px 10px;
}
@media (min-width: 992px) { 

}
@media (min-width: 1220px) {

}

`;


export const GetInTouch=styled.div`
display:flex;
flex-direction:column;
padding:20px 0px;
p{
    margin:0;
    color:${theme.primaryTextColor};
    font-family: "Inter", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -1.3px;
    line-height: 30px;
    text-decoration: none;
    text-transform: none;
    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (min-width:601px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (min-width: 992px) { 
      font-size: 22px;
      line-height: 30px;
    }
    @media (min-width: 1220px) {
      font-size: 22px;
      line-height: 30px;
    }
}
`;
export const ContactMe = styled.div`
max-width:200px;
  display: flex;
  padding:7px 7px;
  justify-content:center;
  border-radius:25px;
  color:${theme.btnTextColor};
  text-decoration: none; 
  border:1px solid ${theme.btnBorderColor};
  margin-top:10px;
  @media (max-width: 600px) {
    max-width:170px;
    padding:5px 7px;
  }
  @media (min-width:601px) {
    max-width:170px;
    padding:5px 7px;
  }
  @media (min-width: 768px) {
    max-width:200px;
    padding:5px 7px;
  }
  @media (min-width: 992px) { 
    max-width:200px;
    padding:7px 7px;
  }
  @media (min-width: 1220px) {
    max-width:200px;
    padding:7px 7px;
  }
  span::after {
    content: attr(data-text);
    position: absolute;
    right: 0; 
    width: 100%;
    text-align: center;
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