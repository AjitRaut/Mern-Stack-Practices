const express = require("Express");
const app = express();

app.get("/" , (req , res)=>{
    res.status(200);
    res.send("Welcome To Backend")
})

const port = 3000;
app.listen(port , ()=>{
    console.log(`you are on ${port}`)
})