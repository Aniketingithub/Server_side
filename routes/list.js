const router = require('express').Router();
const Image = require("../models/image");

router.get('/:id', async (req, res) => {
   const imageId = req.params.id;
   try {
      const image = await Image.findById(imageId);
      if(!image) {
         return res.status(404).send("Image not found!");
      }
      const obj = {
         "Name of Image" : image.Name,
         "Description" : image.Description,
         "URL of Image" : image.URL,
      };
      res.status(200).send(obj);
   } catch (error) {
      res.status(404).send(error);
   }
});

module.exports = router;
