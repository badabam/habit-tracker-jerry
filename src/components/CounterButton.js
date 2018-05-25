import React, { Component } from 'react'
import styled from 'react-emotion'

const StyledButton = styled('section')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`

const SideButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  border: none;
  background: #ddd;
  font-size: 1.3em;
`

const CountValue = styled('span')`
  color: cadetblue;
  font-weight: bold;
`

export default class CounterButton extends Component {
  render() {
    // extract the values from props, so it is shorter in the next lines:
    const { onDecrease, onIncrease, text, count } = this.props

    return (
      <StyledButton>
        <SideButton onClick={onDecrease}>-</SideButton>
        <span>
          {text} <CountValue>{count > 0 && `(${count})`}</CountValue>
        </span>
        <SideButton onClick={onIncrease}>+</SideButton>
      </StyledButton>
    )
  }
}
