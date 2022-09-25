import React from "react"
import styled from "styled-components"
import Link from "../elements/Link"

const Centered = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  @media (max-width: 1023px) {
    margin-bottom: 4rem;
  }
`

export default function PageEndLink({ link, text }) {
  return (
    <Centered>
      <Link to={link}>{text}</Link>
    </Centered>
  )
}
