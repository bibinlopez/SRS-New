
const express = require('express')
const router = express.Router()

const {
   authMiddleware,
   authPermission } = require('../middlewares/auth')


const {
   getAllOrders,
   getSingleOrder,
   getCurrentUserOrders,
   createOrder,
   udpdateOrder
} = require('../controllers/orderController')

router.get('/getAll', authMiddleware, authPermission, getAllOrders)

router.get('/getSingle/:id', authMiddleware, getSingleOrder)
router.get('/getAllUser', authMiddleware, getCurrentUserOrders)


router.post('/create', authMiddleware, createOrder)
router.post('/update/:id', authMiddleware, udpdateOrder)



module.exports = router