const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET_KEY
const bcrypt = require("bcryptjs")

app.get('/', (req, res) => {
    let personObject = {
        email: "him@gmail.com",
        password: "him123"
    }
// bcrypt.genSalt(10, ()=>{
//     bcrypt.hash(personObject.password, 10, (err, hashP)=>{
//         return hashP
        
//     })
//     bcrypt.compare(this.password, personObject.password)
//     .then((result)=>{
//         console.log(result);
//         res.send(result)
        
//     })
// })



jwt.sign(personObject,SECRET, {expiresIn:"1h"}, (error, token)=>{
    console.log(token);
    
} )
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});


// userSchema.pre("save", function(next){
//     bcrypt.hash(this.password, 10, (err, hashP)=>{
//         this.password = hashP
//     })
// })