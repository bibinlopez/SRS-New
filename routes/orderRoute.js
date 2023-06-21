
const express = require('express')
const router = express.Router()

const {
   authMiddleware,
   authPermission } = require('../middlewares/auth')


const {
   getAllOrders,
   getSingleOrder,
   getCurrentUserOrders,
   showMyOrders,
   createOrder,
   udpdateOrder
} = require('../controllers/orderController')

router.get('/getAll', authMiddleware, authPermission, getAllOrders)  // admin route

router.get('/getSingle/:id', authMiddleware, getSingleOrder)         // user/admin route

router.get('/getAllUser/:id', authMiddleware, authPermission, getCurrentUserOrders)  // admin route
router.get('/showOrders', authMiddleware, showMyOrders)                // user only
router.post('/create', authMiddleware, createOrder)                  // user only
router.post(
   '/update/:id', authMiddleware, udpdateOrder                       // user/admin route    
)                                                                    // admin and user can change the order status.ie, admin:-delivered/cancel   user:- cancel 





module.exports = router