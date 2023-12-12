
const express = require("express");
const app = express();
require("dotenv/config");


const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors({ origin: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.json("Hi there");
});

//user authentatication route
const userRoute = require("../routes/auth");
app.use("/api/product/", userRoute);

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });





app.listen(5000, () => console.log("express server listening to 5000"));








// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const PORT = 5000; // or any other port you prefer
// require("dotenv/config");

// mongoose.set("strictQuery", true);

// // Connect to MongoDB
// mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
  

//     // Define a Product schema
//     const productSchema = new mongoose.Schema({
//       productName: String,
//       productID: String,
//       price: String,
//       manufactureDate: Date,
//       productQuality: String,
//     })
//     .catch((error) => {
//         console.error(`Error connecting to MongoDB: ${error}`);
//       });

//     const Product = mongoose.model('product', productSchema);

//     // Middleware to parse JSON
//     app.use(express.json());
//     app.use(cors());

//     // Endpoint to add a product
//     app.post('/api/products', async (req, res) => {
//       try {
//         const { productName, productID, price, manufactureDate, productQuality } = req.body;
//         console.log(req.body);
//         // Create a new product instance
//         const newProduct = new Product({
//           productName,
//           productID,
//           price,
//           manufactureDate,
//           productQuality,
//         });

//         // Save the product to the database
//         console.log(newProduct);
//         await newProduct.save();

//         console.log('Product saved successfully');

//         res.status(201).json({ message: 'Product added successfully', product: newProduct });

//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
//     });

//     // Start the server

//   })
//   .catch((error) => {
//     console.log(`Error connecting to MongoDB: ${error}`);
//   });

//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
