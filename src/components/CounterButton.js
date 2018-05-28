import React, { Component } from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const StyledButton = styled('section')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: ${props => (props.active ? 'skyblue' : '#eee')};
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
  font-weight: bold;
  font-size: 1.1em;
`

export default class CounterButton extends Component {
  static propTypes = {
    onDecrease: PropTypes.func,
    onIncrease: PropTypes.func,
    text: PropTypes.string,
    count: PropTypes.number,
  }
  render() {
    // extract the values from props, so it is shorter in the next lines:
    const { onDecrease, onIncrease, children, count } = this.props

    return (
      <StyledButton active={count > 0}>
        <SideButton onClick={onDecrease}>-</SideButton>
        <span>
          {children} <CountValue>{count > 0 && `(${count})`}</CountValue>
        </span>
        <SideButton onClick={onIncrease}>+</SideButton>
      </StyledButton>
    )
  }
}
