import React, { Component } from 'react'
import styled from 'react-emotion'
import ToggleButton from './ToggleButton'
import CounterButton from './CounterButton'

const Grid = styled('section')`
  display: grid;
  grid-gap: 10px;
`

const Headline = styled('h3')`
  font-family: sans-serif;
  text-align: center;
`

export default class HabitList extends Component {
  render() {
    return (
      <section>
        <Headline>{this.props.headline}</Headline>
        <Grid>
          {this.props.habits.map(habit => {
            if (habit.checked != null) {
              return (
                <ToggleButton
                  text={habit.text}
                  checked={habit.checked}
                  key={habit.id}
                  onClick={e => this.props.onToggle(habit.id)}
                />
              )
            } else if (habit.count != null) {
              return (
                <CounterButton
                  text={habit.text}
                  count={habit.count}
                  key={habit.id}
                  onIncrease={e => this.props.onIncrease(habit.id)}
                  onDecrease={e => this.props.onDecrease(habit.id)}
                />
              )
            } else {
              return 'Button type not found'
            }
          })}
        </Grid>
      </section>
    )
  }
}
