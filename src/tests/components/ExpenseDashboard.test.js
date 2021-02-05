import React from 'react'
import ExpenseDashboardPage from '../../component/ExpenseDashboardPage'
import {shallow} from 'enzyme'

test('should render dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})