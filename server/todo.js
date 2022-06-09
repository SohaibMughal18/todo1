require('express-async-errors');
const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const block = require("./routes/blocks");
const todo = require("./routes/todos");
//const ongo  = require("./routes/ongoings");
//const done = require("./routes/dones");

const cors = require('cors')



const app= express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());  

const PORT = process.env.PORT ||5500;





mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log("Database Connected...."))
.catch(err => console.log(err))

app.use('/api/block',block);
app.use('/api/todo',todo);
//app.use('/api/ongo',ongo);
//app.use('/api/done',done);
 


app.listen(PORT, ()=> console.log(`Server Connected on ${PORT}....`));
