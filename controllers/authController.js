

const User = require('../models/userSchema')
const { StatusCodes } = require('http-status-codes')
const { CustomAPIError } = require('../errors/custom-error')

const register = async (req, res) => {
   const { email } = req.body
   console.log(email);
   const user1 = await User.findOne({ email })
   if (user1) {
      throw new CustomAPIError('Provided email already exist', 404)
   }
   const user = new User(req.body);
   const result = await user.save()
   res.status(StatusCodes.CREATED).json({ msg: 'User Created!!!', data: result })
}


const login = async (req, res) => {
   res.send('login route');
}


const logout = async (req, res) => {
   res.send('logout route');
}


module.exports = {
   register, login,
   logout
}

