import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('button')`
  width: 100%;
  height: 40px;
  background: ${props => (props.checked ? 'greenyellow' : '#eee')};
  border: 1px solid #333;
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
