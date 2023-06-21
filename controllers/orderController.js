

const Order = require('../models/orderSchema')
const Product = require('../models/productSchema')
const { CustomAPIError } = require('../errors/custom-error')
const checkPermission = require('../utils/checkPermissions')

const fakeStripeAPI = async ({ amount, currency }) => {
   const client_secret = 'someRanddomValue';
   return { client_secret, amount };
}

const createOrder = async (req, res) => {
   const { items: cartItems, shippingFee, paymentMode } = req.body;
   if (!cartItems || cartItems.length < 1) {
      throw new CustomAPIError('No cart items provided', 400)
   }
   if (!shippingFee || !paymentMode) {
      throw new CustomAPIError('No shipping fee & payment Mode Provided', 400)
   }

   let orderItems = [];
   let subtotal = 0;

   for (const item of cartItems) {
      const dbProduct = await Product.findOne({ _id: item.product })
      if (!dbProduct) {
         throw new CustomAPIError(`No product with the id: ${item.product}`, 404)
      }
      const { name, price, image, _id } = dbProduct

      // const quantity = + item.quantity     // To convert string to number
      singleOrderItem = {
         quantity: item.quantity,
         name,
         price,
         image,
         product: _id
      };
      // add item to order
      orderItems = [...orderItems, singleOrderItem];
      // calculate subtotal
      subtotal += item.quantity * price;
   }
   // calculate total
   const total = +shippingFee + subtotal;

   let paymentIntent = '';

   if (paymentMode === 'online') {
      paymentIntent = await fakeStripeAPI({
         amount: total,
         currency: 'inr'
      })
   }

   const order = new Order({
      orderItems,
      total,
      subtotal,
      shippingFee,
      paymentMode,
      clientSecret: paymentIntent.client_secret,
      user: req.user.userId
   })

   const result = await order.save()

   res.status(201).json({ data: result, clientSecret: order.clientSecret })

}


const getAllOrders = async (req, res) => {
   const order = await Order.find({}).populate('user')
   return res.status(200).json({ data: order })
}


const getSingleOrder = async (req, res) => {
   const order = await Order.findById(req.params.id).populate('user')
   if (!order) {
      throw new CustomAPIError(`No order with the id: ${req.params.id}`, 404)
   }
   checkPermission(req.user, order.user._id)

   return res.status(200).json({ data: order })
}


const getUserOrders = async (req, res) => {
   const order = await Order.find({ user: req.params.id }).populate('user')
   if (!order) {
      throw new CustomAPIError(`No order with the id: ${req.params.id}`, 404)
   }
   return res.status(200).json({ data: order, count: order.length })
}

const showMyOrders = async (req, res) => {
   const order = await Order.find({ user: req.user.userId })
   return res.status(200).json({ data: order, count: order.length })
}


const udpdateOrder = async (req, res) => {
   const order = await Order.find({ user: req.params.id })
   if (!order) {
      throw new CustomAPIError(`No order with the id: ${req.params.id}`, 404)
   }

}

module.exports = {
   createOrder,
   getAllOrders,
   getSingleOrder,
   getUserOrders,
   showMyOrders,
   udpdateOrder
}


