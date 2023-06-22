
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


router.post('/create', authMiddleware, authPermission, createProduct)
router.get('/getAll', getAllProduct)

router.post('/uploadImage', authMiddleware, authPermission, uploadImage)      // admin route


router.post('/getSingle', getSingleProduct)
router.post('/update/:id', authMiddleware, authPermission, updateProduct)     // admin route 
router.post('/delete/:id', authMiddleware, authPermission, deleteProduct)     // admin route



module.exports = router