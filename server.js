const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')


const port = 3000

app.use('/api/v1/user', userRouter)

app.listen(port, () => {
    console.log(`app is runnig on port ${port}........`);
})