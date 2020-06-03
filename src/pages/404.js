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

export default function ErrorPage() {
  return (
    <Layout>
      <Container>
        <TextContainer
          center
          title="404"
          links={[{ wide: true, to: "/", text: "Go home" }]}
        >
          <P>Sorry, it's just not there.</P>
        </TextContainer>
      </Container>
    </Layout>
  )
}
