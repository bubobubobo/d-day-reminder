import "./styles/global.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles";
import { MainRouter } from "./router/MainRouter";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <MainRouter />
        </RecoilRoot>
      </ThemeProvider>
    </div>
  );
}

export default App;
