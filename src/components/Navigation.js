import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/">Today</Link>
        <Link to="/history">History</Link>
        <Link to="/settings">Settings</Link>
      </div>
    )
  }
}
