
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
   name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxlength: [100, 'Nmae can not be more than 100 characters']
   },
   price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0
   },
   description: {
      type: String,
      required: [true, 'Please provide product name'],
      maxlength: [1000, 'Nmae can not be more than 100 characters']
   },

   image: {
      type: String,
      default: 'https://res.cloudinary.com/dzoy3xghm/image/upload/v1687270612/default-product-image_ysgdll.png'
   },
   category: {
      type: String,
      required: [true, 'Please provide product category'],
      enum: ['office', 'kitchen', 'bedroom'],
   },
   company: {
      type: String,
      required: [true, 'Please provide company'],
      enum: {
         values: ['ikea', 'liddy', 'marcos'],
         massage: '{VALUE} is not supported'
      }
   },
   colors: {
      type: [String],
      default: ['#222'],
      required: true
   },
   featured: {
      type: Boolean,
      default: false,
   },
   freeShipping: {
      type: Boolean,
      default: false
   },
   inventory: {
      type: Number,
      required: true,
      default: 15,
   },
   averageRating: {
      type: Number,
      default: 0
   },
   user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true
   }
}, { timestamps: true })




module.exports = mongoose.model('Product', ProductSchema)