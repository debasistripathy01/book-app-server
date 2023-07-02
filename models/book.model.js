const mongoose=require("mongoose");
const BookSchema=mongoose.Schema({
    isbn:String,
    title:String,
    subtitle: String,
    author: String,
    published: String,
    publisher: String,
    pages: Number,
    description: String,
    website: String,
},{
    versionKey: false
});
const BookModel=mongoose.model("books",BookSchema);
module.exports={ BookModel };

