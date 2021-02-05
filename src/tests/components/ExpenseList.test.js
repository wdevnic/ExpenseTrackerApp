import React from 'react'
import {ExpenseList} from '../../component/ExpenseList'
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'


test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should rendre ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot();
})
