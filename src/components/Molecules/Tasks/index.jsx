import React, { useState } from "react";
import styled from "styled-components";

import { CheckBox } from "../../Atoms/CheckBox/index";
import { EditButton } from "../../Atoms/EditButton/index";
import { Input } from "../../Atoms/Input/index";

export const Tasks = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultEditing);

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
`;
const StyledTaskName = styled.div`
  display: flex;
  flex: 1;
  margin-right: 10px;
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
`;
