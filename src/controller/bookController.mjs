import bookModel from "../models/bookModel.mjs";

const createStudent = async (req, res) => {
    const data = req.body;
    const createdBook = await bookModel.create(data);
    return res.status(201).send({ status: true, messages: createdBook });
}
export{createStudent}