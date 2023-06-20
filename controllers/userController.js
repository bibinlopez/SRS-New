const User = require('../models/userSchema')
const { CustomAPIError } = require('../errors/custom-error')

const getAllUser = async (req, res) => {
   const users = await User.find({ role: 'user' }).select('-password')
   return res.status(200).json({ data: users })
}

const getSingleUser = async (req, res) => {
   const user = await User.findOne({ _id: req.params.id }).select('-password')
   if (!user) {
      throw new CustomAPIError(`No user found in the id: ${req.params.id}`)
   }
   return res.status(200).json({ data: user })
}

const showCurrentUser = async (req, res) => {
   const user = await User.findOne({ _id: req.user.userId }).select('-password')

   return res.status(200).json({ data: user })
}

const updateUser = async (req, res) => {
   res.send('udpate user')
}

const deleteUser = async (req, res) => {
   res.send('delete user')
}


module.exports = {
   getAllUser,
   getSingleUser,
   showCurrentUser,
   updateUser,
   deleteUser
}