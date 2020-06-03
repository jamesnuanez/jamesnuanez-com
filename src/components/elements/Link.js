import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const shared = css`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 1rem;
  &:first-of-type {
    margin-top: 1.25rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  border-radius: 0.25rem;
  overflow: hidden;
  outline: 0;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  & > span {
    position: relative;
    height: 2.75rem;
    padding: 0.5rem ${({ icon }) => (icon ? `1rem` : `1.25rem`)};
    display: flex;
    border-radius: 0.25rem;
    justify-content: ${({ icon }) => (icon ? `flex-start` : `center`)};
    align-items: center;
    color: #fff;
    outline: 0;
  }
  &:focus,
  &:hover {
    box-shadow: ${({ theme }) =>
      `${theme.shadowSmall}, ${theme.shadowMedium}, ${theme.shadowLarge}`};
  }
  ${props =>
    props.wide &&
    `
    display: block;
    width: 100%;
  `}
  & > span > img {
    margin-right: 0.75rem;
  }
`

const InternalLink = ({ wide, left, ...props }) => (
  <Link {...props}>{props.children}</Link>
)

const StyledInternalLink = styled(InternalLink)`
  ${shared}
  & > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.9);
  }
  &:focus > span {
    box-shadow: inset 0 0 0 0.25rem ${({ theme }) => theme.dark};
  }
  &:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 1);
  }
`
const ExternalLink = styled.a`
  ${shared}
  display: block;
  & > span {
    background: ${({ dark, theme }) =>
      dark ? `rgba(${theme.darkRgb}, 0.9)` : theme.light};
  }
  &:focus > span {
    box-shadow: inset 0 0 0 0.25rem ${({ theme }) => theme.dark};
  }
  &:hover > span {
    ${({ dark, theme }) =>
      dark &&
      `background: rgba(${theme.darkRgb}, 1);
    `}
  }
`

export default function StyledLink(props) {
  return props.external ? (
    <ExternalLink
      {...props}
      rel="noopener noreferrer nofollow"
      icon={props.icon}
    >
      <span tabIndex="-1">
        {props.icon && <img src={props.icon} alt="" />}
        {props.children}
      </span>
    </ExternalLink>
  ) : (
    <StyledInternalLink {...props}>
      <span tabIndex="-1">{props.children}</span>
    </StyledInternalLink>
  )
}
