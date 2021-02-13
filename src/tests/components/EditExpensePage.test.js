import React from 'react'
import { shallow } from 'enzyme'
import {EditExpensePage}  from '../../component/EditExpensePage'
import expenses from '../fixtures/expenses';






let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history ={push: jest.fn()}
    wrapper = shallow(<EditExpensePage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history}
        expense ={expenses[1]}
        />)
})

test('should render EditExpense correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test('should handle remove expense', () => {
    wrapper.find('button').prop('onClick')()
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[1].id})
})