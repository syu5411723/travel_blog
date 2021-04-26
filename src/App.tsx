import React from 'react';
import Header from './components/templates/Header';
import { BrowserRouter  } from "react-router-dom"

import GlobalStyles from "./global"
import Main from './components/templates/Main';


function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Header />
      <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
