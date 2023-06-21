
const { CustomAPIError } = require('../errors/custom-error')

const checkPermission = (validUser, checkUser) => {
   // console.log(validUser);
   // console.log(typeof validUser.userId)

   // console.log(checkUser)
   // console.log(typeof checkUser)

   if (validUser.role === 'admin') return;
   if (validUser.userId === checkUser.toString()) return;
   throw new CustomAPIError('Unauthorized to access this route', 401)

}


module.exports = checkPermission