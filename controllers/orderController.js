

const Order = require('../models/orderSchema')


const getAllOrders = async (req, res) => {
   res.send('get All Orders')
}


const getSingleOrder = async (req, res) => {
   res.send('getSigleOrder')
}


const getUserOrders = async (req, res) => {
   res.send('getCurrentUserOrders')
}

const showMyOrders = async (req, res) => {
   res.send('showMyOrders')
}


const createOrder = async (req, res) => {
   res.send('createOrder')
}


const udpdateOrder = async (req, res) => {
   res.send('udpdateOrder')
}

module.exports = {
   getAllOrders,
   getSingleOrder,
   getUserOrders,
   showMyOrders,
   createOrder,
   udpdateOrder
}


