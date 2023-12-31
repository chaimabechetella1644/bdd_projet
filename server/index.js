const express = require('express') ;
const app = express() ;
const mysql = require('mysql') ;
const cors = require('cors') ;
bodyParser = require('body-parser');
const multer = require('multer') ;
const path = require('path')
// import multer from 'multer';
// import path from 'path';


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:"db_atheletes"
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.filename +"_" + Date.now() + path.extname(file.originalname))
    }
}) 

const upload = multer({
    storage: storage
})



app.get("/", (req, res) => {
    res.send("welcome")
})


app.post ("/categories/insert", upload.single('image'), (req, res) => {

    const categories_name = req.body.categories_name ;
    const num_product = req.body.num_product ;
    const date_start = req.body.date_start ;
    const image_path = req.file.filename;	

    const dbCategoriesInsert = 'INSERT INTO categories_ad (categories_name, num_product, date_start, image_path) VALUES (?,?,?,?)'
     db.query(dbCategoriesInsert, [categories_name, num_product, date_start, image_path], (err,resultat) => {
        console.log(err)
     })    
})

app.put ("/categories/update", upload.single('image'), (req, res) => {

    const categories_name = req.body.categories_name ;
    const num_product = req.body.num_product ;
    const date_start = req.body.date_start ;
    const image_path = req.file.filename;	

    const dbCategoriesInsert = ' Update categories_ad set  num_product = ?, date_start = ?, image_path = ? WHERE categories_name = ?'
     db.query(dbCategoriesInsert, [num_product, date_start, image_path, categories_name], (err,resultat) => {
        console.log(err)
     })    
})


app.post('/offre/insert' , upload.single('image') ,(req, res) => {

    const name_offres = req.body.name_offres ;
    const information = req.body.information ;
    const image_offre = req.file.filename ;
    const dbOffreInsert = 'INSERT INTO offres (name_offres, information, image_offre) VALUES (?,?,?)'
    db.query(dbOffreInsert, [name_offres, information, image_offre], (err, resultat) => {
        console.log(err);
    })
})

app.get('/offre/select', (req, res) => {
    const sqlSelectOffre = "SELECT * FROM offres";
    db.query(sqlSelectOffre, (err, result) => {
        res.send(result);
    })
})

app.put("/offre/update", upload.single('image') ,(req, res) => {

    const name_offres = req.body.name_offres ;
    const information = req.body.information ;
    const image_offre = req.file.filename ;
    const offre_id = req.body.offre_id ; 
    const sqlOffreUpdate = " Update offres set name_offres = ?, information = ?, image_offre = ? WHERE offre_id = ?" ;
    db.query(sqlOffreUpdate, [name_offres, information, image_offre, offre_id], (err, result) => {
        if(err) console.log(err)
    })

})



app.post('/product/insert' , upload.single('image') , (req, res) => {

    const product_name = req.body.product_name ;
    const categorie = req.body.categorie ;
    const gender = req.body.gender ;
    const description = req.body.description ;
    const size = req.body.size ;
    const color = req.body.color;
    const price = req.body.price;
    const product_image = req.file.filename ;

    const dbproductInsert = 'INSERT INTO products_ad (product_name, categorie, gender, description, size, color, price, product_image) VALUES (?,?,?,?,?,?,?,?)'
    db.query(dbproductInsert, [product_name, categorie, gender, description, size, color, price, product_image], (err, resultat) => {
        console.log(err);
    })
})

app.put('/product/update' , upload.single('image') , (req, res) => {

    const product_name = req.body.product_name ;
    const categorie = req.body.categorie ;
    const gender = req.body.gender ;
    const description = req.body.description ;
    const size = req.body.size ;
    const color = req.body.color;
    const price = req.body.price;
    const product_image = req.file.filename ;
    const product_id = req.body.product_id ;

    const dbproductInsert = 'Update products_ad set product_name  = ?, categorie = ?, gender = ?, description = ?, size = ?, color = ?, price = ?, product_image = ? WHERE product_id = ?'
    db.query(dbproductInsert, [product_name, categorie, gender, description, size, color, price, product_image, product_id], (err, resultat) => {
        console.log(err);
    })
})

app.get('/categories/select', (req, res) => {
    const sqlSelectCategorie = "SELECT * FROM categories_ad" ;
    db.query(sqlSelectCategorie, (err, result) => {
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

    // Delete related records from products_ad table
    const deleteProductsQuery = "DELETE FROM products_ad WHERE categorie = ?";
    db.query(deleteProductsQuery, name, (productsErr, productsResult) => {
        if (productsErr) {
            console.error("Error deleting related products:", productsErr);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // Now, delete the category from categories_ad table
        const deleteCategoryQuery = "DELETE FROM categories_ad WHERE categories_name = ?";
        db.query(deleteCategoryQuery, name, (categoryErr, categoryResult) => {
            if (categoryErr) {
                console.error("Error deleting category:", categoryErr);
                return res.status(500).json({ error: "Internal Server Error" });
            }

            // Check if any rows were affected by the delete operation
            if (categoryResult.affectedRows === 0) {
                // No rows were affected, indicating that the category with the given name doesn't exist
                return res.status(404).json({ error: "Category not found" });
            }

            // Category and related products deleted successfully
            res.status(200).json({ message: "Category and related products deleted successfully" });
        });
    });
});


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