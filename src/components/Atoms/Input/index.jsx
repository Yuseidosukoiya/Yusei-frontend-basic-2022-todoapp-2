import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

export const Input = ({ onEditComplete, defaultValue = "" }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleBlur = () => {
    const inputValue = inputRef.current.value;
    onEditComplete(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const inputValue = inputRef.current.value;
      onEditComplete(inputValue);
    }
  };

  return (
    <StyledInput
      ref={inputRef}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      defaultValue={defaultValue}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 2px;
  padding: 0px 4px;
  ${TEXT.S}
  font-family: ${FONT_FAMILY.NOTO_SANS};
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
`;
