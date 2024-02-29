import styled from 'styled-components';
import bg from '../../assets/images/gr3.png'; // Update the path to your background image

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bg}) no-repeat;
  background-size: cover;
  background-position: center;
`;



