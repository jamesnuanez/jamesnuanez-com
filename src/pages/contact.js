import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import TextContainer from "../components/blocks/TextContainer"
import P from "../components/elements/P"
import email from "../images/email.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    min-height: calc(100vh - 3.5rem);
  }
`

export default function Contact() {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
    const windowIsMobile = window.matchMedia("(max-width: 400px)")
    setIsMobile(windowIsMobile.matches)
    const setIfMobile = e => setIsMobile(e.matches)
    windowIsMobile.addListener(setIfMobile)
    return () => {
      windowIsMobile.removeListener(setIfMobile)
    }
  }, [])
  return (
    <Layout pageTitle="Contact">
      <Helmet>
        <title>Contact | James Nuanez</title>
        <meta
          name="description"
          content="Let's work together! I am currently accepting front end and full stack positions. I like variety, so I'm open to both consulting and full time positions."
        />
      </Helmet>
      <Container>
        <TextContainer
          center
          narrow
          title="Work status"
          links={[
            {
              wide: true,
              external: true,
              dark: true,
              href: "mailto:james@jamesnuanez.com",
              icon: email,
              text: isMobile
                ? "Email"
                : isMobile === false
                ? "james@jamesnuanez.com"
                : "",
              noScriptText: "Email",
            },
            {
              wide: true,
              external: true,
              href: "https://github.com/jamesnuanez",
              icon: github,
              text: isMobile
                ? "GitHub"
                : isMobile === false
                ? "github.com/jamesnuanez"
                : "",
              noScriptText: "GitHub",
            },
            {
              wide: true,
              external: true,
              href: "https://www.linkedin.com/in/jamesnuanez",
              icon: linkedin,
              text: isMobile
                ? "LinkedIn"
                : isMobile === false
                ? "linkedin.com/in/jamesnuanez"
                : "",
              noScriptText: "LinkedIn",
            },
          ]}
        >
          <P>
            I am currently accepting front end and full stack positions. I like
            variety, so I'm open to both consulting and full time positions.
          </P>
        </TextContainer>
      </Container>
    </Layout>
  )
}
