const items = [
    {name: 'Bike',      price: 100},
    {name: 'Tv',        price: 300},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 35}
]

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
},0)

console.log(total)
