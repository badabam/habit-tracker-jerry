import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'react-emotion'

const Wrapper = styled('nav')`
  grid-row: 2/2;
  display: flex;
`

const StyledLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <StyledLink
          activeStyle={{ background: 'skyblue', color: 'white' }}
          exact
          to="/"
          active={this.props.match}
        >
          Today
        </StyledLink>
        <StyledLink
          activeStyle={{ background: 'skyblue', color: 'white' }}
          exact
          to="/history"
        >
          History
        </StyledLink>
        <StyledLink
          activeStyle={{ background: 'skyblue', color: 'white' }}
          exact
          to="/settings"
        >
          Settings
        </StyledLink>
      </Wrapper>
    )
  }
}
