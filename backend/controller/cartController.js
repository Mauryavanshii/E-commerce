let db=require('../databaseConfi.js')

exports.CartSave=(req,res)=>{
    let productBrand=req.body.productBrand
    let productPrice=req.body.productPrice
    let productRating=req.body.productRating
    let productType=req.body.productType
    let unique=req.params.unique
    // let image=req.file.filename
    let value=[[productBrand,productPrice,productRating,productType]]
    db.query(`insert into ${unique}(productBrand,productPrice,productRating,productType) values ?`,[value],(err,result)=>{
        if (err) throw err
        else{
            res.send("true")
        }

    })

}

exports.getCart=(req,res)=>{
    let unique=req.params.unique
    let sql=`select * from ${unique}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
    }


    exports.deleteCart = (req, res)=>{
        let unique=req.params.unique
        let id  = req.params.id
        let sql  = `delete from ${unique} where id  = ?`
        db.query(sql, [id], (err, result)=>{
          if(err) throw err
          else{
            res.send('data deleted')
          }
        })
      }