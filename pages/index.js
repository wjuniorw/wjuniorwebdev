import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import ToolBar from '../components/ToolBar'
import SideDrawer from '../components/SideDrawer'
import BackDrop from '../components/Backdrop'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    text-size-adjust: none;
    box-sizing: border-box;
    transition: .25s ease-in-out;
  }
`

const App = (props) => {
  const [open, toggle] = useState(false)
  return (
    <>
      <GlobalStyle />
      <ToolBar toggleDrawer={() => toggle(!open)} />
      <SideDrawer show={open} />
      {open && <BackDrop closeDrawer={() => toggle(false)} />}
    </>
  )
}

export default App
