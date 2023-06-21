
const { CustomAPIError } = require('../errors/custom-error')

const checkPermission = (validUser, checkUser) => {
   // console.log(validUser);
   // console.log(typeof validUser.userId)

   // console.log(checkUser)
   // console.log(typeof checkUser)

   if (validUser.userId === 'admin') return;
   if (validUser.userId === checkUser.toString()) return;
   throw new CustomAPIError('Unauthorized to access this route', 403)

}


module.exports = checkPermission