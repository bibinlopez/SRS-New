
const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Please provide Name']
   },
   email: {
      type: String,
      required: [true, 'Please provide name'],
      validate: {
         validator: validator.isEmail,
         message: 'Please provide valid email'
      },
   },
   password: {
      type: String,
      required: [true, 'Please Provide Password']
   },
   role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
   }
}, { timestamps: true })



module.exports = mongoose.model('User', userSchema)

