import React from 'react'

import {
  ToolbarStyled,
  ToolbarNav,
  ToolbarLogo,
  ToolbarNavItens,
} from './styles'
import DrawerButton from '../DrawerButton'

const ToolBar = ({ toggleDrawer }) => (
  <ToolbarStyled>
    <ToolbarNav>
      <div>
        <DrawerButton click={toggleDrawer} />
      </div>
      <ToolbarLogo>
        <a href="/">Wilson Junior</a>
      </ToolbarLogo>
      <div style={{ flex: 1 }} />
      <ToolbarNavItens>
        <ul>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
        </ul>
      </ToolbarNavItens>
    </ToolbarNav>
  </ToolbarStyled>
)

export default ToolBar