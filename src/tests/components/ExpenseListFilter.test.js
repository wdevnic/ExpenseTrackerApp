import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../component/ExpenseListFilters'
import { filters, atlfilters} from '../fixtures/filters'
import moment from 'moment'


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()

    wrapper =  shallow(
                <ExpenseListFilters
                filters={filters}
                setTextFilter={setTextFilter}
                sortByDate={sortByDate}
                sortByAmount={sortByAmount}
                setStartDate={setStartDate}
                setEndDate={setEndDate} 
                
                />
            )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: atlfilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {target: {value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(value)

})

test('should handle sort date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: atlfilters
    })
    wrapper.find('select').simulate('change', {target: {value}})
    expect(sortByDate).toHaveBeenLastCalledWith(value)
})

test('should handle sort amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {target: {value}})
    expect(sortByAmount).toHaveBeenLastCalledWith(value)
})

test('should handle date changes', () => {
    const startDate = moment(0)
    const endDate = moment(0).add(3, 'days')
    const dateRange = wrapper.find('DateRangePicker')
    
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
    
})

test('should handle date and focus changes', () => {
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})






