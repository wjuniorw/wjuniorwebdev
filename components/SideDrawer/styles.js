import styled from 'styled-components'

export const SideDrawerNav = styled.nav`
  top: 0;
  left: 0;
  width: 70%;
  z-index: 20;
  height: 100%;
  position: fixed;
  max-width: 400px;
  background: #fff;
  ${'' /* box-shadow: 1px 0 7px rgba(0, 0, 0, 0.6); */}
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);
  transform: translateX(${({ show }) => (show ? '0' : '-100%')});
  transition: transform 0.3s ease-out;
`
export const SideDrawerUl = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;
  justify-content: center;
`
export const SideDrawerItem = styled.li`
  margin: 0.5rem 0;
  border-bottom: solid 1px #22bed9;
  ${'' /* box-shadow: 0 0px 5px #22bad9; */}
  ${'' /* box-shadow: 1px 1px 5px -3px rgba(34,150,200, 0.5); */}
  a {
    color: #22bad9;
    font-size: 1.2rem;
    text-decoration: none;
  }
  a:hover,
  a:active {
    color: #fa923f;
    ${'' /* color: rgb(3, 231, 255); */}
  }
`
