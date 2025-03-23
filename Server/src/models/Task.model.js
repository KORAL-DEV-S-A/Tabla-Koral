import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    asignment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    color: { type: String, default: "#ffffff" },
    comments: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: { type: String },
        created: { type: Date, default: Date.now },
    }],
});

export const Task = mongoose.model('Task', taskSchema);