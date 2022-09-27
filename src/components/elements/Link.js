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
  transition: box-shadow 0.2s;
  box-shadow: ${({ theme }) => theme.shadowLarge};
  & > span {
    height: 2.75rem;
    padding: 0.5rem ${({ icon }) => (icon ? `1rem` : `1.25rem`)};
    display: flex;
    border-radius: 0.25rem;
    justify-content: ${({ icon }) => (icon ? `flex-start` : `center`)};
    align-items: center;
    outline: 0;
    transition: background 0.1s;
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
    color: #fff;
    background: rgba(${({ theme }) => theme.darkRgb}, 1);
  }
  &:focus > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.8);
    box-shadow: inset 0 0 0 0.25rem ${({ theme }) => theme.dark};
  }
  &:hover > span {
    background: rgba(${({ theme }) => theme.darkRgb}, 0.9);
  }
`
const ExternalLink = styled.a`
  ${shared}
  display: block;
  & > span {
    color: ${({ theme }) => theme.dark};
    background: ${({ white, theme }) => (white ? "#fff" : theme.light)};
    border: 2px solid ${({ theme }) => theme.dark};
  }
  &:focus > span {
    box-shadow: inset 0 0 0 0.25rem ${({ theme }) => theme.dark};
  }
  &:hover > span {
    background: rgba(255, 255, 255, 0.8);
  }
`

const TextMobile = styled.span`
  display: none;
  @media (${props => props.mobileBreakpoint}) {
    display: inline;
  }
`

const TextDesktop = styled.span`
  @media (${props => props.mobileBreakpoint}) {
    display: none;
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
        {props.textMobile && (
          <TextMobile mobileBreakpoint={props.mobileBreakpoint}>
            {props.textMobile}
          </TextMobile>
        )}
        {props.textDesktop && (
          <TextDesktop mobileBreakpoint={props.mobileBreakpoint}>
            {props.textDesktop}
          </TextDesktop>
        )}
        {props.children}
      </span>
    </ExternalLink>
  ) : (
    <StyledInternalLink {...props}>
      <span tabIndex="-1">{props.children}</span>
    </StyledInternalLink>
  )
}
