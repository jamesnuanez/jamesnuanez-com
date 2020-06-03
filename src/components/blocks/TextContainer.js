import React from "react"
import styled from "styled-components"
import H1 from "../elements/H1"
import Link from "../elements/Link"

const StyledTextContainer = styled.div`
  margin-bottom: 3rem;
  padding: 2rem;
  border-radius: 1rem;
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  ${({ center, narrow }) =>
    center &&
    `
    max-width: ${narrow ? `24rem` : `27.7rem`};
    margin: 5vh 0 20vh;
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
      <div>{children}</div>
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
