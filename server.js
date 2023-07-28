const express = require ('express');
// const bodyParser = require('body-parser');
const { notesRouter } = require('./Routes/defaultRoutes');
// const { appPool } = require('./Config/config');

const app  = express()
app.use(express.json())

// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/note', notesRouter)


// appPool.connect().then((pool)=>{
//     app.locals.db = pool;
// })


// app.use((err, req, res, next)=>{
//     res.json({Error: err})
// })

app.listen(4700, ()=>{
    console.log('Server running on port 4700');
})