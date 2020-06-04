import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import TextContainer from "../components/blocks/TextContainer"
import PageEndLink from "../components/blocks/PageEndLink"
import P from "../components/elements/P"

const Content = styled.div`
  max-width: 40rem;
  margin: 4rem auto 10rem;
  @media (max-width: 1023px) {
    margin-top: 2rem;
  }
`

export default function Process() {
  return (
    <Layout pageTitle="Process">
      <Content>
        <TextContainer title="Planning">
          <P>
            Probably the most critical portion of building an application, I use
            pen, paper, whiteboards, and meandering walks to allow my brain the
            space to dissect a goal, look at it from as many angles as possible,
            and organize an approach to tackling it.
          </P>
        </TextContainer>

        <TextContainer title="Design">
          <P>
            Once I'm ready to visualize a project, I use <strong>Figma</strong>{" "}
            for layout and prototyping. This gives both myself and the client a
            thorough preview of the product, including user experience and an
            idea of how the features will work. For bitmap image manipulation I
            look to <strong>Gimp</strong> (when on Linux) or{" "}
            <strong>Photoshop</strong>, and for vector manipulation I stay in
            Figma if I can, or I look to <strong>Inkscape</strong> (again, on
            Linux) or <strong>Illustrator</strong>.
          </P>
        </TextContainer>

        <TextContainer title="Front End / Jamstack">
          <P>
            I build Single Page Applications with{" "}
            <strong>Create React App</strong> and Server Side Rendered websites
            using <strong>Next.js</strong>. I implement responsive and
            cross-browser friendly styling with{" "}
            <strong>styled-components</strong> whenever I can, though I've also
            used frameworks like <strong>Material UI</strong>,{" "}
            <strong>Ant Design</strong>, and <strong>Semantic UI</strong>. For
            Jamstack sites, I deploy to <strong>Netlify</strong> and{" "}
            <strong>Vercel</strong> (formerly Zeit Now) to take advantage of
            their global CDNs. I've also used <strong>AWS Lambda</strong> for
            serverless functions.
          </P>
        </TextContainer>

        <TextContainer title="Back End">
          <P>
            For full stack applications, I primarily use{" "}
            <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
            <strong>MySQL</strong> (though I've also used{" "}
            <strong>MongoDB</strong>). I've used{" "}
            <strong>OpenAPI / Swagger</strong> for API documentation and{" "}
            <strong>tape</strong> for testing. I deploy to{" "}
            <strong>Linux</strong> virtual machines on{" "}
            <strong>DigitalOcean</strong> or <strong>AWS</strong>, served with{" "}
            <strong>NGINX</strong>, with TLS certificates through{" "}
            <strong>Let's Encrypt</strong>.
          </P>
        </TextContainer>

        <TextContainer title="Tooling">
          <P>
            I use <strong>Git</strong> for version control (via the{" "}
            <strong>command line</strong>, <strong>GitHub</strong>, or{" "}
            <strong>GitLab</strong>). I use feature branches, I write clear and
            concise commit messages, and I've set up <strong>Git Hooks</strong>{" "}
            for automated deployment. I use <strong>Sublime Text</strong> with{" "}
            <strong>ESLint</strong> and <strong>Prettier</strong> to ensure code
            quality.
          </P>
        </TextContainer>

        <PageEndLink link="/contact/" text="Get in touch with me" />
      </Content>
    </Layout>
  )
}
