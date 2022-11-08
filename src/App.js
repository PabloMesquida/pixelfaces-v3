import React, { Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";
import { Container } from "./App.styles.js";
import Loader from "./components/Loader.js";

const Main = React.lazy(() => import("./components/main/Main.js"));
const Site = React.lazy(() => import("./Site.js"));

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Suspense fallback={<Loader />}>
          <Main />
          <Site />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}

export default App;
