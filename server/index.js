const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')

var app = express('')
app.use(cors())
app.use(express.json())

const PORT = 3001

const UserModel = require('./models/Student')

mongoose.connect("mongodb+srv://aurieljames11:admin123@cluster0.gtws5hg.mongodb.net/test",{
    useNewURLParser: true,
})

app.post('/insert', async (req, res)=>{

    const studId = req.body.studentId
    const fname = req.body.fname
    const course = req.body.course
    const section = req.body.section
    const user = new UserModel({studentId: studId,fullName: fname, course: course, section: section})

    try{
        await user.save()
        res.send("inserted")
    }
    catch(err){
        console.log(err)
    }
})

app.get('/read', async (req, res)=>{
    UserModel.find({}, (err, result)=>{
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})


app.listen(PORT, ()=>{
    console.log(`Server is running in port ${PORT}`)
})