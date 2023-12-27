const express = require('express') ;
const app = express() ;
const mysql = require('mysql') ;


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:"db_atheletes"
})


app.get("/", (req, res) => {
    res.send("welcome")
})




app.post ('/categories/insert', (req, res) => {

    const categories_name = req.body.categories_name ;
    const num_product = req.body.num_product ;
    const date_start = req.body.date_start ;
    const image_path = req.body.image_path;	

    const dbCategoriesInsert = 'INSERT INTO categories (categories_name, num_product, date_start, image_path) VALUES (?,?,?,?)'
     db.query(dbCategoriesInsert, [categories_name, num_product, date_start, image_path], (err,resultat) => {
        if(err) { res.send('not insert')}
        else{ res.send('insert')} ;
     })

    
})






app.listen(7000, () => {
    console.log("http://localhost:7000") ;
    
})