import React from "react"
import styled from "styled-components"
import H1 from "../elements/H1"
import Link from "../elements/Link"

const StyledTextContainer = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  @media (${({ theme }) => theme.breakpointMobile}) {
    margin-bottom: 1rem;
    padding: 1.5rem;
  }
  ${({ center, narrow }) =>
    center &&
    `
    max-width: ${narrow ? `24rem` : `27.7rem`};
    margin: 5vh 0 10vh;
    @media (${({ theme }) => theme.breakpointMobile}) {
      margin: 2rem 0;
    }
  `}
`

const LinkContainer = styled.div`
  margin-top: 0;
`

export default function TextContainer({
  center,
  narrow,
  title,
  links,
  children,
}) {
  return (
    <StyledTextContainer center={center} narrow={narrow}>
      {title && <H1>{title}</H1>}
      {children}
      {links && (
        <LinkContainer>
          {links.map((link, i) => {
            const { text, ...props } = link
            return (
              <Link key={i} {...props}>
                {text}
              </Link>
            )
          })}
        </LinkContainer>
      )}
    </StyledTextContainer>
  )
}
