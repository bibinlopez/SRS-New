

const express = require('express')
const router = express.Router()





const {
   getAllUser,
   getSingleUser,
   showCurrentUser,
   updateUser,
   deleteUser
} = require('../controllers/userController')


router.get('/getAllUser', getAllUser)
router.get('/getSingleUser', getSingleUser)
router.get('/showMe', showCurrentUser)
router.patch('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser)



module.exports = router















