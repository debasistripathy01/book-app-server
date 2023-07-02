

require('dotenv').config()
const express = require("express");
const cors = require("cors")
const { connection } = require('./configs/db')
const port = process.env.URL
const app = express();
app.use(express.json());


const { bookController } = require("./controller/book.controller");

app.use(
    cors({
      origin: "*",
      credentials: true,
      optionSuccessStatus: 200,
    })
  );

  app.get("/", (req, res) => {
    res.send("homepage");
  });
  
  app.use("/books", bookController);



  app.listen(4501, async()=>{
    try{
        await connection;
        console.log(`Connected to DB ${port}`)

    }catch(err){
        console.log(err);
        console.log("Error while connecting to DB");
    }
})