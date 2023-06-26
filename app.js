
const dotenv=require("dotenv");
const mongoose=require('mongoose');
const express =require('express');
const app=express();

dotenv.config({path:'./config.env'});

require('./DB/conn');
// const User=require('./model/userSchema');
app.use(express.json());

app.use(require('./Router/auth'));
const PORT=process.env.PORT ;







// app.get('/', (req,res)=>{
// res.send(`Hello world form the server app js`);
// });
// app.get('/about', (req,res)=>{
//     res.send(`Hello about world form the server`);
//     });

// app.get('/contact', (req,res)=>{
//         res.send(`Hello contact world form the server`);
//         });

app.get('/signin', (req,res)=>{
            res.send(`Hello  signin world form the server`);
            });

app.get('/signup', (req,res)=>{
                res.send(`Hello  signup world form the server`);
                });



app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})