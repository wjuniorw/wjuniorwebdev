import React from 'react'
import styled from 'styled-components'

const ToggleDrawer = styled.button`
  @media (min-width: 769px) {
    display: none;
  }
  :focus {
    outline: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20px;
  width: 24px;
  border: none;
  cursor: pointer;
  background: transparent;
`
const ButtonLine = styled.div`
  width: 20px;
  height: 2px;
  background: #fff;
`

const DrawerButton = ({click}) => (
  <ToggleDrawer onClick={()=> click()}>
    <ButtonLine/>
    <ButtonLine/>
    <ButtonLine/>
  </ToggleDrawer>
)

export default DrawerButton
