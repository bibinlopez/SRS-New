
const express = require('express')
const router = express.Router()

const {
   authMiddleware,
   authPermission } = require('../middlewares/auth')


const {
   createOrder,
   getAllOrders,
   getSingleOrder,
   getUserOrders,
   showMyOrders,
   udpdateOrder } = require('../controllers/orderController')

router.post('/create', authMiddleware, createOrder)                  // user only

router.get('/getAll', authMiddleware, authPermission, getAllOrders)  // admin route

router.post('/getSingle', authMiddleware, getSingleOrder)         // user/admin route

router.post('/getAllUser', authMiddleware, authPermission, getUserOrders)  // admin route
router.get('/showOrders', authMiddleware, showMyOrders)                // user only

router.post(
   '/update', authMiddleware, udpdateOrder                       // user/admin route    
)                                                                    // admin and user can change the order status.ie, admin:-delivered/cancel   user:- cancel 






module.exports = router