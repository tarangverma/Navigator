const router = require("express").Router();
const Pin = require("../models/Pin");

// create a pin
 
router.post("/" , async (req,res) => {
    const newPin = new Pin(req.body);
    try {
      const savedPins = await newPin.save();
      res.status(200).json(savedPins);     
    } catch (err) {
        res.status(500).json(err);
    }
});
// get all pins

router.get("/" , async (req,res) => {
    try {
      const pins = await Pin.find();
      res.status(200).json(pins) 
    } catch (err) {
        
    }
})

module.exports = router;