import React from "react";
import styled from "styled-components";

import BREAKPOINT from "../../../variables/breakpoint";

import { ToDoCard } from "../../Organisms/ToDoCard/index";
import { Title } from "../../Atoms/Title/index";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <ToDoCard />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 20px 20px 20px;
  gap: 20px;
  align-items: center;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px;
  }
`;
