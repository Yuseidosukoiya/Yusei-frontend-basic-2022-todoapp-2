import React from "react";

import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

import plus from "../../../assets/svg/plus.svg";

export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={plus} alt="add task icon" />
      <StyledButtonCopy>タスクを追加</StyledButtonCopy>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  height: 24px;
  padding: 2px 6px;
  gap: 10px;
  border-radius: 12px;
  background-color: ${COLOR.GREEN_TRANSPARENT};
  transition: background-color 0.3s ease;

  :hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const StyledImage = styled.img`
  height: 100%;
`;

const StyledButtonCopy = styled.div`
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
`;
