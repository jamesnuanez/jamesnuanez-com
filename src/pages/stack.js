import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PageContent from "../components/blocks/PageContent"
import TextContainer from "../components/blocks/TextContainer"
import PageEndLink from "../components/blocks/PageEndLink"
import P from "../components/elements/P"

export default function Stack() {
  return (
    <Layout pageTitle="Stack">
      <Helmet>
        <title>Stack | James Nuanez</title>
        <meta
          name="description"
          content="My stack, an overview of the tools I've worked with."
        />
      </Helmet>
      <PageContent>
        <TextContainer title="Front End">
          <P>
            In the world of <strong>React</strong> I use{" "}
            <strong>Next.js</strong> when I need a fully featured application
            with server side rendering, <strong>Gatsby</strong> when all I care
            about is speed, and <strong>Create React App</strong> when I just
            want the simplicity and flexibility of a client side rendered
            application. I'm a big fan of <strong>Svelte</strong> and{" "}
            <strong>SvelteKit</strong>, because you just can't beat compiling
            your code as small as possible before shipping it. Outside of modern
            frameworks I've worked with <strong>jQuery</strong> and{" "}
            <strong>Jinja</strong>. I use <strong>Prettier</strong> for code
            formatting.
          </P>
          <P>
            I write custom and responsive CSS. I've used{" "}
            <strong>styled-components</strong> in much of my React work, as well
            as UI frameworks like <strong>Material UI</strong>,{" "}
            <strong>Ant Design</strong>, and <strong>Semantic UI</strong>.
            Outside of React I've used the preprocessor <strong>Less</strong>.
          </P>
          <P>
            I handle accessibility using semantic HTML as much as possible,
            adding custom styling and aria attributes as needed to ensure a good
            experience for keyboard and screen reader users.
          </P>
        </TextContainer>

        <TextContainer title="Back End">
          <P>
            I've built applications from scratch with <strong>Node.js</strong>{" "}
            and I've worked extensively on existing <strong>Python</strong> and{" "}
            <strong>PHP</strong> applications. I love working with{" "}
            <strong>MySQL</strong> and <strong>PostgreSQL</strong>, I've worked
            with <strong>Elasticsearch</strong> and <strong>MongoDB</strong>,
            I've written tests using <strong>Tape</strong>, and I've written API
            documentation using <strong>OpenAPI / Swagger</strong>.
          </P>
        </TextContainer>

        <TextContainer title="Platform">
          <P>
            I've worked extensively with <strong>AWS</strong>. I've set up{" "}
            <strong>VPCs</strong>, worked with an in-house framework for
            deploying Python code to <strong>Lambda Functions</strong>,
            overhauled a <strong>Jenkins</strong> deployment to{" "}
            <strong>EC2 Auto Scaling groups</strong>, and deployed static front
            ends to <strong>S3 + CloudFront</strong>. I've used{" "}
            <strong>BitBucket Pipelines</strong> and{" "}
            <strong>GitHub Actions</strong> to automate deployments to{" "}
            <strong>Cloudflare Workers</strong> and <strong>Vercel</strong>.
            I've even set up a <strong>Linux</strong> virtual machine on{" "}
            <strong>DigitalOcean</strong> as a remote Git server and written{" "}
            <strong>Git Hooks</strong> to automatically deploy Node.js
            applications that are served with <strong>Nginx</strong>. I've
            integrated codebases with <strong>Docker</strong> to ensure that
            teams are on the same versions of everything and as close to
            production as possible.
          </P>
        </TextContainer>

        <TextContainer title="Design">
          <P>
            When designing the front end myself, I use <strong>Figma</strong>{" "}
            for layout and prototyping, to provide as accurate a preview of the
            final product and user experience as possible, reducing
            back-and-forth once coding begins. For bitmap manipulation I use{" "}
            <strong>Gimp</strong> (when on Linux) or <strong>Photoshop</strong>,
            and for vector manipulation I stay in Figma if I can, or bust out{" "}
            <strong>Illustrator</strong>, where I spent way too much of my life
            before I started writing code.
          </P>
        </TextContainer>

        <PageEndLink link="/contact/" text="Get in touch with me" />
      </PageContent>
    </Layout>
  )
}
