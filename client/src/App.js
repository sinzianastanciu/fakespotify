import FormContainer from "./components/FormContainer";
import Player from "./components/Player";
import Start from "./components/Start";
import Loader from "./components/Loader";

import { useSelector } from "react-redux";
import {
  StyledApp,
  StyledHeading,
  StyledFooter,
  StyledLink,
} from "./styled components/styledApp";

import { GlobalStyle } from "./styled components/global";
import { ThemeProvider } from "styled-components";
import * as theme from "./styled components/theme";

function App() {
  const currStep = useSelector((state) => state.currStep);
  const recommendations = useSelector((state) => state.recommendations);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <StyledHeading>Personality</StyledHeading>
          {currStep === "Start" ? <Start /> : null}
          {currStep === "Form1" ? (
            <FormContainer />
          ) : null}
          {currStep === "Loader" ? <Loader /> : null}
          {currStep === "Player" && recommendations ? <Player /> : null}
          <StyledFooter>
            Created by{" "}
            <StyledLink>Sînziana & Luiza</StyledLink>.
            Powered by Spotify API.
          </StyledFooter>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
