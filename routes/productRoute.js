
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


router.post('/', authMiddleware, authPermission, createProduct)
router.get('/', getAllProduct)

router.post('/uploadImage', authMiddleware, authPermission, uploadImage)


router.get('/:id', getSingleProduct)
router.patch('/', authMiddleware, authPermission, updateProduct)
router.delete('/', authMiddleware, authPermission, deleteProduct)



module.exports = router