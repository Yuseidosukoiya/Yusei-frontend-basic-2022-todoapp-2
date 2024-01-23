import React, { useState } from "react";
import styled from "styled-components";

import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONT_FAMILY from "../../../variables/font_family";

import { CheckBox } from "../../Atoms/CheckBox/index";
import { EditButton } from "../../Atoms/EditButton/index";
import { Input } from "../../Atoms/Input/index";

export const Tasks = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = (e) => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <CheckBox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  overflow: hidden;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  margin-right: 10px;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;
const StyledTaskName = styled.div`
  display: flex;
  flex: 1;
  margin-right: 10px;
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONT_FAMILY.NOTO_SANS};
  ${TEXT.S};
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
`;
