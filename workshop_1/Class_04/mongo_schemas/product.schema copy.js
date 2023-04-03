import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "review"
        }
    ]
})

export default productSchema;