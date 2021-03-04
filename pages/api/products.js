import { products } from "../../data"

export default function handler(req, res) {

  const offset = parseInt(req.headers.offset)
  const limit = parseInt(req.headers.limit)
  let isProductsLeft = true

  if (offset+limit >= products.length) isProductsLeft = false

  const productsSliced = products.slice(offset, offset+limit)

  res.status(200).json({productsSliced, offset: offset+limit, isProductsLeft})
}
