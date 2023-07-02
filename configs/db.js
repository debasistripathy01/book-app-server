require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.URL
const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false);

const connection = mongoose.connect(PORT);
module.exports={connection}