import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
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
  box-shadow: ${({ theme }) => theme.shadowNav};
  z-index: 100;
`

const NavTitle = styled.h1`
  margin: 2.5rem 1.25rem 1.5rem;
  font-size: 2rem;
  font-weight: normal;
`

const NavTitleLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.dark};
  outline: 0;
`

const StyledNavLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.dark};
  outline: 0;
  & > span {
    position: relative;
    height: 4rem;
    padding: 1rem 1.75rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
    outline: 0;
  }
  &:focus > span {
    box-shadow: inset 0 0.25rem ${({ theme }) => theme.dark},
      inset -0.25rem -0.25rem ${({ theme }) => theme.dark};
    background: rgba(${({ theme }) => theme.darkRgb}, 0.05);
  }
  &:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.1);
  }

  //=====================
  // ACTIVE NAV LINK
  //=====================
  &.active > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.9);
    color: #fff;
  }
  &.active:focus > span {
    box-shadow: inset 0 0.25rem ${({ theme }) => theme.dark},
      inset -0.25rem -0.25rem ${({ theme }) => theme.dark};
    background: rgba(${({ theme }) => theme.darkRgb}, 0.8);
  }
  &.active:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 1);
    color: #fff;
  }
  &.active:focus:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.9);
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
  padding: 0 1rem;
  overflow: auto;
  background: #eee;
`

const theme = {
  dark: "#383a4e",
  darkRgb: "56, 58, 78",
  light: "#6d748d",
  lightRgb: "109, 116, 141",
  shadowSmall: "0 0.125rem 1rem rgba(56, 58, 78, 0.25)",
  shadowMedium: "0 0.125rem 2rem rgba(56, 58, 78, 0.15)",
  shadowLarge:
    "0 0.5rem 0.5rem rgba(56, 58, 78, 0.1), 0 1rem 2rem rgba(56, 58, 78, 0.25)",
  shadowNav: "0 0 1rem rgba(56, 58, 78, 0.1), 0 0 2rem rgba(56, 58, 78, 0.25)",
}

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
