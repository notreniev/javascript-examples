const items = [
    {name: 'Bike',      price: 100},
    {name: 'Tv',        price: 300},
    {name: 'Album',     price: 10},
    {name: 'Book',      price: 5},
    {name: 'Phone',     price: 500},
    {name: 'Computer',  price: 1000},
    {name: 'Keyboard',  price: 35}
]

const hasInexpensiveItems = items.some(item => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)
