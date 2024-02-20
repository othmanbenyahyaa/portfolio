import  { useState } from 'react';
import PropTypes from 'prop-types';
import { BtnWithIconStyle } from './styles/BtnWithIconStyle.js';
import MoveToIcon from "../../assets/icons/toRightW.png";
import MoveToIconB from "../../assets/icons/toRight.png";

const BtnWithIcon = ({buttonText}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <BtnWithIconStyle 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {buttonText}
      <img src={isHovered ? MoveToIconB : MoveToIcon} alt="Move icon"/>
    </BtnWithIconStyle>
  );
};
BtnWithIcon.propTypes = {
  buttonText: PropTypes.string.isRequired, 
};
export default BtnWithIcon;

