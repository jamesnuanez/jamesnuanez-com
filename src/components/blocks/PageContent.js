import styled from "styled-components"

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${props => (props.wide ? "60" : "40")}rem;
  min-height: 100vh;
  margin: auto;
  padding: 4rem 0;
  @media (${({ theme }) => theme.breakpointMobile}) {
    padding-top: 2rem;
  }
  @media (${({ theme }) => theme.breakpointMobile}) {
    min-height: calc(100vh - 3.5rem);
  }
`

export default PageContent
