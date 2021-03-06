import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
