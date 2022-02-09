const mongoose = require("mongoose")

const LanguageString = require("../types/LanguageString")
const CurrencyFloat = require("../types/CurrencyFloat")

const mongoosePaginate = require("mongoose-paginate-v2")

const productSchema = new mongoose.Schema({
  name: { type: LanguageString, required: true },
  price: { type: CurrencyFloat, required: true },
  images: { type: [mongoose.Schema.Types.ObjectId], ref: "File" },
  customization: [
    {
      label: { type: LanguageString, required: true },
      options: [{ type: LanguageString, required: true }],
    },
  ],
  description: { type: LanguageString, required: true },
  availability: {
    available: { type: Boolean, required: true },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  visible: { type: Boolean, required: true },
  sale: {
    salePrice: { type: CurrencyFloat, required: true },
    saleActive: { type: Boolean, required: true },
  },
  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, required: true },
      comment: String,
    },
  ],
})
productSchema.plugin(mongoosePaginate)

const Product = mongoose.model("Product", productSchema)

const { getPagination } = require("../utils/serverUtils")
const {
  isAccountType,
  requireAdmin,
} = require("../utils/authentication")

const productResolvers = {
  Product: {
    category: (root) => {
      root.category
      console.log(root)
    },
  },

  Query: {
    productCount: async () => {
      const products = await Product.find({})
      return products.length
    },
    getProducts: async (root, args, context) => {
      const type = isAccountType(context)
      const hideInvisible = type.customer || type.none
      console.log(hideInvisible)

      const products = await Product.paginate(
        {
          ...(args.category && { category: args.category }),
          ...(hideInvisible && { visible: true }),
        },
        getPagination(args.page, args.size)
      )

      return products
    },

    getProductById: async (root, args) => {
      const product = await Product.findById(args.id)
      return product
    },

    searchProducts: async (root, args) => {
      const results = await Product.find({
        name: `/${args.searchWord}/i`,
      })

      return results
    },
  },

  Mutation: {
    createProduct: async (root, args, context) => {
      requireAdmin(context)

      const product = new Product({
        name: args.name,
        price: args.price,
        customization: args.customization,
        description: args.description,
        availability: { available: false },
        images: args.images,
        category: args.category,
        visible: false,
        sale: { salePrice: { EUR: 0 }, saleActive: false },
        ratings: [],
      })

      const result = await product.save()
      return result
    },

    editProduct: async (root, args, context) => {
      requireAdmin(context)

      const product = await Product.findByIdAndUpdate(
        args._id,
        {
          ...(args.name && { name: args.name }),
          ...(args.price && { price: args.price }),
          ...(args.customization && {
            cateogory: args.customization,
          }),
          ...(args.description && { description: args.description }),
          ...(args.availability && {
            availability: args.availability,
          }),
          ...(args.category && { cateogory: args.category }),
          ...(args.visible && { visible: args.visible }),
          ...(args.sale && { sale: args.sale }),
          ...(args.ratings && { ratings: args.ratings }),
        },
        { new: true }
      )

      return product
    },
  },
}

const productTypeDefs = `
  type Product {
    _id: ID!
    name: LanguageString!
    price: CurrencyFloat!
    images: [File!]!
    customization: [Options]!
    description: LanguageString!
    availability: Availability!
    category: Category!
    visible: Boolean!
    sale: Sale
    ratings: [Rating]
  }

  type Paginated {
    docs: [Product]!
    totalDocs: Int!
    offset: Int!
    limit: Int!
    totalPages: Int!
    page: Int!
    pagingCounter: Int!
    hasPrevPage: Boolean!
    hasNextPage: Boolean!
    prevPage: Int!
    nextPage: Int!
  }

  type Availability {
    available: Boolean!
  }

  type Sale {
    salePrice: CurrencyFloat
    saleActive: Boolean!
  }

  type Rating {
    user: ID!
    rating: Int!
    comment: String
  }

  extend type Query {
    productCount: Int!
    getProducts(category: ID, page: Int!, size: Int!): Paginated!
    getProductById(id: ID!): Product
    searchProducts(searchWord: String!): [Product]!
  }

  extend type Mutation {
    createProduct(
      name: LanguageStringInput!
      price: CurrencyFloatInput!
      images: [ID!]!
      description: LanguageStringInput!
      customization: [OptionsInput]!
      category: ID!
    ): Product

    editProduct(
      _id: ID!
      name: LanguageStringInput!
      price: CurrencyFloatInput!
      customization: [OptionsInput]!
      description: LanguageStringInput!
      availability: AvailabilityInput
      category: ID!
      visible: Boolean
      sale: SaleInput
      ratings: RatingInput
    ): Product
  }



  input AvailabilityInput {
    available: Boolean!
  }

  input SaleInput {
    salePrice: Int!
    saleActive: Boolean!
  }

  input RatingInput {
    user: ID!
    rating: Int!
    comment: String
  }
`

module.exports = {
  Product,
  productResolvers,
  productTypeDefs,
}
