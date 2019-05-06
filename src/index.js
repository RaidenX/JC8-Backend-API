const express = require('express')
const movieRouter = require('./routers/movieRouter')
const movieCatRouter = require('./routers/movieCatRouter')
const catRouter = require('./routers/catRouter')

const app = express()
const port = 1928



app.use(express.json())
app.use(movieRouter)
app.use(movieCatRouter)
app.use(catRouter)





app.listen(port, () => {
    console.log("Running at ", port);
    
})