import React, { Component } from 'react'
import ToggleButton from './components/ToggleButton'
import CounterButton from './components/CounterButton'
import styled from 'react-emotion'

const Grid = styled('section')`
  display: grid;
  grid-gap: 10px;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      habits: [
        { text: 'Sport gemacht', checked: false, id: 0 },
        { text: 'Liter getrunken', count: 0, id: 1 },
        { text: 'Gesund gegessen', checked: false, id: 2 },
        { text: 'Abends gelernt', checked: false, id: 3 },
        { text: 'Im Kurs beteiligt', checked: false, id: 4 },
        { text: 'Zigaretten geraucht', count: 0, id: 5 },
        { text: 'Fragen im Kurs gestellt', count: 0, id: 6 },
      ],
    }
  }

  toggleHabit(id) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, checked: !oldHabit.checked },
      ...allHabits.slice(habitIndex + 1),
    ]

    this.setState({ habits: newHabits })
  }

  increaseCount(id) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, count: oldHabit.count + 1 },
      ...allHabits.slice(habitIndex + 1),
    ]

    this.setState({ habits: newHabits })
  }

  decreaseCount(id) {
    const allHabits = this.state.habits
    const habitIndex = allHabits.findIndex(habit => habit.id === id)
    const oldHabit = allHabits[habitIndex]

    // check if it is already 0
    if (oldHabit.count === 0) {
      return // stop here, if it is already 0
    }

    const newHabits = [
      ...allHabits.slice(0, habitIndex),
      { ...oldHabit, count: oldHabit.count },
      ...allHabits.slice(habitIndex + 1),
    ]

    this.setState({ habits: newHabits })
  }

  render() {
    return (
      <Grid>
        {this.state.habits.map(habit => {
          if (habit.checked != null) {
            return (
              <ToggleButton
                text={habit.text}
                checked={habit.checked}
                key={habit.id}
                onClick={e => this.toggleHabit(habit.id)}
              />
            )
          } else if (habit.count != null) {
            return (
              <CounterButton
                text={habit.text}
                count={habit.count}
                key={habit.id}
                onIncrease={e => this.increaseCount(habit.id)}
                onDecrease={e => this.decreaseCount(habit.id)}
              />
            )
          } else {
            return 'Button type not found'
          }
        })}
      </Grid>
    )
  }
}

export default App
