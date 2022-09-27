import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PageContent from "../components/blocks/PageContent"
import TextContainer from "../components/blocks/TextContainer"
import P from "../components/elements/P"
import email from "../images/email.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

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
      <PageContent>
        <TextContainer
          center
          narrow
          title="Say hello"
          links={[
            {
              wide: true,
              external: true,
              white: true,
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
              white: true,
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
              white: true,
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
            Drop me a line, look at some code, or send me an invite if you feel
            so inclined. &nbsp; : )
          </P>
        </TextContainer>
      </PageContent>
    </Layout>
  )
}
