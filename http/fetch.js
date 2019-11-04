/**
 * Fetch Example using node-fetch
 */

const fetch = require('node-fetch')
const url = 'https://jsonplaceholder.typicode.com/posts'

async function fetchAsync() {
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(error)
    }
}

fetchAsync()
        .then(res => console.log(res))