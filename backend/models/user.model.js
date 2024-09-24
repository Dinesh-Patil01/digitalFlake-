import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})


export default mongoose.model("User", userSchema);