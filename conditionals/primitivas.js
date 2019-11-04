/**
 * Some examples of how to write conditionals
 * in javascript without IFs nor Switches
 */

const getPrimitive1 = (type) => ({
    'string': 'A sequence os characteres.',
    'boolean': 'Logical data type that can have the values true or false.'
} [type] || 'The especified value is not a string or boolean.')

const test1 = getPrimitive1('boolean')
console.log(test1)

const test2 = getPrimitive1('string')
console.log(test2)

console.log('==============================')

const getMessage = (err) => {
    return ({
        'NotFoundError': {statusCode: 404,message: "None record found!"},
        'RouteMissingError': {statusCode: 400, message: "Route doesn't exists"}
    }[err] || {statusCode: 400, message: "Couldn't process your request"});
}

const test3 = getMessage('NotFoundError')
console.log(test3)

const test4 = getMessage('RouteMissingError')
console.log(test4)
