import React from "react";

import { SideDrawerNav, SideDrawerUl, SideDrawerItem } from "./styles";

const SideDrawer = ({ show }) => (
  <SideDrawerNav show={show}>
    <SideDrawerUl>
      <SideDrawerItem>
        <a href="/">About Me</a>
      </SideDrawerItem>
      <SideDrawerItem>
        <a href="/Skills">Skills</a>
      </SideDrawerItem>
    </SideDrawerUl>
  </SideDrawerNav>
);
export default SideDrawer;
