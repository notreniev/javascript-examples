const getPrimitive = (type) => ({
    'string': 'A sequence os characteres.',
    'boolean': 'Logical data type that can have the values true or false.'
} [type] || 'The especified value is not a string or boolean.')

const teste1 = getPrimitive('boolean')
//console.log(teste1)

const teste2 = getPrimitive('string')
console.log(teste2)