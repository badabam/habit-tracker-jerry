import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('section')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: #fff;
`

const SideButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  border: none;
  background: #eee;
  font-size: 1.3em;
`

const DateText = styled('span')`
  font-weight: ${props => (props.isToday ? 'bold' : 'normal')};
`

export default class DateSwitch extends Component {
  render() {
    const { onLeft, onRight, text } = this.props

    return (
      <StyledButton>
        <SideButton onClick={onLeft}>‹</SideButton>
        <DateText isToday={this.props.isToday}>{text}</DateText>
        <SideButton onClick={onRight}>›</SideButton>
      </StyledButton>
    )
  }
}
