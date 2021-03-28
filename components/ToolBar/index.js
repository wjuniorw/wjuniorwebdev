import React from 'react'
import Link from 'next/link'

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
        <Link href="/">
          <a>Wilson Junior</a>
        </Link>
      </ToolbarLogo>
      <div style={{ flex: 1 }} />
      <ToolbarNavItens>
        <ul>
          <li>
            <Link href="/projects">
              <a>Projetos</a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre mim</a>
            </Link>
          </li>
        </ul>
      </ToolbarNavItens>
    </ToolbarNav>
  </ToolbarStyled>
)

export default ToolBar
