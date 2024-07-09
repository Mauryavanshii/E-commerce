let db=require('../databaseConfi.js')

exports.adminLogin=(req,res)=>{
    let Email=req.body.Email
    let password=req.body.password

    let sql="select * from login where Email = ? and password=?"
    db.query(sql,[Email,password],(err,result)=>{
        if (err) throw err;
        else{
            if(result.length>0){
                res.send(true)
            }
            else{
                res.send(false)
            }
            // console.log(result)
        }
    })
}