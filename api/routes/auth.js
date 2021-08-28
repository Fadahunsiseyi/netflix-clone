
const router = require('express').Router() 
const User = require('../models/User')
const CryptoJS = require("crypto-js");


//REGISTER

router.post('/register', async(req, res) => {
     const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
     })
     console.log(newUser)
     try {
        const user = await newUser.save()
        res.status(201).json(user)
     } catch(err) {
         res.status(500,'One error occurred').json(err)
     }
})

//LOGIN
router.post('/login',(req, res) => {
      try{
          const user = User.findOne({email: req.body.email});
          (!user && res.status(401).json('Wrong password or username'))
      }
      catch (err) {
          res.status(500).json(err);
      }
})




module.exports = router;
