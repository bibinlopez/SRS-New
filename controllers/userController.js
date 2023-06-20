

const getAllUser = async (req, res) => {
   res.send('get all user')
}

const getSingleUser = async (req, res) => {
   res.send('get single user')
}

const showCurrentUser = async (req, res) => {
   res.send('show current user')
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