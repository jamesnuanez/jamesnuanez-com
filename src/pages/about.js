import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import OriginalP from "../components/elements/P"
import TextContainer from "../components/blocks/TextContainer"
import PageEndLink from "../components/blocks/PageEndLink"
import aboutPhoto from "../images/about-james-nuanez.jpg"

const Content = styled.div`
  max-width: 40rem;
  padding: 4rem 0 10rem;
  margin: auto;
  @media (max-width: 1023px) {
    padding-top: 2rem;
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  background-color: #a3581d;
  @media (max-width: 1023px) {
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
          content="I build things for the web. I specialize in React, but I also have experience building APIs and full stack applications with Node.js. I love wrapping my head around a complex idea and building it from the ground up, as well as analyzing an existing application and finding ways to improve it. I have a strong drive for excellence and I'm heavily focused on user experience."
        />
      </Helmet>
      <Content>
        <Img
          src={aboutPhoto}
          width="1161"
          height="683"
          alt="Here's the keyboard I use, an ErgoDox with a custom keymap"
        />
        <TextContainer>
          <P>
            I build things for the web. I specialize in React, but I also have
            experience building APIs and full stack applications with Node.js. I
            can assess and organize complex ideas and build them from the ground
            up, as well as analyze existing applications and find the best ways
            to improve them. I have a strong drive for excellence and I'm
            heavily focused on user experience.
          </P>
          <P>
            I'm currently working full time as a front end developer. I've also
            worked as a full stack consultant, VoIP software developer, software
            quality assurance specialist, designer, and I've even worked in
            customer support. All of these experiences strongly influence my
            perspective on building applications.
          </P>
          <P>
            I started in design, earning a bachelor of fine arts in illustration
            and working as a web and graphic designer. This taught me how to
            arrange visual elements for the best possible experience. Having
            worked in quality assurance, I know how many ways a thing can break
            and how to hit it from every possible angle, which helps me build
            resilient applications. My time in customer support showed me how to
            see things from the customer's perspective, and because of that I
            build applications that are flexible and intuitive enough for anyone
            to use.
          </P>
          <P>
            And to achieve all of that, I have a pretty simple methodology: plan
            diligently, focus my efforts, and beat the crap out of whatever I'm
            building until it stops falling over.
          </P>
        </TextContainer>
        <PageEndLink link="/process/" text="Learn more about my process" />
      </Content>
    </Layout>
  )
}
