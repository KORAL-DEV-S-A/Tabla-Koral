import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    created: { type: Date, default: Date.now },
});

export const Message = mongoose.model('Message', messageSchema);