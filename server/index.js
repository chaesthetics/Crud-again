const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

var app = express('')
app.use(cors())
app.use(express.json())
const PORT = 3001

const studentModel = require('./models/Student')
const student = require('./models/Student')
mongoose.connect('mongodb+srv://aurieljames11:admin123@cluster0.gtws5hg.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})



app.post('/insert', async (req, res)=>{
    const studentId = req.body.studentId
    const fname = req.body.fname
    const course = req.body.course
    const section = req.body.section


   const user = new studentModel({studentId: studentId, fullName: fname, course: course, section: section})

   try{
    await
    user.save()
    res.send('inserted')
   }
   catch(err){
    console.log(err)
   }
})

app.get('/read', async (req, res)=>{
    studentModel.find({}, (err, result)=>{
        if(err){
            console.log(err)
        }
    res.send(result)
    })
})

app.delete('/delete/:id', async (req, res)=>{
    const id = req.params.id;

    await studentModel.findByIdAndRemove(id).exec();
    res.send('deleted');
})

app.listen(PORT, ()=>{
    console.log(`Server is running in port ${PORT}`)
})