import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
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
  @media (max-width: 700px) {
    position: fixed;
    background: ${({ theme }) => theme.dark};
    color: rgba(255, 255, 255, 0.75);
    height: 3.5rem;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`

const NavTitle = styled.h1`
  margin: 2.5rem 1.25rem 1.5rem;
  font-size: 2rem;
  font-weight: normal;
  @media (max-width: 700px) {
    margin: 0;
    font-size: 1.5rem;
  }
`

const NavTitleLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.dark};
  outline: 0;
  @media (max-width: 700px) {
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: unset;
  }
`

const PageTitle = styled.h1`
  display: none;
  @media (max-width: 700px) {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0;
    display: flex;
    align-items: center;
  }
`

const MenuIcon = styled.button`
  display: none;
  @media (max-width: 700px) {
    display: block;
    padding: 0;
    border: 0;
    background: none;
    outline: 0;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    & > span {
      position: relative;
      height: 3.5rem;
      width: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 0;
    }
    &:focus > span {
      box-shadow: inset 0 0 0 0.25rem rgba(255, 255, 255, 0.75);
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 101;
  @media (max-width: 700px) {
    position: fixed;
    top: 3.5rem;
    right: 0;
    height: calc(100vh - 3.5rem);
    padding-top: 0.5rem;
    overflow: auto;
    background: #fff;
    box-shadow: ${({ theme }) => theme.shadowLarge},
      inset 0 3rem 1rem -3rem rgba(${({ theme }) => theme.darkRgb}, 0.1),
      inset 0 3rem 2rem -3rem rgba(${({ theme }) => theme.darkRgb}, 0.25);
    ${({ closed }) => closed && `display: none;`}
  }
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
    background: rgba(${({ theme }) => theme.darkRgb}, 0.8);
  }
  &.active:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 1);
    color: #fff;
  }
  &.active:focus:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.9);
  }

  //=====================
  // MOBILE
  //=====================
  @media (max-width: 700px) {
    &:focus > span {
      box-shadow: inset 0 0.25rem ${({ theme }) => theme.dark},
        inset 0.25rem -0.25rem ${({ theme }) => theme.dark};
    }
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
  padding: 0 2rem;
  overflow: auto;
  background: #eee;
  @media (max-width: 700px) {
    width: 100%;
    padding: 3.5rem 0.5rem 0;
  }
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

export default function Layout({ pageTitle, children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = e => {
    e.stopPropagation()
    setMenuOpen(!menuOpen)
  }
  useEffect(() => {
    const closeMenu = e => setMenuOpen(false)
    window.addEventListener("click", closeMenu)
    return () => {
      window.removeEventListener("click", closeMenu)
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang="en" />
        <title>James Nuanez</title>
        <meta name="theme-color" content="#383a4e" data-react-helmet="true" />
        <meta
          name="description"
          content="I build fast, responsive, and accessible websites and web applications, from design to deployment, that deliver exceptional user experience."
        />
      </Helmet>
      <Page>
        <Nav>
          <NavTitle>
            <NavTitleLink tabIndex="-1" to="/">
              JN
            </NavTitleLink>
          </NavTitle>
          {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
          <MenuIcon onClick={toggleMenu}>
            <span tabIndex="-1">☰</span>
          </MenuIcon>
          <NavLinks closed={!menuOpen} onClick={e => e.stopPropagation()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/work/">Work</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/process/">Process</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </NavLinks>
        </Nav>
        <Main>{children}</Main>
      </Page>
    </ThemeProvider>
  )
}
