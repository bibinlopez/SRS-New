
const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
   name: String,
   email: {
      type: String,
      required: [true, 'Please provide name'],
      validate: {
         validator: validator.isEmail,
         message: 'Please provide valid email'
      },
   },
   password: String,
   role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
   }
}, { timestamps: true })




module.exports = mongoose.model('User', userSchema)

