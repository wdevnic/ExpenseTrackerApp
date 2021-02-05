import React from 'react'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../component/ExpenseListItem'

test('should render ExpenseTestItem', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})