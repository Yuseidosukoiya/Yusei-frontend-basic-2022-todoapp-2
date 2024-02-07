import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import { AddTaskButton } from "../../Atoms/AddTaskButton/index";
import { Tasks } from "../../Molecules/Tasks/index";

export const ToDoCard = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("taskList");
    if (data) {
      setTaskList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    const modifiedTaskList = [...taskList];
    modifiedTaskList.splice(index, 1);
    setTaskList(modifiedTaskList);
  };

  const onTaskNameChange = (value, index) => {
    const modifiedTaskList = [...taskList];
    if (value === "") {
      modifiedTaskList.splice(index, 1);
      AlertHandlerContext.setAlert("タスクの名前が設定されていません。");
    } else {
      modifiedTaskList[index].name = value;
      modifiedTaskList[index].initializing = false;
    }
    setTaskList(modifiedTaskList);
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
              onTaskComplete={() => onTaskComplete(index)}
              onTaskNameChange={(value) => onTaskNameChange(value, index)}
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
  width: 100%;
  max-width: 460px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: none;
  }
`;

const StyledTaskList = styled.div``;

const StyledTask = styled.div`
  margin-top: 10px;
`;
