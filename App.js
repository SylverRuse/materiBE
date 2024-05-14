const express = require('express')
const route = require('./src/route')

const app = express()
app.use(express.json())
app.use(`/api`, route)

app.get('/',(req, res)=>{
    try {
        res.status(200).json({
            message: 'Data berhasil dipanggil'
        })
    } catch (error) {
        console.log(error)
        res.status(300).json({
            message: 'Internal Server Error'
        })
    }
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})