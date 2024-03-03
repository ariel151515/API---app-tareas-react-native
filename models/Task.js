import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        unique: false,
    },
    description: {
        type: String,
        unique: true,
    },
    
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});

export default model('Task', taskSchema);
