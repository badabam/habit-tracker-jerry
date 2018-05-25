import React, { Component } from 'react'
import styled from 'react-emotion'

import habits from './habits'
import HabitList from './components/HabitList'

const Grid = styled('section')`
  display: grid;
  grid-gap: 10px;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habits: habits,
    }
  }

  updateHabitState(id, changeFunction) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, ...changeFunction(oldHabit) },
      ...allHabits.slice(habitIndex + 1),
    ]

    this.setState({ habits: newHabits })
  }

  toggleHabit(id) {
    this.updateHabitState(id, oldHabit => ({ checked: !oldHabit.checked }))
  }

  increaseCount(id) {
    this.updateHabitState(id, oldHabit => ({ count: oldHabit.count + 1 }))
  }

  decreaseCount(id) {
    this.updateHabitState(id, oldHabit => {
      if (oldHabit.count === 0) {
        return oldHabit
      } else {
        return { count: oldHabit.count - 1 }
      }
    })
  }

  render() {
    return (
      <Grid>
        <HabitList
          headline="Gut"
          habits={this.state.habits.filter(habit => habit.category === 'good')}
          onToggle={id => this.toggleHabit(id)}
          onIncrease={id => this.increaseCount(id)}
          onDecrease={id => this.decreaseCount(id)}
        />
        <HabitList
          headline="Schlecht"
          habits={this.state.habits.filter(habit => habit.category === 'bad')}
          onToggle={id => this.toggleHabit(id)}
          onIncrease={id => this.increaseCount(id)}
          onDecrease={id => this.decreaseCount(id)}
        />
      </Grid>
    )
  }
}

export default App
