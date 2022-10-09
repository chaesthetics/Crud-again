import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios"



function App() {
  
  const [studentId, setID] = useState(0)
  const [fname, setFname] = useState("")
  const [course, setCourse] = useState("")
  const [section, setSection] = useState("")

  const [studentlist, setStudentList] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3001/read').then((response)=>{
      setStudentList(response.data)
    })
  }, [])

  const addToList = ()=>{
    Axios.post('http://localhost:3001/insert', {
      studentId: studentId,
      fname: fname, 
      course: course, 
      section: section
    })
  }
  
  
  return (
    
    <div className="App">
    <h2>Crud operation using MERN stack</h2>
    <label>LN number: </label>
    <input type="number"
    onChange={
      (event)=>{
        setID(event.target.value)
      }
    }
    ></input>
    <label>Fullname: </label>
    <input type="text"
    onChange={
      (event)=>{
        setFname(event.target.value)
      }
    }
    ></input>
    <label>Course: </label>
    <input type="text"
    onChange={
      (event)=>{
        setCourse(event.target.value)
      }
    }
    ></input>
    <label>Section: </label>
    <input type="text"
    onChange={
      (event)=>{
        setSection(event.target.value)
      }
    }
    ></input>
    <button onClick={addToList}>Add to List</button><br/>
    <table>
      <th>LN number</th>
      <th>Fullname</th>
      <th>Course</th>
      <th>Action</th>
    {studentlist.map((value, key)=>{
      return <tr>
        <td>{value.studentId}</td>
        <td>{value.fullName}</td>
        <td>{value.course}</td>
        <td><button class="editButton">Edit</button>/<button class="deleteButton">Delete</button></td>
      </tr>
    })}
    </table>
    
    </div>
  );
}

export default App;
