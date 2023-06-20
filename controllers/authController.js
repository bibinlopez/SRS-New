

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

   const isFirstAccount = (await User.countDocuments({})) === 0
   const role = isFirstAccount ? 'admin' : 'user';
   req.body.role = role

   const user = new User(req.body);
   const result = await user.save()
   res.status(StatusCodes.CREATED).json({ msg: 'User Created!!!', data: result })
}


const login = async (req, res) => {
   const { email, password } = req.body;
   if (!email, !password) {
      throw new CustomAPIError('Please provide email and password', 400)
   }
   const user = await User.findOne({ email })
   if (!user) {
      throw new CustomAPIError('Account does not exist email address', 404)
   }

   const isMatch = await user.comparePassword(password)
   if (!isMatch) {
      throw new CustomAPIError('incorrect password', 401)
   }

   const token = user.createJWT()

   res.status(StatusCodes.CREATED).json({ msg: 'User Created!!!', data: user, token })

}


const logout = async (req, res) => {
   res.send('logout route');
}


module.exports = {
   register, login,
   logout
}

