const moment = jest.requireActual('moment') // imports real moment

export default (timestamp = 0) => {
    return moment(timestamp) // need to import moment to call this moment function
}