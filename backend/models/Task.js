const mongoose = require('mongoose')
const taskSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String ,
    assignedTo: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String ,
        enum: ['To-DO' , 'In Progress', 'Done'],
        default: 'To-Do'
    },
    priority:{
        type: String,
        enum: ['Low' , 'Medium' , 'High'],
        default: 'Medium'
    },
},
{timestamps:true});
module.exports = mongoose.model('Task', taskSchema);