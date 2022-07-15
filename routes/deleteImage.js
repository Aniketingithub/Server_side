const router = require('express').Router();
const Image = require('../models/image');

router.delete('/:id', async(req, res) => {
   const {id} = req.body;
   try {
      const image = await Image.findById(id);
      if(!image) {
         return res.status(401).send("Image not found!");
      }
      await Image.deleteOne({_id: id});
      res.status(200).send(`Image with ${id} deleted successfully`);
   } catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router;