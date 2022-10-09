const mongoose = require('mongoose')

const StudentSchema =  new mongoose.Schema({
    studentId:{
        type: Number,
        required: true,
    },
    fullName:{
        type: String,
        required: true,
    },
    course:{
        type: String,
        required: true,
    },
    section:{
        type: String,
        required: true,
    },
})

const Student = mongoose.model("student", StudentSchema)
module.exports = Student