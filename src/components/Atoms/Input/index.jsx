import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

export const Input = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onEditComplete = {};

  const handleBlur = () => {
    return onEditComplete;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      return onEditComplete;
    }
  };

  return (
    <StyledInput
      ref={inputRef}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      defaultValue=""
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
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
`;
