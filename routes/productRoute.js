
const express = require('express')
const router = express.Router()

const {
   authMiddleware,
   authPermission } = require('../middlewares/auth')


const {
   createProduct,
   getAllProduct,
   getSingleProduct,
   updateProduct,
   deleteProduct,
   uploadImage
} = require('../controllers/productController')


router.post('/createProduct', authMiddleware, authPermission, createProduct)
router.get('/getAllProduct', getAllProduct)
router.get('/getSingleProduct/:id', getSingleProduct)
router.patch('/updateProduct', authMiddleware, authPermission, updateProduct)
router.delete('/deleteProduct', authMiddleware, authPermission, deleteProduct)
router.post('/uploadImage', authMiddleware, authPermission, uploadImage)



module.exports = router