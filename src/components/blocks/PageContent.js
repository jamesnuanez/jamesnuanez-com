import styled from "styled-components"

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${props => (props.wide ? "80" : "40.625")}rem;
  min-height: 100vh;
  margin: auto;
  padding: 4rem 0;
  ${({ theme, wide }) =>
    wide &&
    `
    @media (${theme.breakpointWorkPage}) {
      max-width: 40.625rem;
    }
  `}
  ${({ theme, homepage }) =>
    homepage &&
    `
    @media (${theme.breakpointHomepage}) {
      max-width: 25rem;
    }
  `}
  @media (${({ theme }) => theme.breakpointMobile}) {
    min-height: calc(100vh - 3.5rem);
    padding: 1rem 0;
  }
`

export default PageContent
