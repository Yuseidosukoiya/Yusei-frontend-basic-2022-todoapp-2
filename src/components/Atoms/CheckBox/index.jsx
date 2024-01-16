import React from "react";

import styled from "styled-components";
import COLOR from "../../../variables/color";

import check from "../../../assets/svg/check.svg";

export const CheckBox = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={check} alt="check icon" />
    </StyledButton>
  );
};

const StyledImage = styled.img`
  display: none;
  width: 100%;
`;

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.DEEP_BLUE_GRAY};
  border-radius: 2px;

  :hover {
    ${StyledImage} {
      display: block;
    }
  }
`;
