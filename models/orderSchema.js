
const mongoose = require('mongoose')

const SingleOrderItems = new mongoose.Schema({
   name: { type: String, required: true },
   image: { type: String, required: true },
   price: { type: Number, required: true },
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
      enum: ['pending', 'failed', 'paid', 'delivered', 'canceled', 'cod'],
      default: 'pending'
   },
   paymentMode: {
      type: String,
      enum: ['cashOnDelivery', 'online'],
      default: 'cashOnDelivery'
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


OrderSchema.pre('save', async function () {
   if (this.paymentMode === 'cashOnDelivery') {
      this.status = 'cod';
   }
})

module.exports = mongoose.model('Order', OrderSchema)