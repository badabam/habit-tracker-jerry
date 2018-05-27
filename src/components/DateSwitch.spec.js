import { shallow, mount } from 'enzyme'
import React from 'react'
import toJson from 'enzyme-to-json'
import DateSwitch, { SideButton, DateText } from './DateSwitch'

describe('DateSwitch', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<DateSwitch text="Foo" />)
  })

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('shows the text', () => {
    expect(wrapper.contains('Foo')).toBe(true)
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
  it('has bold text, if it isToday', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.setProps({ isToday: true })
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
