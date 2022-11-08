import React, { Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";
import { Container } from "./App.styles.js";
import Loader from "./components/Loader.js";
import Site from "./Site.js";

const Main = React.lazy(() => import("./components/main/Main.js"));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Suspense fallback={<Loader />}>
          <Main />
        </Suspense>
        <Site />
      </Container>
    </ThemeProvider>
  );
}

export default App;
