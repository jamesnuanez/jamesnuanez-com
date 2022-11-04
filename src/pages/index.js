import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import PageContent from "../components/blocks/PageContent"
import PageEndLink from "../components/blocks/PageEndLink"
import TextContainer from "../components/blocks/TextContainer"
import H1 from "../components/elements/H1"
import P from "../components/elements/P"
import profileImage from "../images/profile-james-nuanez.jpg"

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #d3c5bc;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  @media (${({ theme }) => theme.breakpointMobile}) {
    margin-bottom: 1rem;
  }
`

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 245px;
  height: auto;
`

const Subtitle = styled.div`
  font-size: 39px;
  line-height: 150%;
  margin-bottom: 0.4em;
  @media (${({ theme }) => theme.breakpointHomepage}) {
    font-size: 24px;
    font-size: clamp(18px, 5.7vw, 24px);
    margin-bottom: 0.6em;
  }
`

const MobileOnly = styled.span`
  display: none;
  @media (${({ theme }) => theme.breakpointHomepage}) {
    display: inline;
  }
`

const DesktopOnly = styled.span`
  @media (${({ theme }) => theme.breakpointHomepage}) {
    display: none;
  }
`

export default function Home() {
  return (
    <Layout>
      <PageContent homepage>
        <ImgContainer>
          <Img
            src={profileImage}
            width="245"
            height="245"
            alt="Brown and green illustration of James Nuanez."
          />
        </ImgContainer>
        <TextContainer>
          <H1 homepage>
            My name is James<DesktopOnly> Nuanez</DesktopOnly>.
          </H1>
          <Subtitle>
            I build software for the <MobileOnly>web</MobileOnly>
            <DesktopOnly>internet</DesktopOnly>.
          </Subtitle>
          <P>
            From design to deployment, I create fluid and intuitive web
            applications that are fast, responsive, and accessible, and when I'm
            not making things from scratch, I bring maintainability and
            stability to established codebases, relentlessly removing the cruft,
            eliminating elusive bugs, and improving code quality.
          </P>
        </TextContainer>
        <PageEndLink link="/work/" text="View some of my work" />
      </PageContent>
    </Layout>
  )
}
