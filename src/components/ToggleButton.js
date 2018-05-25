import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('section')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: ${props => (props.checked ? 'skyblue' : '#ddd')};
  border: 1px solid #ccc;
  border-radius: 4px;
`

export default class ToggleButton extends Component {
  render() {
    return (
      <StyledButton checked={this.props.checked} onClick={this.props.onClick}>
        {this.props.text}
      </StyledButton>
    )
  }
}
