
const mongoose = require('mongoose')

const SingleOrderItems = new mongoose.Schema({
   name: { type: String, required: true },
   Image: { type: String, required: true },
   price: { type: String, required: true },
   quantity: { type: Number, required: true },
   product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
   }
})

const OrderSchema = new mongoose.Schema({
   shippingFee: {
      type: Number,
      required: true,
   },
   subtotal: {
      type: Number,
      required: true,
   },
   total: {
      type: Number,
      required: true,
   },
   orderItems: [SingleOrderItems],
   status: {
      type: String,
      enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
      default: 'pending'
   },
   user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
   },
   clientSecret: {
      type: String
   },
   paymentIntendId: {
      type: String
   },
}, { timestamps: true })



module.exports = mongoose.model('Order', OrderSchema)