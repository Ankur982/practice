const {default:axios} = require('axios')
const express = require('express')

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async(req, res) => {
    try {
        let { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        res.status(200).send(data)
    } catch (error) {
        console.log(error)
        res.status(401).send(error);
    }
})

app.get('/search/:key', async (req, res) => {
    let query = req.params.key
    try {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?q=${query}`)
        res.status(200).send(data) 
    } catch (error) {
        res.status(401).send(error);
    }
})


app.listen(8000, () => { console.log('server started on port 8080') })