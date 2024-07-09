let express=require('express')
let router=express.Router()
let productController=require('../controller/productController')
let uploads=require('../multerConfig.js')

router.post('/productSave',uploads.single('image'),productController.productSave)

router.get('/getproduct',productController.getproduct)

router.delete('/deleteproduct/:id',productController.deleteProduct)

router.put('/updateproduct/:id',productController.updateproduct)

router.get('/getproductById/:id',productController.getproductById)

// router.get('/serchproduct/:int',productController.searchProduct)
router.get('/searchProduct/:inp', productController.searchProduct)



module.exports=router



