import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PageContent from "../components/blocks/PageContent"
import TextContainer from "../components/blocks/TextContainer"
import P from "../components/elements/P"
import email from "../images/email.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

const ContactP = styled(P)`
  margin-bottom: 1.5rem;
`

export default function Contact() {
  const mobileBreakpoint = "max-width: 374px"
  return (
    <Layout pageTitle="Contact">
      <Helmet>
        <title>Contact | James Nuanez</title>
        <meta name="description" content="Let's connect." />
      </Helmet>
      <PageContent>
        <TextContainer
          title="Let's connect."
          links={[
            {
              wide: true,
              external: true,
              href: "mailto:james@jamesnuanez.com",
              icon: email,
              textMobile: "Email",
              textDesktop: "james@jamesnuanez.com",
              mobileBreakpoint,
            },
            {
              wide: true,
              external: true,
              href: "https://github.com/jamesnuanez",
              icon: github,
              textMobile: "GitHub",
              textDesktop: "github.com/jamesnuanez",
              mobileBreakpoint,
            },
            {
              wide: true,
              external: true,
              href: "https://www.linkedin.com/in/jamesnuanez",
              icon: linkedin,
              textMobile: "LinkedIn",
              textDesktop: "linkedin.com/in/jamesnuanez",
              mobileBreakpoint,
            },
          ]}
        >
          <ContactP>I'd love to hear from you!</ContactP>
        </TextContainer>
      </PageContent>
    </Layout>
  )
}
