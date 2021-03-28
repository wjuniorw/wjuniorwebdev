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
            <a href="/projects">Projetos</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/about">Sobre mim</a>
          </li>
        </ul>
      </ToolbarNavItens>
    </ToolbarNav>
  </ToolbarStyled>
)

export default ToolBar
