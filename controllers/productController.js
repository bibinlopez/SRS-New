
const Product = require('../models/productSchema')
const { CustomAPIError } = require('../errors/custom-error')

const createProduct = async (req, res) => {
   req.body.user = req.user.userId;
   const product = new Product(req.body)
   const result = await product.save()
   return res.status(201).json({ data: result })
}

const getAllProduct = async (req, res) => {
   const product = await Product.find({})
   return res.status(200).json({ data: product, count: product.length })
}


const getSingleProduct = async (req, res) => {
   const product = await Product.findById(req.params.id)
   if (!product) {
      throw new CustomAPIError(`No product with the id: ${req.params.id}`, 404)
   }
   return res.status(200).json({ data: product })
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