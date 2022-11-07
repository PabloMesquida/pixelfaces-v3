import { GlobalStyle } from "./GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";
import { Container, SiteContainer } from "./App.styles.js";
import Main from "./components/main/Main.js";
import Site from "./Site.js";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <SiteContainer>
          <Main />
          <Site />
        </SiteContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
