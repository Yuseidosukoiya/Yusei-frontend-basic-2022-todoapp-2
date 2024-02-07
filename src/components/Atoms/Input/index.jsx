import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

export const Input = ({ onEditComplete, defaultValue = "" }) => {
  const AlertHandlerContext = useAlertHandlerContext();
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const setAlert = () => {
    if (inputRef.current.value === null) {
      return AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
    }
  };

  const handleBlur = () => {
    const inputValue = inputRef.current.value;
    onEditComplete(inputValue);
    setAlert();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const inputValue = inputRef.current.value;
      onEditComplete(inputValue);
      setAlert();
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
