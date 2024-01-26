import React, { useState } from "react";
import styled from "styled-components";

import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../Atoms/AddTaskButton/index";
import { Tasks } from "../../Molecules/Tasks/index";

export const ToDoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    const modifiedTaskList = [...taskList];
    modifiedTaskList.splice(index, 1);
    setTaskList(modifiedTaskList);
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      const modifiedTaskList = [...taskList];
      modifiedTaskList.splice(index, 1);
      setTaskList(modifiedTaskList);
    } else {
      const modifiedTaskList = [...taskList];
      modifiedTaskList[index.name] = value;
      setTaskList(modifiedTaskList);
      /* 更新　*/
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <StyledTask>
            <Tasks
              key={index}
              taskName={task.name}
              defaultIsEditing={task.initializing}
              onTaskComplete={onTaskComplete}
              onTaskNameChange={onTaskNameChange}
            />
          </StyledTask>
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
`;
const StyledTaskList = styled.div``;

const StyledTask = styled.div`
  margin-top: 10px;
`;
