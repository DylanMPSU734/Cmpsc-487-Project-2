const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

var db = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'your_password',
    database : 'product_db'
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, result) => {
        if(err){
            res.status(500).send("Error accessing server")
        }
        else {
            res.send(result)
        }
    })
})

app.post('/search', (req, res) => {
    const searchId = req.body.searchId
    var keyword = req.body.keyword
    const sortType = req.body.sortType
    
    if(sortType == 'name'){
        db.query("SELECT * FROM products WHERE (product_id = ? OR ''= ?) AND ( (product_name LIKE ?) OR (product_description LIKE ?) OR ('' = ?) ) ORDER BY product_name",
        [searchId, searchId, keyword, keyword, keyword], (err, result) => {
            if(err)
                res.status(500).send("Error accessing server")
            else{  
                res.send(result) 
            }
        })
    }
    else {
        db.query("SELECT * FROM products WHERE (product_id = ? OR ''= ?) AND ( (product_name LIKE ?) OR (product_description LIKE ?) OR ('' = ?) ) ORDER BY product_id",
        [searchId, searchId, keyword, keyword, keyword], (err, result) => {
            if(err)
                res.status(500).send("Error accessing server")
            else{
                res.send(result) 
            }
        })
    }
})

app.post('/add', (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const photo = req.body.photo

    db.query("INSERT INTO products (product_name, product_description, product_photo) VALUES (?,?,?)",
    [name, description, photo], (err, result) => {

    })
})

app.post('/edit', (req, res) => {
    const id = req.body.id
    var name = req.body.name
    var description = req.body.description
    var photo = req.body.photo
    
    if(name != '') {
        db.query("UPDATE products SET product_name = ? WHERE product_id = ?", [name, id], (err, res) => {

        })
    }

    if(description != '') {
        db.query("UPDATE products SET product_description = ? WHERE product_id = ?", [description, id], (err, res) => {

        })
    }

    if(photo != ''){
        db.query("UPDATE products SET product_photo = ? WHERE product_id = ?", [photo, id], (err, res) => {

        })
    }
})

app.post('/del', (req, res) => {
    const id = req.body.id
    
    db.query("DELETE FROM products WHERE product_id = ?", [id], (err, result) => {

    })
})

app.listen(8080, () => {
    console.log('server listening on port 8080');
})