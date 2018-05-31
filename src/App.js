import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'react-emotion'
import globalStyles from './styles/global'

import TodayPage from './components/TodayPage'
import HistoryPage from './components/HistoryPage'
import SettingsPage from './components/SettingsPage'
import Navigation from './components/Navigation'

import { createStore } from 'redux'
import reducer, { getCurrentDate } from './reducers/reducer'
import initialState from './reducers/initialState'

import {
  toggleHabit,
  increaseCount,
  decreaseCount,
  createHabit,
  moveDayLeft,
  moveDayRight,
} from './actions/actions'

globalStyles()

const Grid = styled('div')`
  display: grid;
  grid-template-rows: auto 40px;
  padding: 10px;
  height: 100vh;
`

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    const state = store.getState()
    return (
      <Router>
        <Grid>
          <main style={{ gridRow: '1', overflow: 'hidden' }}>
            <Route
              exact
              path="/"
              render={() => (
                <TodayPage
                  habits={state.habits}
                  data={state.history}
                  dayOffset={state.dayOffset}
                  currentDate={getCurrentDate(state)}
                  moveDayLeft={id => store.dispatch(moveDayLeft(id))}
                  moveDayRight={id => store.dispatch(moveDayRight(id))}
                  toggleHabit={id => store.dispatch(toggleHabit(id))}
                  increaseCount={id => store.dispatch(increaseCount(id))}
                  decreaseCount={id => store.dispatch(decreaseCount(id))}
                />
              )}
            />
            <Route
              path="/history"
              render={() => (
                <HistoryPage habits={state.habits} data={state.history} />
              )}
            />
            <Route
              path="/settings"
              render={() => (
                <SettingsPage
                  onCreateHabit={h => store.dispatch(createHabit(h))}
                />
              )}
            />
          </main>
          <Navigation />
        </Grid>
      </Router>
    )
  }
}
export default App
