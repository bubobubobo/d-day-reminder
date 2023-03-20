import "./styles/global.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { MainRouter } from "./router/MainRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
