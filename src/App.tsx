import "./styles/global.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
