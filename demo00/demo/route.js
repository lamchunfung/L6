const { format } = require('date-fns')

const sample = [
    {
        'id': 123456789,
        'name': 'Luke Skywalker'
    },
    {
        'id': 123456782,
        'name': 'Yoda'
    }
]
const date = new Date()
exports.get = (route) => {
    console.log(route)
    switch (route) {
        case "list":
            // return { 'code': 200, 'body': sample };
            return {
                'code': 200, 'body': sample, 'timestamp': `${format(date, 'yyyy.MM.dd')}`
            };
        case "count":
            return { 'code': 200, 'body': sample.count() }
        default:
            return { 'code': 400, 'body': 'Bad Request' };
    }
}