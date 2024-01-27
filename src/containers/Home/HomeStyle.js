import styled from "styled-components";


export const Container = styled.div`
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
  position:fixed;
  overflow: auto;
  
`;

export const Section=styled.div`
display:flex;
flex-direction:column;
gap:154px;
@media (max-width: 600px) {
  gap:56px;
}
@media (min-width:601px) {
  gap:68px;
}
@media (min-width: 768px) {
  gap:80px;
}
@media (min-width: 992px) { 
  gap:122px;
}
@media (min-width: 1220px) {
  gap:154px;
}
`;




