const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true, 
        trim: true    
    },
    completed: {
        type: Boolean,
        default: false  
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;