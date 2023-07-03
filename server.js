

require('dotenv').config()
const express = require("express");
const cors = require("cors")
const { connection } = require('./configs/db')
const port = process.env.URL || 4501;
const PORT = 4501

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



  app.listen(PORT, async()=>{
    try{
        await connection;
        console.log(`Connected to DB ${port}`)

    }catch(err){
        console.log(err);
        console.log("Error while connecting to DB");
    }
})