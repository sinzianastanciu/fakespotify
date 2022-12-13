import React from "react";
import { useDispatch } from "react-redux";
import { currStep } from "../redux/actions";
import { StyledButton } from "../styled components/styledForm";
import { StyledText, StyledText1 } from "../styled components/styledApp";
import { StyledStart } from "../styled components/styledStart";
export default function Start() {
  const dispatch = useDispatch();
  function handleStart() {
    dispatch(currStep("Form1"));
  }
  return (
    <StyledStart>
      <StyledText>
       Let's see what your personality type usually listens to! <div>Enjoy!</div> 
      </StyledText>
      <StyledButton start="true" onClick={handleStart}>
        Start!
      </StyledButton>
      <StyledText1>If you don't know your personality type, you can discover it <a href="https://www.16personalities.com/free-personality-test">here</a></StyledText1>
    </StyledStart>
  );
}
