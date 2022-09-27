import styled from "styled-components"

/**
 * This component sets the background color for iOS overscroll at the bottom of
 * the page. iOS uses the theme-color meta tag for the overscroll background
 * color, but this component covers it with a fixed div. It only replaces the
 * bottom color, not the top. And in some scenarios (e.g. when the URL bar is
 * hidden during a very fast scroll to the bottom), some of the theme-color is
 * still visible below this div.
 */

const OverscrollBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10000;
  background-color: ${({ theme }) => theme.light};
`

export default OverscrollBackground
