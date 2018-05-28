import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  static propTypes = {
    children: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
  }

  render() {
    const { onClick, children, checked } = this.props
    return (
      <StyledButton checked={checked} onClick={onClick}>
        {children}
      </StyledButton>
    )
  }
}
