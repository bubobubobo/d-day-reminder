import "./App.css";
import "./styles/global.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}></ThemeProvider>
    </div>
  );
}

export default App;
