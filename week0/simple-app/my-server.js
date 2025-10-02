import express from express

console.log=express()

app.get(
    '/hello',
    (req,res) => {
    res.send('hello world')
}
)
app.listen(8000)
