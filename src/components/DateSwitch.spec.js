import { shallow, mount } from 'enzyme'
import moment from 'moment'
import React from 'react'
import toJson from 'enzyme-to-json'
import DateSwitch, { SideButton, DateText } from './DateSwitch'

describe('DateSwitch', () => {
  let wrapper
  let handleUpdate

  beforeEach(() => {
    jest.mock('moment', () => () => ({
      add: () => ({ format: () => '21.2.2018' }),
    }))
    handleUpdate = jest.fn()
    wrapper = mount(<DateSwitch onUpdate={handleUpdate} />)
  })
  afterEach(() => {
    handleUpdate.mockClear()
  })

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('shows the date', () => {
    expect(wrapper.contains('21.2.2018')).toBe(true)
  })

  it('has a button to the right', () => {
    expect(wrapper.containsMatchingElement(<SideButton>‹</SideButton>)).toBe(
      true
    )
  })
  it('has a button to the right', () => {
    expect(wrapper.containsMatchingElement(<SideButton>›</SideButton>)).toBe(
      true
    )
  })
})
