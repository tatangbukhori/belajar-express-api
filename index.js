const express = require('express')
const app = express()
const port = 3000

// Route to page
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// import library CORS
const cors = require('cors')

// use cors
app.use(cors())

// import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter); //use route posts di Express

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})