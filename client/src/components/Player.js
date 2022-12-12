import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Query from "./Query";
import {
  currStep,
  setPersonality,
} from "../redux/actions";
import {
  StyledPlayer,
  StyledHeading,
  StyledGrid,
  StyledIframe,
  StyledText,
  StyledH3,
} from "../styled components/styledPlayer";
import { StyledButton } from "../styled components/styledForm";

export default function Player() {
  const recommendations = useSelector((state) => state.recommendations);
  const personality = useSelector((state) => state.personality);
  const dispatch = useDispatch();



  function sendBack() {
    dispatch(currStep("Start"));
    dispatch(setPersonality(""));
  }
  return (
    <StyledPlayer>
      <StyledHeading>{`Bunch of songs Spotify has for You, ${personality}:`}</StyledHeading>
      <StyledText>
        <Query noDesc choice="Your personality type:" output={personality} />
      </StyledText>

      <StyledGrid>
        {recommendations.map((track) => (
          <StyledIframe
            src={`https://open.spotify.com/embed/track/${track.id}`}
            width="250"
            height="80"
            key={track.id}
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        ))}
      </StyledGrid>

      <StyledButton again onClick={sendBack}>
        again!
      </StyledButton>
    </StyledPlayer>
  );
}
