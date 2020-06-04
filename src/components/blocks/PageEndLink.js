import React from "react"
import styled from "styled-components"
import Link from "../elements/Link"

const Centered = styled.div`
  margin-top: 4rem;
  text-align: center;
  @media (max-width: 1023px) {
    margin-top: 2rem;
  }
`

export default function PageEndLink({ link, text }) {
  return (
    <Centered>
      <Link to={link}>{text}</Link>
    </Centered>
  )
}
