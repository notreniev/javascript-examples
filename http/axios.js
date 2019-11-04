const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts'

const response = async () => {
    const result = await axios.get(url)
    console.log(result)
}

response()