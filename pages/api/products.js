import { products } from "../../data"

export default function handler(req, res) {
  const offset = parseInt(req.query.offset)
  const limit = parseInt(req.query.limit)
  const maxLimit = offset + limit
  let isProductsLeft = true

  if (maxLimit >= products.length) isProductsLeft = false

  const productsSliced = products.slice(offset, maxLimit)

  res.status(200).json({productsSliced, offset: maxLimit, isProductsLeft})
}
