import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import "../global-styles.css"
import OverscrollBackground from "../components/blocks/OverscrollBackground"

const Nav = styled.nav`
  position: fixed;
  height: 100vh;
  width: 11rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadowNav};
  @media (${({ theme }) => theme.breakpointMobile}) {
    overflow: visible;
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
  @media (${({ theme }) => theme.breakpointMobile}) {
    margin: 0;
    font-size: 1.5rem;
  }
`

const NavTitleLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.dark};
  outline: 0;
  @media (${({ theme }) => theme.breakpointMobile}) {
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
`

const PageTitle = styled.h1`
  display: none;
  @media (${({ theme }) => theme.breakpointMobile}) {
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0;
    display: flex;
    align-items: center;
  }
`

const MenuIcon = styled.button`
  display: none;
  @media (${({ theme }) => theme.breakpointMobile}) {
    display: block;
    padding: 0;
    border: 0;
    background: none;
    outline: 0;
    font-size: 1.5rem;
    cursor: pointer;
    & > span {
      height: 3.5rem;
      width: 3.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      outline: 0;
      transition: box-shadow 0.1s;
    }
    & > span > span {
      background: rgba(255, 255, 255, 0.75);
      height: 0.125rem;
      width: 1.5rem;
      margin: 0.1875rem;
    }
    &:focus > span {
      box-shadow: inset 0 0 0 0.25rem rgba(255, 255, 255, 0.75);
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  @media (${({ theme }) => theme.breakpointMobile}) {
    position: fixed;
    top: 3.5rem;
    right: 0;
    height: calc(100vh - 3.5rem);
    padding-top: 0.5rem;
    overflow: auto;
    background: #fff;
    box-shadow: ${({ theme }) => theme.shadowLarge};
    ${({ closed }) => closed && `display: none;`}
  }
`

const Spacer = styled.div`
  @media (${({ theme }) => theme.breakpointMobile}) {
    height: 5rem;
    flex-shrink: 0;
  }
`

const StyledNavLink = styled(Link)`
  flex-shrink: 0;
  text-decoration: none;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.dark};
  outline: 0;
  & > span {
    height: 4rem;
    padding: 1rem 1.75rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.5rem;
    outline: 0;
    transition: background 0.1s;
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
    background: rgba(${({ theme }) => theme.darkRgb}, 1);
    color: #fff;
  }
  &.active:focus > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.8);
  }
  &.active:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.9);
  }

  //=====================
  // MOBILE
  //=====================
  @media (${({ theme }) => theme.breakpointMobile}) {
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
  padding: 0 2rem 0 13rem;
  @media (${({ theme }) => theme.breakpointMobile}) {
    padding: 3.5rem 1rem 0;
  }
`

const theme = {
  dark: "#564647",
  darkRgb: "86, 70, 71",
  light: "#f3f0ed",
  shadowSmall: "0 0.125rem 1rem rgba(86, 70, 71, 0.25)",
  shadowMedium: "0 0.125rem 2rem rgba(86, 70, 71, 0.15)",
  shadowLarge:
    "0 0.5rem 0.5rem rgba(86, 70, 71, 0.1), 0 1rem 2rem rgba(86, 70, 71, 0.25)",
  shadowNav: "0 0 1rem rgba(86, 70, 71, 0.1), 0 0 2rem rgba(86, 70, 71, 0.25)",
  breakpointMobile: "max-width: 700px",
  breakpointHomepage: "max-width: 915px",
  breakpointWorkPage: "max-width: 1023px",
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
        <meta name="theme-color" content="#564647" data-react-helmet="true" />
        <meta
          name="description"
          content="I build fast, responsive, and accessible websites and web applications, from design to deployment, that deliver exceptional user experience."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=20200604"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=20200604"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=20200604"
        />
        <link rel="manifest" href="/site.webmanifest?v=20200604" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=20200604"
          color="#564647"
        />
        <meta name="msapplication-TileColor" content="#564647" />
        <script
          async
          defer
          data-domain="jamesnuanez.com"
          src="https://plausible.io/js/plausible.outbound-links.js"
        ></script>
      </Helmet>
      <Nav>
        <NavTitle>
          <NavTitleLink tabIndex="-1" to="/">
            JN
          </NavTitleLink>
        </NavTitle>
        {pageTitle && <PageTitle>{pageTitle}</PageTitle>}
        <MenuIcon
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span tabIndex="-1">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </MenuIcon>
        <NavLinks closed={!menuOpen} onClick={e => e.stopPropagation()}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work/">Work</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/stack/">Stack</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
          <Spacer />
        </NavLinks>
      </Nav>
      <Main>{children}</Main>
      <OverscrollBackground />
    </ThemeProvider>
  )
}
