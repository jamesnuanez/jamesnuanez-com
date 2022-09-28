import styled from "styled-components"

const H1 = styled.h1`
  font-weight: normal;

  ${({ theme, homepage }) =>
    homepage
      ? `
        margin: 0 0 0.2em;
        font-size: 47px;
        line-height: 150%;
        @media (${theme.breakpointHomepage}) {
          font-size: 36px;
          font-size: clamp(24px, 8.5vw, 36px);
          margin-bottom: 0.4em;
        }
      `
      : `
        margin: 0 0 1rem;
        font-size: 2.5rem;
        @media (${theme.breakpointMobile}) {
          font-size: 1.75rem;
        }
  `}
`

export default H1
