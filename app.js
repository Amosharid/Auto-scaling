const express =require('express')
const app = express()
const port = 5000

app.get('/',(req,res) =>{
    res.send('<h1> Auto scaling Demo app</h1> <h4> <h4> message Success</h4></h4> <p>Version: 1.0.0  </p>')
})

app.listen(port,() => {
    console.log(`Auto-scaling Deom is running on port ${port}`)
})