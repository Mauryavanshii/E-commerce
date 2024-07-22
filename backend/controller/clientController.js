let db = require('../databaseConfi.js')
let bcrypt = require('bcryptjs')
let jwt=require('jsonwebtoken')

function generateToken(user){
    return jwt.sign({id:user.id},"hello",{expiresIn: '1h'})
}

exports.clientSave = async (req, res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password

    let hash = await bcrypt.hash(password, 10)

    let image = req.file.filename
    let value = [[username, email, hash, image]]
    let sql = 'insert into clientDetail(username,email,password,image) values ?'

    db.query(sql, [value], (err, result) => {
        if (err) throw err
        else {
            res.send("client data saved")
        }
    })
}


exports.clientLogin = (req, res) => {
    let email = req.body.email
    let password = req.body.password

    let sql = "select * from clientdetail where email = ?"
    db.query(sql, [email], (err, result) => {
        if (err) throw err;
        else {

            bcrypt.compare(password, result[0].password,async (err, isMatch) => {
                if (err) throw err
                {
if(isMatch==true){
    let token=await generateToken(result[0])
    console.log(token)

    res.json({token,isMatch})
}
else{
    res.send(false)
}
                }
            })
            
            // console.log(result)
        }
    })
}

exports.createClient = (req, res) => {

    let unique = req.params.unique

    let clientTableQuery = `CREATE TABLE if not exists ${unique}(
        id INT NOT NULL AUTO_INCREMENT,
        productBrand varchar(225)NULL,
        productPrice varchar(225)NULL, 
          productRating varchar(225)NULL, 
            productType varchar(225)NULL,
                image varchar(225)NULL,
            primary key(id));`
    db.query(clientTableQuery, (err, result) => {
        if (err) throw err
        else {
            console.log('client table created')
        }
    })

}


exports.getClient = (req, res) => {
    let unique = req.params.unique
    let sql = 'select *  from clientdetail where email=?'

    db.query(sql, [unique + '@gmail.com'], (err, result) => {
        if (err) throw err
        else {
            res.json(result)
        }
    })
}