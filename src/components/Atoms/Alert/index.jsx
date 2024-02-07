import React from "react";

import styled from "styled-components";

import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONT_FAMILY from "../../../variables/font_family";

export const Alert = ({ isActive, errorText = "" }) => {
  return <StyledText isActive={isActive}>{errorText}</StyledText>;
};

const StyledText = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${COLOR.RED};
  max-width: 360px;
  width: 100%;
  height: 20px;
  border-radius: 4px;
  padding: 10px 20px;
  color: ${COLOR.WHITE};
  ${TEXT.S};
  font-family: ${FONT_FAMILY.NOTO_SANS};
  opacity: ${(isActive) => (isActive ? 1 : 0)};
  transition: 0.5s ease;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    top: 40px;
    margin: 0px 20px 0px 20px;
  }
`;
