import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    ISBN: String,
    availability: Boolean
})
export default mongoose.model('Book', bookSchema)