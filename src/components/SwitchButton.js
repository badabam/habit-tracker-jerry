import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledContainer = styled('section')`
  display: flex;
  font-family: sans-serif;
  height: 40px;
`

const HalfButton = styled('button')`
  overflow: hidden;
  width: 100%;
  background: ${props => (props.disabled ? 'skyblue' : '#eee')};
  font-weight: ${props => (props.disabled ? 'bold' : 'normal')};
  box-shadow: ${p =>
    p.disabled ? 'none' : 'inset 1px 1px 4px rgba(0, 0, 0, 0.1)'};
  color: black;
  border-radius: 4px;
  border: none;
  font-size: 1.1em;

  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`

export default class SwitchButton extends Component {
  render() {
    const { textLeft, textRight, onClick } = this.props
    const selectedIndex = this.props.selectedIndex || 0

    return (
      <StyledContainer>
        <HalfButton disabled={selectedIndex === 0} onClick={e => onClick(0)}>
          {textLeft}
        </HalfButton>
        <HalfButton disabled={selectedIndex === 1} onClick={e => onClick(1)}>
          {textRight}
        </HalfButton>
      </StyledContainer>
    )
  }
}
