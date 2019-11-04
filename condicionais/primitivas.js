/**
 * Exemplos de como escrever condicionais 
 * mais eficientes em JavaScript
 */

const getPrimitive1 = (type) => ({
    'string': 'A sequence os characteres.',
    'boolean': 'Logical data type that can have the values true or false.'
} [type] || 'The especified value is not a string or boolean.')

const teste1 = getPrimitive1('boolean')
console.log(teste1)

const teste2 = getPrimitive1('string')
console.log(teste2)


const getMessage = (err) => {
    return ({
        'NotFoundError': {statusCode: 404,message: "None record found!"},
        'RouteMissingError': {statusCode: 400, message: "Route doesn't exists"}
    }[err] || {statusCode: 400, message: "Couldn't process your request"});
}

const teste3 = getMessage('NotFoundError')
console.log(teste3)

const teste4 = getMessage('RouteMissingError')
console.log(teste4)