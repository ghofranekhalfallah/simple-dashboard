import { ThemeProvider } from "@mui/styles";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import theme from "./components/theme" ;
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
