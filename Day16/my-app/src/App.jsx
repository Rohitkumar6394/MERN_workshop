import React, { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [form,setForm]=useState({name:"",location:""})
  // const [p_data,setP_data]=useState()
  const [daata,setDaata]=useState()
  const [editId,setEditId]=useState(null)
  let api="http://localhost:3000"
  const getData=()=>{
    return axios.get(`${api}/${1}`)
  }
  const post_data=(data)=>{''
    return axios.post(`${api},data`)
  }
  const edit_data=(id,data)=>{
    
    return axios.put(`${api}/${id},data`)
  }
  const post=async(d)=>{
    let data= await post_data(d)

  }
  const get=async()=>{
     let data=await getData()
     setDaata(data)
     console.log(data);
  }

  useEffect(()=>{
    get()
  },[])
 const input_change=(e)=>{
  console.log(e.target);
    setForm({...form,[e.target.name]:e.target.value})
 }

 const submit=async(e)=>{
    e.preventDefault()
    if(!editId){
      post(form)
      setForm({name:"",location:""})
    }
    else{
     
        await edit_data(editId,form)
        setEditId(null)
    }
 }

 const update=()=>{
  // alert("hi")
  setEditId(1)
 let n=daata.data
  setForm({...form,...n})
  
 }
  return (
    <div>
      <form onSubmit={submit}>
        <input 
        value={form.name}
        name="name"
        onChange={input_change}/>
        <input
        value={form.location}
        name="location"
        onChange={input_change}/>
        <input type='submit'/>
      </form>
      <br/>
      <button onClick={update}>Update data</button>
    </div>
  )
}

export default App