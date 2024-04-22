const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require('fs');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://s2phamchien:chien196@seafoods.fmc9geo.mongodb.net/electrical");


app.get("/", (req, res) => {
  res.send("App is running")
});

const storage = multer.diskStorage({
  destination: './images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({ storage: storage });

app.use('/images', express.static('images'))
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `/images/${req.file.filename}`
  })
});

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true
  },
  menu_name: {
    type: String,
    required: true
  },
  group: {
    type: String,
  },
  code: {
    type: String,
  },
  label: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  unit: {
    type: String,
  },
  retail_price: {
    type: Number,
  },
  capital_price: {
    type: Number,
  },
});

app.post('/addproduct', async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let lastProduct = products[products.length - 1];
    id = lastProduct.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    menu_name: req.body.menu_name,
    group: req.body.group,
    code: req.body.code,
    label: req.body.label,
    description: req.body.description,
    image: req.body.image,
    unit: req.body.unit,
    retail_price: req.body.retail_price,
    capital_price: req.body.capital_price,
  });
  await product.save();
  res.json({
    success: true,
    body: req.body
  })
});

app.post('/saveproduct', async (req, res) => {
  const { _id, ...updatedData } = req.body;
  await Product.updateOne({ _id: _id }, updatedData);
  res.json({
    success: true,
    body: req.body,
  })
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({
    success: true,
    name: req.body.label
  })
})

app.put("/removeallproduct", async (req, res) => {
  await Product.deleteMany({});
  res.json({
    success: true,
    name: req.body.label
  })
})

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
})

app.get("/product/id", async (req, res) => {
  let product = await Product.findOne({ _id: req.query.id });
  res.send(product);
})

app.get("/product", async (req, res) => {
  let products = await Product.find({});
  const fieldName = req.query.fieldName;
  const name = req.query.name;
  let records = []
  for (let sel of products) {
    if (sel[fieldName] === name) records.push(sel);
  }
  res.send(records);
})

const Users = mongoose.model('Users', {
  username: {
    type: String
  },
  mobile: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

app.post('/signup', async (req, res) => {
  let check = await Users.findOne(
    { mobile: req.body.mobile }
  );
  if (check) {
    return res.status(400).json({ success: false, errors: "Existing user found with same mobile" })
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    mobile: req.body.mobile,
    password: req.body.password,
    cartData: cart
  })

  await user.save();

  const data = {
    user: {
      id: user.id,
    }
  }

  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token })
})

app.post('/login', async (req, res) => {
  let user = await Users.findOne({ mobile: req.body.mobile });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        }
      }
      const token = jwt.sign(data, 'secret_ecom');
      res.json({ success: true, token })
    } else {
      res.json({ success: false, errors: "Wrong password!!!" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Login Id!!!" });
  }
});

app.listen(port, (error) => {
  if (!error) {
    console.log("API Port" + port);

  } else {
    console.log("Error : " + error);
  }
})

const Menu = mongoose.model('Menu', {
  name: {
    type: String
  },
  items: {
    type: Array,
    default: [],
  }
});
//
app.put("/removeallmenu", async (req, res) => {
  await Menu.deleteMany({});
  res.json({
    success: true,
    name: req.body.label
  })
})

app.get("/allmenus", async (req, res) => {
  let menus = await Menu.find({});
  res.send(menus);
})

app.post('/addmenu', async (req, res) => {
  const menu = new Menu({
    name: req.body.name,
    items: req.body.items,
  });
  await menu.save();
  res.json({ success: true, body: menu });
});

function getAllImages(directory) {
  let images = [];

  const files = fs.readdirSync(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isDirectory()) {
      images = images.concat(getAllImages(filePath));
    } else {
      if (['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())) {
        images.push(filePath);
      }
    }
  }

  return images;
}

// API endpoint để lấy tất cả các ảnh
app.get('/images', (req, res) => {
  const parentDirectory = './images';
  const allImages = getAllImages(parentDirectory);
  res.json(allImages);
});



