import React from 'react'
import {useContext} from "react"
import { StudentContext } from '../context/StudentContext'


function StudentItem({student}) {
    const{ name, id, email, color, age } = student
    const deger = useContext(StudentContext)
  return ( 
    <div style={{backgroundColor :color, paddingBottom:"2rem", paddingTop:"1rem", marginTop:"1rem" }}>
        <h3>{name}</h3>
        <p>Email:{email}</p>
        <p>Age:{age}</p>
        
         Color: <input type="text" value={color} onChange={(e) => deger.changeColor(id, e.target.value)}/>
          

        
    </div>
    
  )
}

export default StudentItem