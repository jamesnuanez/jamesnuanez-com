import styled from "styled-components"

const H1 = styled.h1`
  margin: 0 0 1rem;
  font-size: 2.5rem;
  font-weight: normal;
  @media (${({ theme }) => theme.breakpointMobile}) {
    font-size: 1.75rem;
  }
`

export default H1
