import React from 'react'
import { connect } from 'react-redux'
import  {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'


export class ExpenseListFilters extends React.Component {

    state = {
        calenderFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calenderFocused)=> {
        this.setState(() => ({calenderFocused}))
    }

    onSortChange = (e)=>{
        const selected = e.target.value
        if(selected === 'date'){
            this.props.sortByDate(selected)
        }
        else if(selected === 'amount'){
            this.props.sortByAmount(selected)
        }
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }


    render(){
        return (

            <div>
                <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={this.onTextChange} />
        
                <select 
                value={this.props.filters.sortBy} 
                onChange={ this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate={this.props.filters.startDate}
                startDateId= {'startId'}
                endDateId ={'endId'}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                showClearDates= {true}
                numberOfMonths={1}
                isOutsideRange= {() => false}
                />
            
                
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)