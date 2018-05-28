import React, { Component } from 'react'
import styled from 'react-emotion'
import moment from 'moment'

const Container = styled('section')`
  display: flex;
  font-family: sans-serif;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`

export const SideButton = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  border: none;
  background: #eee;
  font-size: 1.3em;
`

export const DateText = styled('span')`
  font-weight: ${props => (props.isToday ? 'bold' : 'normal')};
`

export default class DateSwitch extends Component {
  state = {
    dayOffset: 0,
  }

  get currentDate() {
    return moment()
      .add(this.state.dayOffset, 'days')
      .format('DD.MM.YYYY')
  }

  moveDayLeft = () => {
    this.setState(
      state => ({
        dayOffset: state.dayOffset - 1,
      }),
      () => this.props.onUpdate(this.currentDate)
    )
  }

  moveDayRight = () => {
    this.setState(
      {
        dayOffset: this.state.dayOffset + 1,
      },
      () => this.props.onUpdate(this.currentDate)
    )
  }

  componentDidMount() {
    this.props.onUpdate(this.currentDate)
  }

  render() {
    const { dayOffset } = this.state

    return (
      <Container>
        <SideButton onClick={() => this.moveDayLeft()}>‹</SideButton>
        <DateText isToday={dayOffset === 0}>{this.currentDate}</DateText>
        <SideButton
          disabled={dayOffset === 0}
          onClick={() => this.moveDayRight()}
        >
          ›
        </SideButton>
      </Container>
    )
  }
}
