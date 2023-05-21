import * as React from "react";
import {
  ChakraProvider,
  ColorModeContext,
  ColorModeScript,
} from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme";
import './index.css'

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
