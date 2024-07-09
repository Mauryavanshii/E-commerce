const express = require("express")
const db = require('./databaseConfi.js')
const cors=require("cors")
let productRouter=require('./routes/productRoute.js')
let cartRouter=require('./routes/cartRoute.js')
let adminrouter=require('./routes/adminRoute.js')
let clientRouter=require('./routes/clientRoute.js')
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

db.connect((err) => {
    if (err) throw err
    else {
        console.log('database connected')
    }

})
let productTableQuery = `CREATE TABLE if not exists product(
    id INT NOT NULL AUTO_INCREMENT,
    productBrand varchar(225)NULL,
    productPrice varchar(225)NULL, 
      productRating varchar(225)NULL, 
        productType varchar(225)NULL,
        image varchar(225)NULL,
        primary key(id));`
db.query(productTableQuery, (err, result) => {
    if (err) throw err
    else {
        console.log('product table created')
    }
})
let cartTableQuery = `CREATE TABLE if not exists cart(
    id INT NOT NULL AUTO_INCREMENT,
    productBrand varchar(225)NULL,
    productPrice varchar(225)NULL, 
      productRating varchar(225)NULL, 
        productType varchar(225)NULL,
            image varchar(225)NULL,
        primary key(id));`
db.query(cartTableQuery, (err, result) => {
    if (err) throw err
    else {
        console.log('cart table created')
    }
})
let clientDetailTableQuery=`create table if not exists clientDetail(
id int not null auto_increment,
username varchar(255) null,
email varchar(255) null,
password varchar(225) null,
image varchar(255)null,
primary key(id));`
db.query(clientDetailTableQuery,(err,result)=>{
    if(err) throw err
    else{
        console.log('clientDetail table create')
    }
})
app.use('/api', productRouter)
app.use('/api', adminrouter)
app.use('/api', cartRouter)
app.use('/api', clientRouter)





app.listen(3000, () => {
    console.log('server is running 3000')
})