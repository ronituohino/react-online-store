db.createUser({
  user: "the_username",
  pwd: "the_password",
  roles: [
    {
      role: "dbOwner",
      db: "store",
    },
  ],
})

db.createCollection("accounts")
db.createCollection("categories")
db.createCollection("files")
db.createCollection("products")

db.accounts.insert({
  username: "roni",
  email: "roni@gmail.com",
  password:
    "$2b$10$J/ICCEE1WkcBwRwZHXtXhuNMIl2duVjxPOgiv8m2eHwUqsuZ/jd4i",
  accountType: "Admin",
  verified: false,
})

db.categories.insert({
  _id: "61f519593c71ee71cd5270fd",
  name: "pictures",
  label: "Pictures",
  icon: "image",
})

db.files.insert({
  _id: "61f51b243c71ee71cd527114",
  filename: "test.png",
  mimetype: "image/png",
  encoding: "7bit",
  location: "./public/files/images/61f51b243c71ee71cd527114-test.png",
})

db.products.insert({
  name: {
    en: "Flower",
    fi: "Kukka",
  },
  price: {
    EUR: 4,
  },
  images: ["61f51b243c71ee71cd527114"],
  customization: [
    {
      label: {
        en: "Size",
        fi: "Koko",
      },
      options: [
        {
          en: "Small",
          fi: "Pieni",
        },
        {
          en: "Medium",
          fi: "Keskikokoinen",
        },
        {
          en: "Big",
          fi: "Iso",
        },
      ],
    },
  ],
  description: {
    en: "A beautiful picture of a white flower",
    fi: "Kaunis valkoinen kukka",
  },
  availability: {
    available: false,
  },
  category: "61f519593c71ee71cd5270fd",
  visible: true,
  sale: {
    salePrice: {
      EUR: 0,
    },
    saleActive: false,
  },
  ratings: [],
})
