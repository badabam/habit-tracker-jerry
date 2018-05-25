import React, { Component } from 'react'
import ToggleButton from './components/ToggleButton'
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
        { text: '2 Liter getrunken', checked: false, id: 1 },
        { text: 'Gesund gegessen', checked: false, id: 2 },
        { text: 'Abends gelernt', checked: false, id: 3 },
        { text: 'Im Kurs beteiligt', checked: false, id: 4 },
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

  render() {
    return (
      <Grid>
        {this.state.habits.map(habit => (
          <ToggleButton
            text={habit.text}
            checked={habit.checked}
            key={habit.id}
            onClick={e => this.toggleHabit(habit.id)}
          />
        ))}
      </Grid>
    )
  }
}

export default App
