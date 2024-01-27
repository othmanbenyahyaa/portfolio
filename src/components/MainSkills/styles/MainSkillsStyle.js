import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:0 10px;
  @media (max-width: 600px) {
    gap:0 4px;
  }
  @media (min-width:601px) {
    gap:0 6px;
  }
  @media (min-width: 768px) {
    gap:0 8px;
  }
  @media (min-width: 992px) { 
    gap:0 10px;
  }
  @media (min-width: 1220px) {
    gap:0 10px;
  }
 
`;
export const Item=styled.div`
display:flex;
align-items:center;
img{
  width:96px;
  height:96px;
  @media (max-width: 600px) {
    width:68px;
    height:68px;
  }
  @media (min-width:601px) {
    width:72px;
    height:72px;
  }
  @media (min-width: 768px) {
    width:82px;
    height:82px;
  }
  @media (min-width: 992px) { 
    width:90px;
    height:90px;
  }
  @media (min-width: 1220px) {
    width:96px;
    height:96px;
  }
}
`;

