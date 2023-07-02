
const express = require('express');

const { BookModel } = require("../models/book.model")
const bookController = express.Router();



// Create Books 
bookController.post("/create", async (req, res) => {

    try {
        const books = req.body;

        if (!Array.isArray(books)) {
            return res.status(400).json({ error: "Invalid data format. Array of books expected" });
        }

        const createdBooks = await BookModel.create(books);
        return res.status(200).send({ message: "Item added", book: createdBooks });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }

});

// Get ALl books
bookController.get("/", async (req, res) => {
    try {
        const items = await BookModel.find();
        return res.status(200).json(items);

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal server error" });
    }

})

// GET  specific Book using ID

bookController.get("/:id", async (req, res) => {
    const { id } = req.params;

    const items = await BookModel.find({ id: id });

    res.status(200).send(items);
});

// Edit  specific Book using ID
bookController.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, subtitle, author, published, publisher, pages, description } = req.body;

        const updatedBook = await BookModel.findByIdAndUpdate(
            id,
            {
                title,
                subtitle,
                author,
                published,
                publisher,
                pages,
                description
            },
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }

        return res.status(200).json(updatedBook);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = { bookController }




