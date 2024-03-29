import {createStore, combineReducers} from 'redux'
import {v4 as uuidv4} from 'uuid'

const addExpense = (
    
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = 
    ({id } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    })

const editExpense =(id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter= (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = (sortBy='') => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
})

const sortByDate = (sortBy ='') => ({
    type: 'SORT_BY_DATE',
    sortBy
})



const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})


const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


const expenseReducerDefaultState = []

//Expense reducer
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else{
                    return expense
                }
            })
        default:
            return state
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}

        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: action.sortBy }

        case 'SORT_BY_DATE':
            return {...state, sortBy: action.sortBy}
            
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}   
            
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate} 
        default:
            return state
    }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLowerCase().includes(text.toLowerCase());

        return startDateMatch &&  endDateMatch && textMatch
    }).sort((a, b)=> {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if( sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
    
}

//Create store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }))

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21001000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: - 1000}))

//store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount('amount'))
/*
store.dispatch(removeExpense({id: expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))


store.dispatch(setTextFilter());

store.dispatch(sortByAmount('amount'));
store.dispatch(sortByDate('date')); */
// store.dispatch(setStartDate(1000));

 

//store.dispatch(setStartDate(-1250));
//store.dispatch(setEndDate(- 12)) 

const demoState = {
    expenses: [{
        id: 'sdsf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

const user = {
    name: 'Jen',
    age: 24
}

/* console.log({
    ...user,
    age: 29,
    location: 'test'
}) */