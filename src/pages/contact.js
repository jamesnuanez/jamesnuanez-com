import React from "react"
import styled from "styled-components"
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
`

export default function Contact() {
  return (
    <Layout>
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
              text: "james@jamesnuanez.com",
            },
            {
              wide: true,
              external: true,
              href: "https://github.com/jamesnuanez",
              icon: github,
              text: "github.com/jamesnuanez",
            },
            {
              wide: true,
              external: true,
              href: "https://www.linkedin.com/in/jamesnuanez",
              icon: linkedin,
              text: "linkedin.com/in/jamesnuanez",
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
