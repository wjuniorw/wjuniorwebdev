import React from 'react'
import Link from 'next/link'

import { SideDrawerNav, SideDrawerUl, SideDrawerItem } from './styles'

const SideDrawer = ({ show }) => (
  <SideDrawerNav show={show}>
    <SideDrawerUl>
      <SideDrawerItem>
        <Link href="/about">
          <a>About Me</a>
        </Link>
      </SideDrawerItem>
      <SideDrawerItem>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
      </SideDrawerItem>
    </SideDrawerUl>
  </SideDrawerNav>
)
export default SideDrawer
