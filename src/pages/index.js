import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import TextContainer from "../components/blocks/TextContainer"
import P from "../components/elements/P"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Layout>
      <Container>
        <TextContainer
          center
          title="I am James Nuanez"
          links={[
            { wide: true, to: "/work", text: "View my work" },
            {
              wide: true,
              external: true,
              href: "https://github.com/jamesnuanez",
              text: "View code on GitHub",
            },
          ]}
        >
          <P>
            I build fast, responsive, and accessible websites and web
            applications, from design to deployment, that deliver exceptional
            user experience.
          </P>
        </TextContainer>
      </Container>
    </Layout>
  )
}
