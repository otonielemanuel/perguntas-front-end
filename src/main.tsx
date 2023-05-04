import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global/GlobalStyles";

import Home from '../src/pages/home'
import Junior from '../src/pages/junior'
import Pleno from '../src/pages/pleno'
import Senior from '../src/pages/senior'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'junior',
        element: <Junior />,
      },
      {
        path: 'pleno',
        element: <Pleno />,
      },
      {
        path: 'senior',
        element: <Senior />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
