const express = require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));
dotenv.config();

/* database connection */

mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
}).then(() => console.log("Database connected")
).catch((err) => console.error(err));

/* database connection */

const Image = require("./models/image");
const listRoute = require("./routes/list");
const addRoute = require('./routes/add');
const deleteRoute = require("./routes/deleteImage");
app.use("/show", listRoute);
app.use("/delete", deleteRoute);
app.use("/new", addRoute);

/* list all images */

app.get("/", async(req, res) => {
   try {
      const allImage = await Image.find();
      // console.log(typeof(allImage));
      res.status(200).send(allImage);
   } catch (error) {
      res.status(404).send(error);
   }
});

/* list all images */

app.put('/:id/edit', async (req, res) => {
   const {id, name, desc, url} = req.body;
   try {
      const image = await Image.findById(id);
      if(!image) {
         return res.status(401).send(`Image not found!`);
      }
      const updatedImage = await image.updateOne({$set: {Name: name, Description: desc, URL: url}});
      res.status(200).send("Image Updated Succesfully.");
   } catch (error) {
      res.status(404).send(error);
   }
});

app.get('/:id/edit', async(req, res) => {
   const {imageId} = req.body;
   try {
      const image = await Image.findById(imageId);
      if(!image) {
         return res.status(401).send("Image not found!");
      }
      res.status(200).send(image);
   } catch (error) {
      res.status(404).send(error);
   }
}); 

app.listen(process.env.PORT, (req, res) => {
   console.log(`Server listening on port ${process.env.PORT}`);
});