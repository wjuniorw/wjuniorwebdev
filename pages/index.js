import React, { useState } from "react";
import { createGlobalStyle } from 'styled-components'

// import Head from './dumb/Head'
// import Link from 'next/link'
// import Btn from "./dumb/Btn";
// import Main from "./dumb/Main-new";
// import Header from './dumb/Header'
// import OldContent from "./dumb/Content";
// import Content from "./components/Content";

import ToolBar from './components/ToolBar'

const GlobalStyle = createGlobalStyle`
  body {
    // background: #22bed9;
    margin: 0;
    padding: 0;
    text-size-adjust: none;
    box-sizing: border-box;
    transition: .25s ease-in-out;
    display: flex;
    height: 100vh;
  }
`

// const Section = (prop) => (
//   <Main headTitle={"WJunior WebDev"} title={"Wilson Junior"}>
//     <Content />
//   </Main>
// );
const App = (props) => {
  const [open, toggle] = useState(false);
  return (
    <>
      <GlobalStyle/>
      <ToolBar toggleDrawer={() => toggle(!open)} />
    </>
  );
};

export default App
