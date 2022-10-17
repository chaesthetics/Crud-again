
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [studentId, setStudentId] = useState(0)
const [fname, setFname] = useState("")
const [course, setCourse] = useState("")
const [section, setSection] = useState("")

const [studentList, setStudentList] = useState([])

const addToList = ()=>{
  axios.post('http://localhost:3001/insert', {
    studentId: studentId,
    fname: fname,
    course: course,
    section: section,
  })
}

useEffect(()=>{
  axios.get('http://localhost:3001/read').then((response)=>{
    setStudentList(response.data)
  })

}, [])

const deleteStudent = (id) =>{
  axios.delete(`http://localhost:3001/delete/${id}`)
}


  return (
    
    <div className="App">
      <h3>Add Student</h3>
      <form>
        <label>Student Id</label>
        <input type="number" id="studId" onChange={
          (event)=>{
setStudentId(event.target.value)
          }
        }
        />
        <label>Full name</label>
        <input type="text" id="fullName" onChange={
          (event)=>{
            setFname(event.target.value)
          }
        }/>
        <label>Course</label>
        <input type="text" id="course" onChange={
          (event)=>{
            setCourse(event.target.value)
          }
        }/>
        <label>Section</label>
        <input type="text" id="section" onChange={
          (event)=>{
            setSection(event.target.value)
          }
        }/>
        <input type="submit" onClick={addToList}/>
      </form><br></br>
      <table>
        <th>ID</th>
        <th>FullName</th>
        <th>Course</th>
        <th>Operation</th>
        {studentList.map((value, key)=>{
          return <tr>
            <td>{value.studentId}</td>
            <td>{value.fullName}</td>
            <td>{value.course}</td>
            <td><button class="editButton"><b>EDIT</b></button>  /  <button class="delButton" onClick={()=>deleteStudent(value._id)}><b>DELETE</b></button></td>
          </tr>

      

        })}
      </table>
    </div>
  );
}

export default App;
