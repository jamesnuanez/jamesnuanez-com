import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import OriginalP from "../components/elements/P"
import PageContent from "../components/blocks/PageContent"
import TextContainer from "../components/blocks/TextContainer"
import PageEndLink from "../components/blocks/PageEndLink"
import aboutPhoto from "../images/about-james-nuanez.jpg"

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  background-color: #a3581d;
  @media (${({ theme }) => theme.breakpointMobile}) {
    margin-bottom: 1rem;
  }
`

const P = styled(OriginalP)`
  margin: 0 0 3rem;
  &:last-child {
    margin: 0;
  }
`
export default function About() {
  return (
    <Layout pageTitle="About">
      <Helmet>
        <title>About | James Nuanez</title>
        <meta
          name="description"
          content="I've been writing software professionally since 2018. I've led teams and I've worked as a software engineer, front-end developer, full-stack consultant, and VoIP software developer."
        />
      </Helmet>
      <PageContent>
        <Img
          src={aboutPhoto}
          width="1161"
          height="683"
          alt="Here's the keyboard I use, an ErgoDox with a custom keymap"
        />
        <TextContainer>
          <P>
            I've been writing software professionally since 2018. I've led teams
            and I've worked as a software engineer, front-end developer,
            full-stack consultant, and VoIP software developer. Before that, I
            worked as a software quality assurance specialist, as a web and
            graphic designer, and even as a customer support representative, all
            since earning a bachelor of fine arts in illustration. All of these
            experiences have shaped the way I build applications today.
          </P>
          <P>
            My roots in visual art and design greatly influenced my ability to
            construct elegant user interfaces. Customer service taught me how to
            see the product from the customer's perspective, highlighting the
            importance of an intuitive experience. And quality assurance showed
            me just how many ways a thing can break, leaving me with a
            deep-seated obligation to make everything rock solid.
          </P>
          <P>
            And all of this results in me being obsessed with user experience.
            If it's not fast and accessible, if the navigation isn't effortless,
            and if it's not completely obvious exactly what is going to happen
            when you tap on any part of any screen, then it's just not ready to
            ship.
          </P>
          <P>
            But it's not just about the user's experience, it's about the
            developer's experience as well. I know how painful it is to deal
            with a convoluted codebase and a fragile deployment pipeline, and I
            know that these things get forwarded to the customer in the form of
            slow progress, bugs, and instability. I put great importance on
            improving code quality, with an emphasis on simplicity and
            readability, as well as improving local development environments,
            implementing ephemeral environments, and stabilizing deployments,
            because this is what it takes to write software that can maintaining
            a high level of excellence while continually growing and changing
            over time.
          </P>
        </TextContainer>
        <PageEndLink link="/stack/" text="Check out my stack" />
      </PageContent>
    </Layout>
  )
}
