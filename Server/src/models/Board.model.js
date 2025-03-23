import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    columns: [{
        title: { type: String, required: true },
        tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
    }],
    team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    created: { type: Date, default: Date.now },
    hierarchy: {
        creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
    chat: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

export const Board = mongoose.model('Board', boardSchema);