import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSES',
        id: -1
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    
    const expense = {
        id: '7',
        description: 'Tuition',
        note: '',
        amount: 50000,
        createdAt: moment(0).subtract(5, 'days').valueOf()
    }
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense]) 
})

test('should edit an expense', () => {
    const action = {
        id: expenses[1].id,
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'CAR SERVICE',
            amount: 10000
        }
    }

    const updated = {
        ...expenses[1],
        ...action.updates
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], updated, expenses[2]])

})

test('should not edit expense if expense not found', () =>{
    const action = {
        id: -1,
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'CAR SERVICE',
            amount: 10000
        }
    }

    const updated = {
        ...expenses[1],
        ...action.updates
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)

})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})

