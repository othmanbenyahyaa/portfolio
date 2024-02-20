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

export const ContentSection=styled.div`
display:flex;
flex-direction:column;
gap:30px;
padding:6pxpx 0px 6px 230px;
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
width:100%;
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
export const AboutSection=styled.div`
display:flex;
width:100%;
flex-direction:column;
gap:36px;

`;
export const AboutBox=styled.div`
max-width:980px;
display:flex;
flex-direction:column;
gap:10px;


h1{
  margin:0;
  color:${theme.primaryTextColor};
    font-family: "Inter", sans-serif;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: -3.9px;
    text-decoration: none;
    text-transform: uppercase;
    @media (max-width: 600px) {
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -2.9px;

    }
    @media (min-width:601px) {
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -2.9px;
    }
    @media (min-width: 768px) {
      font-size: 38px;
      line-height: 38px;
      letter-spacing: -2.9px;
    }
    @media (min-width: 992px) { 
      font-size: 52px;
      line-height: 52px;
      letter-spacing: -3.9px;

    }
    @media (min-width: 1220px) {
      font-size: 52px;
      line-height: 52px;
      letter-spacing: -3.9px;

    }
  }
`;
export const AbItem=styled.div`
display:flex;
max-width:980px;

p{
  color:${theme.primaryTextColor};
  margin:0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (min-width:601px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 992px) {
    font-size: 14px;
  }
  @media (min-width: 1220px) {
    font-size: 14px;
    }
}
`;
export const SkillsBox=styled.div`
max-width:980px;
display:flex;
flex-direction:column;
gap:10px;
h1{
  color:${theme.primaryTextColor};
  @media (max-width: 600px) {
    font-size: 22px;
  }
  @media (min-width:601px) {
    font-size: 22px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 992px) {
    font-size: 62px;
  }
  @media (min-width: 1220px) {
    font-size: 62px;
    }
 
}
`;
export const Skills=styled.div`
display:flex;
flex-direction:column;
gap:20px;

p{
  color:${theme.primaryTextColor};
  margin:0;
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (min-width:601px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 992px) {
    font-size: 14px;
  }
  @media (min-width: 1220px) {
    font-size: 14px;
    }
}
`;
export const SItems=styled.div`
display:flex;
gap:5px 5px;
flex-wrap: wrap;
`;
export const Item=styled.div`
display: flex;
align-items: center;
justify-content:center;
background-color:none; 
color:${theme.primaryTextColor}; 
border:1px solid ${theme.btnBorderColor};
cursor: pointer;
font-size:16px;
border-radius:7px;
padding:3px 5px;
gap:0 4px;

&:hover {

}
img{
  margin:0;
  width:36px;
  height:36px;
}`;

export const GetCv=styled.div` 
max-width:210px;
display: flex;
align-items: center;
justify-content:center;
padding: 5px 0px;
background-color:none; 
color:${theme.primaryTextColor}; 
border:1px solid ${theme.btnBorderColor};
cursor: pointer;
font-size:12px;
border-radius:25px;
gap:0 4px;

&:hover {

}

;` 
export const GetInTouchBox=styled.div`
max-width:980px;
display:flex;
flex-direction:column;
margin-bottom:20px;
gap:10px;
h1{
  color:${theme.primaryTextColor}; 
  margin:0;
  @media (max-width: 600px) {
    font-size: 22px;
  }
  @media (min-width:601px) {
    font-size: 22px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 992px) {
    font-size: 62px;
  }
  @media (min-width: 1220px) {
    font-size: 62px;
    }
}
`;
export const GetInTouch=styled.div`
display:flex;
p{
  margin:0;
  color:${theme.primaryTextColor}; 
  @media (max-width: 600px) {
    font-size: 12px;
  }
  @media (min-width:601px) {
    font-size: 12px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 992px) {
    font-size: 14px;
  }
  @media (min-width: 1220px) {
    font-size: 14px;
    }
}
`;
export const GetInTouchBtn=styled.div` 
max-width:210px;
display: flex;
align-items: center;
justify-content:center;
padding: 5px 0px;
background-color:none; 
border:1px solid ${theme.btnBorderColor};
color:${theme.primaryTextColor}; 
cursor: pointer;
font-size:12px;
border-radius:25px;
gap:0 4px;
text-decoration:none;
&:hover {

}


;` 
export const Certification=styled.div`
max-width:980px;
display:flex;
flex-direction:column;
gap:10px;
h1{
  margin:0;
color:${theme.primaryTextColor}; 
margin:0;
@media (max-width: 600px) {
  font-size: 22px;
}
@media (min-width:601px) {
  font-size: 22px;
}
@media (min-width: 768px) {
  font-size: 32px;
}
@media (min-width: 992px) {
  font-size: 62px;
}
@media (min-width: 1220px) {
  font-size: 62px;
  }

}
p{
  margin:0;
  color:${theme.primaryTextColor}; 
@media (max-width: 600px) {
  font-size: 12px;
}
@media (min-width:601px) {
  font-size: 12px;
}
@media (min-width: 768px) {
  font-size: 14px;
}
@media (min-width: 992px) {
  font-size: 14px;
}
@media (min-width: 1220px) {
  font-size: 14px;
  }
}
`;
export const GetCertificate=styled.div` 
max-width:210px;
display: flex;
align-items: center;
justify-content:center;
padding: 5px 0px;
background-color:none; 
border:1px solid ${theme.btnBorderColor};
color:${theme.primaryTextColor}; 
cursor: pointer;
font-size:12px;
border-radius:25px;
gap:0 4px;

&:hover {

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