import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('button')`
  font-size: 1.3em;
  width: 100%;
  height: 40px;
  background: ${props => (props.checked ? 'greenyellow' : '#eee')};
  border: none;
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
