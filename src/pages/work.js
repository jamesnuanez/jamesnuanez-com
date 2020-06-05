import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PageEndLink from "../components/blocks/PageEndLink"
import OriginalP from "../components/elements/P"
import Link from "../components/elements/Link"
import workImgTarPitStudios from "../images/work-example-tar-pit-studios.jpg"
import workImgJambonz from "../images/work-example-jambonz.jpg"
import workImgRealTimeTranscriptions from "../images/work-example-real-time-transcriptions.jpg"
import workImgConferencingApplication from "../images/work-example-conferencing-application.jpg"
import workImgJmmnuanez from "../images/work-example-jmmnuanez.jpg"

const Content = styled.div`
  max-width: 60rem;
  padding: 6rem 0 10rem;
  margin: auto;
  @media (max-width: 1023px) {
    padding-top: 2rem;
  }
`

const StyledCard = styled.section`
  display: flex;
  margin-bottom: 6rem;
  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`

const ImgContainer = styled.div`
  width: 55%;
  flex-shrink: 0;
  margin-right: 2.5rem;
  display: flex;
  align-items: center;
  & > img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadowLarge};
  }

  @media (max-width: 1023px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
`
const TextContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 1023px) {
    width: 100%;
    align-items: center;
  }
`

const P = styled(OriginalP)`
  width: 100%;
`

const Card = props => (
  <StyledCard>
    <ImgContainer>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </ImgContainer>
    <TextContainer>
      <P>{props.text}</P>
      <Link external href={props.url}>
        {props.linkText}
      </Link>
    </TextContainer>
  </StyledCard>
)

export default function Work() {
  return (
    <Layout pageTitle="Work">
      <Helmet>
        <title>Work | James Nuanez</title>
        <meta
          name="description"
          content="Examples of websites and web applications that I have built."
        />
      </Helmet>
      <Content>
        <Card
          imgSrc={workImgTarPitStudios}
          imgAlt="Tar Pit Studios Jamstack website and store"
          text="Art studio website and store built with Next.js to combine the fluidity of React with the speed of static site generation and the flexibility of API routes to provide a true Jamstack experience."
          url="https://www.tarpitstudios.com"
          linkText="Visit website"
        />
        <Card
          imgSrc={workImgJambonz}
          imgAlt="Front end for Jambonz communications platform as a service"
          text="Front end for provisioning and configuring a communications platform as a service, built with Create React App and styled-components. Features include sorting table content, bulk editing, and extensive data validation."
          url="https://github.com/jambonz/jambonz-webapp"
          linkText="View code on GitHub"
        />
        <Card
          imgSrc={workImgRealTimeTranscriptions}
          imgAlt="Real-time transcriptions front end"
          text="Front end to display real-time call transcriptions via WebSockets, built with Create React App and Ant Design."
          url="https://github.com/davehorton/voicebot-readout"
          linkText="View code on GitHub"
        />
        <Card
          imgSrc={workImgConferencingApplication}
          imgAlt="Full stack conferencing application"
          text="Full stack application that manages conferencing bridges and call transcriptions for a connected VoIP application. Built with Create React App, styled-components, Node.js, MySQL, OpenAPI / Swagger, and tape for testing."
          url="https://github.com/davehorton/cautious-enigma"
          linkText="View code on GitHub"
        />
        <Card
          imgSrc={workImgJmmnuanez}
          imgAlt="J. M. M. Nuanez full stack website"
          text="Full stack website that sends custom HTML emails and connects to the MailChimp API. Built with Node.js and deployed to DigitalOcean using custom Git hooks."
          url="https://www.jmmnuanez.com"
          linkText="Visit website"
        />
        <PageEndLink link="/about/" text="Learn more about me" />
      </Content>
    </Layout>
  )
}
