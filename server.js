const express = require('express')
const app = express()

const port = 3000




app.get('/', (req, res)=> {
    res.send('welcome to my home page')
})


app.get('/welcome', (req, res)=> {
    res.send('welcome to my backend class')
})

app.listen(port, () => {
    console.log(`server is up and runnig on port ${port}`);
})

