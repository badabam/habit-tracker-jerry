import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Today from './components/Today'
import History from './components/History'
import Settings from './components/Settings'

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Route exact path="/" component={Today} />
          <Route path="/history" component={History} />
          <Route path="/settings" component={Settings} />
          <div>
            <Link to="/">Today</Link>
            <Link to="/history">History</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </section>
      </Router>
    )
  }
}
export default App
