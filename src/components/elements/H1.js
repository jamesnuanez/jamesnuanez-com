import styled from "styled-components"

const H1 = styled.h1`
  font-weight: normal;
  line-height: 150%;

  ${({ theme, homepage, work }) =>
    homepage
      ? `
        margin: 0 0 0.2em;
        font-size: 47px;
        @media (${theme.breakpointHomepage}) {
          font-size: 36px;
          font-size: clamp(24px, 8.5vw, 36px);
          margin-bottom: 0.4em;
        }
      `
      : `
        margin: 0 0 1rem;
        font-size: ${work ? "2rem" : "2.5rem"};
        @media (${theme.breakpointMobile}) {
          font-size: 1.75rem;
        }
  `}
`

export default H1
