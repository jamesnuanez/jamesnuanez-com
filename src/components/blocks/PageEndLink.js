import React from "react"
import styled from "styled-components"
import Link from "../elements/Link"

const Centered = styled.div`
  margin-bottom: 6rem;
  text-align: center;
  @media (${({ theme }) => theme.breakpointMobile}) {
    margin-top: 1rem;
    margin-bottom: 8rem;
  }
`

export default function PageEndLink({ link, text }) {
  return (
    <Centered>
      <Link to={link}>{text}</Link>
    </Centered>
  )
}
