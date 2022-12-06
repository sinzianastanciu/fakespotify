import Form1 from "./Form1";
import { StyledContainer } from "../styled components/styledFormContainer";

import React from "react";
import { useSelector } from "react-redux";

export default function FormContainer() {
  const currStep = useSelector((state) => state.currStep);
  return (
    <StyledContainer>
      {currStep === "Form1" ? <Form1 /> : null}
    </StyledContainer>
  );
}
