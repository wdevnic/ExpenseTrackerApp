import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseSummary} from '../../component/ExpenseSummary'

test('should correctly render ExpenseSummary with 1 Expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with multiple Expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal={23577}/>)
    expect(wrapper).toMatchSnapshot()
})