import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required: [true,"title is required"],
        trim:true,
        maxlength:[500, "title cannt be longer than 500 characters"]
    },
    body:{
        type:String,
        required:[true, "body is required"],
    }
},{
    timestamps: true
})

export default mongoose.model("Note", noteSchema)