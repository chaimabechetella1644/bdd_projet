const express = require('express') ;
const app = express() ;
const mysql = require('mysql') ;
const cors = require('cors') ;
bodyParser = require('body-parser');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:"db_atheletes"
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))




app.get("/", (req, res) => {
    res.send("welcome")
})


app.post ("/categories/insert", (req, res) => {

    const categories_name = req.body.categories_name ;
    const num_product = req.body.num_product ;
    const date_start = req.body.date_start ;
    const image_path = req.body.image_path;	

    const dbCategoriesInsert = 'INSERT INTO categories (categories_name, num_product, date_start, image_path) VALUES (?,?,?,?)'
     db.query(dbCategoriesInsert, [categories_name, num_product, date_start, image_path], (err,resultat) => {
        console.log(err)
     })    
})

app.post('/offre/insert' , (req, res) => {

    const name_offres = req.body.name_offres ;
    const information = req.body.information ;
    const image_offre = req.body.image_offre ;
    const dbOffreInsert = 'INSERT INTO offres (name_offres, information, image_offre) VALUES (?,?,?)'
    db.query(dbOffreInsert, [name_offres, information, image_offre], (err, resultat) => {
        console.log(err);
    })
})

app.get('/categories/select', (req, res) => {
    const sqlSelectCategorie = "SELECT * FROM categories" ;
    db.query(sqlSelectCategorie, (err, result) => {
        res.send(result);
    })
})

app.get('/offre/select', (req, res) => {
    const sqlSelectOffre = "SELECT * FROM offres";
    db.query(sqlSelectOffre, (err, result) => {
        res.send(result);
    })
})
app.delete("/categories/delete/:categories_id", (req, res) => {
    const name = req.params.categories_id; 
    const sqlDelete = " DELETE FROM categories WHERE categories_id = ?" ;
    db.query(sqlDelete, name, (err, result) => {
        if(err) console.log(err)
    })
})

app.delete("/offre/delete/:offre_id", (req, res) => {
    const name = req.params.offre_id;
    const sqlDeleteOffre = 'DELETE FROM offres WHERE offre_id = ?' ;
    db.query(sqlDeleteOffre, name, (err, result) => {
        console.log(err);
    })
})





app.listen(7000, () => {
    console.log("http://localhost:7000") ;
    
})