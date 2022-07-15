const router = require('express').Router();
const Image = require('../models/image');

router.post('/', async (req, res) => {
   const { Name, Description, URL } = req.body;
   if(!Name || !URL) {
      return res.status(422).send("Please fill all details.");
   }
   try {
      // ck for existing image
      const ckimage = await Image.findOne({URL: req.body.URL});
      if(ckimage) {
         return res.status(422).send("Image already present.");
      }
      const newImage = new Image({Name, Description, URL});
      await newImage.save();
      res.status(200).send("Image Added");
   } catch (error) {
      res.status(404).send(error);
   }
});

module.exports = router;