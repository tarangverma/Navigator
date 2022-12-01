const router = require("express").Router();
const Pin = require("../models/Pin");

// create a pin
 
router.post("/" , async (req,res) => {
    const newPin = new Pin(req.body);
    try {
      const savedPins = await newPin.save();
      res.status(200).json(savedPins);     
    } catch (err) {
        console.log(err);
    }
})


// get all pins

module.exports = router;