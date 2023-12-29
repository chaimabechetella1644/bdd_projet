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

    const dbCategoriesInsert = 'INSERT INTO categories_ad (categories_name, num_product, date_start, image_path) VALUES (?,?,?,?)'
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

app.post('/product/insert' , (req, res) => {

    const product_name = req.body.product_name ;
    const categorie = req.body.categorie ;
    const gender = req.body.gender ;
    const description = req.body.description ;
    const size = req.body.size ;
    const color = req.body.color;
    const price = req.body.price;
    const product_image = req.body.product_image ;

    const dbproductInsert = 'INSERT INTO products_ad (product_name, categorie, gender, description, size, color, price, product_image) VALUES (?,?,?,?,?,?,?,?)'
    db.query(dbproductInsert, [product_name, categorie, gender, description, size, color, price, product_image], (err, resultat) => {
        console.log(err);
    })
})

app.get('/categories/select', (req, res) => {
    const sqlSelectCategorie = "SELECT * FROM categories_ad" ;
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

app.get('/product/select', (req, res) => {
    const sqlSelectProduct = "SELECT * FROM products_ad";
    db.query(sqlSelectProduct, (err, result) => {
        res.send(result);
        // console.log(result);
    })
})

app.delete("/categories/delete/:categories_name", (req, res) => {
    const name = req.params.categories_name; 
    const sqlDelete = " DELETE FROM categories_ad WHERE categories_name = ?" ;
    db.query(sqlDelete, name, (err, result) => {
        if(err) console.log(err)
    })
})

app.delete("/offre/delete/:offre_id", (req, res) => {
    const name = req.params.offre_id;
    const sqlDeleteOffre = 'DELETE FROM offres WHERE offres.offre_id = ?';
    db.query(sqlDeleteOffre, name, (err, result) => {
        if(err) console.log(err)
        else (res.status(204).send())
    })
})

app.delete("/product/delete/:product_id", (req, res) => {
    const name = req.params.product_id;
    const sqlDeleteProduct = 'DELETE FROM products_ad WHERE product_id = ?';
    db.query(sqlDeleteProduct, name, (err, result) => {
        if(err) console.log(err)
        else (res.status(204).send())
    })
})





app.listen(7000, () => {
    console.log("http://localhost:7000") ;
    
})