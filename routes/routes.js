const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const router = express.Router();

//importing models
const User = require('../models/user');
const Message = require('../models/message');

//login system

router.post('/register',(req,res,next)=>{
    const hashedPassword = req.body.password;
    User.find({"Email":req.body.email},(err,res)=>{
        if(res==undefined || res.length == 0){
            bcrypt.hash(hashedPassword, saltRounds, function(err, hash) {
                let newUser = new User({
                    Email : req.body.email,
                    Password : hash,
                })
                newUser.save(function (err) {
                    if (err) return handleError(err);
                    // saved!
                  });
                });
        }
    })
});

router.post('/login',(req,res,next)=>{
    const plainTextPassword= req.body.password;
    User.findOne({"Email": req.body.email},function(err,test1){if( test1==undefined || test1.length == 0){console.log("No users found");}else{
        const hashedPassword = test1.Password;
        const emaiL = req.body.email; 
        bcrypt.compare(plainTextPassword, hashedPassword, function(err, test) {
            if(test){
                const token = jwt.sign({
                    Email: emaiL
                },"the misty mountains core",
                {expiresIn:"1h"}
            );
            jwtArray.push(token);
            console.log("logged in");
            }
      });
    }})
})
const jwtArray=[];

const checkAuth = (req,res,next)=>{
    try{
    const decoded = jwt.verify(jwtArray[0], "the misty mountains core");
    const userData = decoded;
    decodedUserData.push(userData);
    next();
    }catch(error){
        console.log(error);
    }
}

const decodedUserData = [];

//protected pages

router.get('/dashboard',checkAuth,(req,res,next)=>{
    User.find({"Email":decodedUserData[0].Email},(err,data)=>{
        if(err){
            throw err;
        }else{
            res.json(data);
            console.log(data);
        }
    })
})

//chat system

router.post('/chat',(req,res,next)=>{
    let newmessage = new Message ({
        message: req.body.message,
        sender: decodedUserData[0].Email,
        accessibleBy: decodedUserData[0].Email
    });
    newmessage.save(function (err) {
        if (err){console.log(err)};
        // saved!
      });
});

router.get('/chat',(req,res,next)=>{
    Message.find({"accessibleBy":decodedUserData[0].Email},(err,data)=>{
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    })
})

module.exports = router;