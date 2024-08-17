import React, { useEffect, useState } from 'react'

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/employee')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div style={{padding:"50px",color:"red"}}>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
        </thead>
        <tbody>
          {data.map((d,i)=>(
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App