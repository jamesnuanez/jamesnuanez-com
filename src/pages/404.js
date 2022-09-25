import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PageContent from "../components/blocks/PageContent"
import TextContainer from "../components/blocks/TextContainer"
import P from "../components/elements/P"

export default function ErrorPage() {
  return (
    <Layout>
      <Helmet>
        <title>404 | James Nuanez</title>
        <meta name="description" content="Sorry, it's just not there." />
      </Helmet>
      <PageContent>
        <TextContainer
          center
          title="404"
          links={[{ wide: true, to: "/", text: "Go home" }]}
        >
          <P>Sorry, it's just not there.</P>
        </TextContainer>
      </PageContent>
    </Layout>
  )
}
