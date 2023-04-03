import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
    rating: {
        type: Number
    },
    comment: {
        type: String
    },
})

export default reviewSchema;