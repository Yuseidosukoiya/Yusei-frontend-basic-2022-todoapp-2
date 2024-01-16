import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";

import pencil from "../../../assets/svg/pencil.svg";

export const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={pencil} alt="edit icon" />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 50px;
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;

const StyledImage = styled.img`
   {
    width: 100%;
    height: 100%;
  }
`;
