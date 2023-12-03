const express = require("express");
const mysql = require("mysql");

const app = express();
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'athlete_db'
})

db.connect( (error) => {
    if(error) {
        console.log(error);
    }else{
        console.log("connected to mysql db")
    }
})

app.listen(process.env.PORT, () => {
    console.log("server running")
});












// app.use("/products", UserRouter)
// app.get("/", (req, res) => {
//     res.send({ msg: "hello"})
// })

// const port = 3000;
