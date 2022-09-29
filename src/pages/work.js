import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PageContent from "../components/blocks/PageContent"
import PageEndLink from "../components/blocks/PageEndLink"
import H1 from "../components/elements/H1"
import OriginalP from "../components/elements/P"
import Link from "../components/elements/Link"
import workImgTarPitStudios from "../images/work-example-tar-pit-studios.jpg"
import workImgJambonz from "../images/work-example-jambonz.jpg"
import workImgTilthAndTine from "../images/work-example-tilth-and-tine.jpg"
import workImgConferencingApplication from "../images/work-example-conferencing-application.jpg"
import workImgRealTimeTranscriptions from "../images/work-example-real-time-transcriptions.jpg"

const StyledCard = styled.section`
  display: flex;
  margin-bottom: 6rem;
  @media (${({ theme }) => theme.breakpointWorkPage}) {
    flex-wrap: wrap;
  }
`

const ImgContainer = styled.div`
  width: 55%;
  flex-shrink: 0;
  margin-right: 2.5rem;
  display: flex;
  align-items: center;

  @media (${({ theme }) => theme.breakpointWorkPage}) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  background-color: ${props => props.backgroundColor};
`

const TextContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  @media (${({ theme }) => theme.breakpointWorkPage}) {
    width: 100%;
  }
  @media (${({ theme }) => theme.breakpointMobile}) {
    padding: 1.5rem;
  }
`

const P = styled(OriginalP)`
  width: 100%;
`

const Card = props => (
  <StyledCard>
    <ImgContainer>
      <Img
        src={props.imgSrc}
        width="1600"
        height="900"
        alt={props.imgAlt}
        backgroundColor={props.imgbackgroundColor}
      />
    </ImgContainer>
    <TextContainer>
      <H1 work>{props.title}</H1>
      <P>{props.text}</P>
      <Link external work href={props.url}>
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
          content="Examples of web applications I've built."
        />
      </Helmet>
      <PageContent wide>
        <Card
          imgSrc={workImgTarPitStudios}
          imgAlt="Screenshot of Tar Pit Studios Jamstack website and store, built by James Nuanez."
          imgbackgroundColor="#fedb75"
          title="Jamstack with Next.js"
          text="Built with Next.js to combine the fluidity of React with the speed of static site generation and the flexibility of API routes, this application connects to Braintree and Printful for serverless payment processing and product management. Deployed to Vercel."
          url="https://www.tarpitstudios.com"
          linkText="Visit website"
        />
        <Card
          imgSrc={workImgJambonz}
          imgAlt="Screenshot of Jambonz CPaaS front end, showing one step in a multi-step setup process, built by James Nuanez."
          imgbackgroundColor="#f3f3f3"
          title="CPaaS Front End"
          text="Built with Create React App using React Hooks and styled-components, this user interface provides an effortless provisioning and configuration experience, including some fun front-end features like table sorting and bulk editing."
          url="https://github.com/jambonz/jambonz-webapp"
          linkText="View code on GitHub"
        />
        <Card
          imgSrc={workImgTilthAndTine}
          imgAlt="Screenshot of Tilth & Tine website built with Svelte, Prismic CMS, and Cloudflare Workers, built by James Nuanez."
          imgbackgroundColor="#fff"
          title="Svelte & Prismic CMS"
          text="Built with the Svelte framework Sapper (precursor to SvelteKit), integrated with Prismic CMS, and automatically deployed to Cloudflare Workers using BitBucket Pipelines."
          url="https://www.tilthandtine.com"
          linkText="Visit website"
        />
        <Card
          imgSrc={workImgConferencingApplication}
          imgAlt="Screenshot of a full stack application that manages conference bridges and call transcriptions, built by James Nuanez."
          imgbackgroundColor="#fff"
          title="Full Stack Conferencing"
          text="Built with Create React App, styled-components, Node.js, MySQL, OpenAPI / Swagger, and Tape for testing, this application manages conferencing bridges and call transcriptions for a connected VoIP application."
          url="https://github.com/davehorton/cautious-enigma"
          linkText="View code on GitHub"
        />
        <Card
          imgSrc={workImgRealTimeTranscriptions}
          imgAlt="Screenshot of a front end that presents a chat-style view of call transcriptions in real time, built by James Nuanez."
          imgbackgroundColor="#eff3f6"
          title="Real-Time Transcriptions"
          text="Front end to display real-time call transcriptions via WebSockets, built with Create React App and Ant Design."
          url="https://github.com/davehorton/voicebot-readout"
          linkText="View code on GitHub"
        />
        <PageEndLink link="/about/" text="Learn more about me" />
      </PageContent>
    </Layout>
  )
}
