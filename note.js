import express from "express";

const app = express()

app.get('/', (req,res) => {
    res.send("this is from the root page");
})

app.get('/home', (req, res) => {
    res.json("this is for home page")
})

app.post('/posted',(req, res)=> {
    res.send("this message is being posted")
})
app.patch('/patched',(req, res)=> {
    res.send("this message is being patched")
})
app.delete('/delted',(req, res)=> {
    res.send("this message is being delted")
})


app.listen(3000, () => {
    console.log('the app is running on port 3000')
})