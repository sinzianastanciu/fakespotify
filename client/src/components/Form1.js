import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGenre, setPersonality, currStep } from "../redux/actions";
import { genres, personalities } from "../helpers/genres";
import {
  StyledAsk,
  StyledCentering,
  StyledInputContainer,
  StyledSelectContainer,
  StyledSelect,
  StyledOption,
  StyledArrow,
  StyledDescription,
  StyledInput,
  StyledWarning,
  StyledButton,
} from "../styled components/styledForm";
import { useState } from "react";

export default function Form1() {
  const personality = useSelector((state) => state.personality);
  const genres = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  function handlePersonality(e) {
    dispatch(setPersonality(e.target.value));
    const listOfGenres = personalities.find((el) => el.personality === e.target.value).genres.toString();
    dispatch(setGenre(listOfGenres));
  }
 
  function sendForm1(e) {
    e.preventDefault();
    setClicked(true);
    if (personality) {
      dispatch(currStep("Loader"));
    }
  }

  return (
    <StyledAsk step1>
      <StyledCentering select>
        <label htmlFor="genre">What's your personality type?</label>
        <StyledSelectContainer>
          <StyledSelect type="submit" value={`${personality}`} onChange={handlePersonality}>
            <StyledOption>Personality Type:</StyledOption>
            <StyledOption>---------</StyledOption>
            {personalities.map((elem) => (
              <StyledOption item={elem} key={`${personalities.indexOf(elem)}`}>
                {elem.personality}
              </StyledOption>
            ))}
          </StyledSelect>
          <StyledArrow />
        </StyledSelectContainer>
        <StyledWarning opacity={clicked && personality === "" ? 1 : 0} margin>
          Please select personality
        </StyledWarning>
      </StyledCentering>
      <StyledButton next onClick={sendForm1}>
        next
      </StyledButton>
    </StyledAsk>
  );
}
