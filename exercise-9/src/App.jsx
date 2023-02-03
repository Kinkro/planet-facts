import { useState } from "react";
import data from "./data.json";

import { GlobalStyles } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HelmetProvider>
      <Helmet></Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigation data={data} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
