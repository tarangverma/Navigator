const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// register

router.post("/register" , async (req,res) => {
    try{ 
        // generate new password
        const saltRounds = 10;
        const myPlaintextPassword = req.body.password;
        const hashedPassword = bcrypt.genSalt(saltRounds, async function(err, salt) {
            bcrypt.hash(myPlaintextPassword, salt, async function(err, hash) {
                // Store hash in your password DB.
                        // create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        });
        //const salt = bcrypt.genSalt(10);
        //const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        
        
        //save user and send response
        const user = await newUser.save();
        res.status(200).json(user._id);
    });
    });
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// login

router.post("/login" , async (req , res) => {
    try {
      // find user  
      const user = await User.findOne({username: req.body.username});
      !user && res.status(400).json("Wrong username or password");
      
      // validate password
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password,
      )  
      !validPassword && res.status(400).json("Wrong username or password")

      //send res
      res.status(200).json({_id:user._id , username:user.username})

    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;