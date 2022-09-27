import styled from "styled-components"

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${props => (props.wide ? "60" : "40.625")}rem;
  min-height: 100vh;
  margin: auto;
  padding: 4rem 0;
  @media (${({ theme }) => theme.breakpointMobile}) {
    min-height: calc(100vh - 3.5rem);
    padding: 1rem 0;
  }
`

export default PageContent
