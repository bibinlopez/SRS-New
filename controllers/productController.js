
const Product = require('../models/productSchema')
const CustomAPIError = require('../errors/custom-error')

const createProduct = async (req, res) => {
   req.body.user = req.user.userId;
   const product = new Product(req.body)
   const result = await product.save()
   return res.status(201).json({ result })
}

const getAllProduct = async (req, res) => {
   res.send('get all  product')
}


const getSingleProduct = async (req, res) => {
   res.send('get single product')
}

const updateProduct = async (req, res) => {
   res.send('update product')
}

const deleteProduct = async (req, res) => {
   res.send('delete product')
}

const uploadImage = async (req, res) => {
   res.send('upload image')
}



module.exports = {
   createProduct,
   getAllProduct,
   getSingleProduct,
   updateProduct,
   deleteProduct,
   uploadImage
}