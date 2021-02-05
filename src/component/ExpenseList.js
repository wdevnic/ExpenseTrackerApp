import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) :
           ( 
            <ul>
            {props.expenses.map((expense) => {
               return <ExpenseListItem key={expense.id} {...expense}/>
            })}
            </ul>
            )
        }
        
    </div>
)

const  ConnectedExpenseList = connect((state) =>{
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
})(ExpenseList)

export default ConnectedExpenseList