/**
 * Some examples of how to write conditionals
 * in javascript without IFs nor Switches
 */

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
