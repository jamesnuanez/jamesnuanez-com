import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import OriginalP from "../components/elements/P"
import TextContainer from "../components/blocks/TextContainer"
import PageEndLink from "../components/blocks/PageEndLink"
import aboutPhoto from "../images/about-james-nuanez.jpg"

const Content = styled.div`
  max-width: 40rem;
  margin: 4rem auto 10rem;
`

const Img = styled.img`
  width: 100%;
  display: block;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadowLarge};
`

const P = styled(OriginalP)`
  margin: 0 0 3rem;
  &:last-child {
    margin: 0;
  }
`
export default function About() {
  return (
    <Layout>
      <Content>
        <Img
          src={aboutPhoto}
          alt="Here's the keyboard I use, an ErgoDox with a custom keymap"
        />
        <TextContainer>
          <P>
            I build things for the web. I specialize in React, but I also have
            experience building APIs and full stack applications with Node.js. I
            love wrapping my head around a complex idea and building it from the
            ground up, as well as analyzing an existing application and finding
            ways to improve it. I have a strong drive for excellence and I'm
            heavily focused on user experience.
          </P>
          <P>
            I'm currently a front end / full stack / Jamstack engineering
            consultant. Before this I was a VoIP software developer, and before
            that I was a software quality assurance specialist. I've also worked
            as a designer and I've worked in customer support. All of these
            experiences strongly influence my perspective on building
            applications.
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
        <PageEndLink link="/process" text="Learn more about my process" />
      </Content>
    </Layout>
  )
}
