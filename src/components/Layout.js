import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../global-styles.css"

const Page = styled.div`
  display: flex;
`

const Nav = styled.nav`
  height: 100vh;
  width: 11rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.25),
    0 0.125rem 1rem rgba(0, 0, 0, 0.25);
`

const NavTitle = styled.h1`
  margin: 2.5rem 1.25rem 1.5rem;
  font-size: 2rem;
  font-weight: normal;
`

const NavTitleLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: #383a4e;
  outline: 0;
`

const StyledNavLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: #383a4e;
  outline: 0;
  & > span {
    height: 4rem;
    padding: 1rem 1.75rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
    outline: 0;
  }
  &:focus > span {
    box-shadow: inset 0 0.125rem #383a4e, inset -0.125rem -0.125rem #383a4e;
    background: rgba(56, 58, 78, 0.05);
  }
  &:hover > span {
    background: rgba(56, 58, 78, 0.1);
  }

  //=====================
  // ACTIVE NAV LINK
  //=====================
  &.active > span {
    background: #383a4e;
    color: #fff;
  }
  &.active:focus > span {
    box-shadow: inset 0 0.125rem #383a4e, inset -0.125rem -0.125rem #383a4e;
    background: rgba(56, 58, 78, 0.8);
  }
  &.active:hover > span {
    background: #272336;
    color: #fff;
  }
  &.active:focus:hover > span {
    background: rgba(56, 58, 78, 0.9);
  }
`

const NavLink = props => (
  <StyledNavLink activeClassName="active" {...props}>
    <span tabIndex="-1">{props.children}</span>
  </StyledNavLink>
)

const Main = styled.main`
  width: calc(100vw - 11rem);
  height: 100vh;
  overflow: auto;
`

export default function Layout({ children }) {
  return (
    <Page>
      <Nav>
        <NavTitle>
          <NavTitleLink tabIndex="-1" to="/">
            JN
          </NavTitleLink>
        </NavTitle>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/process">Process</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <Main>{children}</Main>
    </Page>
  )
}
