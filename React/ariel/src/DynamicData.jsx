import { useState } from "react";




function DynamicData() {
    let [data, setData] = useState({"email":"","name":""})
    const {email,name}=data
    const emailChange = (e) => {
        setData(...data, ["email"]m: e.target.value)
    }

    // let [data, setData] = useState(".....")
    // const [data, setData] = useState("logged in")
    // const handleclick = () => {
        // setData("login")
        // const obj ={id:1, name:"ariel","college":"RBMI"}
        // const [data,setData] = useState("logged in")
     

    // let [data,setData] = useState("0")
    // let [data, setData] = useState("normal")
    // const[dec,setDec] = useState(0)
    // const[inc,setInc] = useState(0)
    // console.log(data);
    // const decrese = () => {
        // setDec((prevData) => prevData-1)
        // setData((prevData) => prevData-2)h
        // setData((prevData) => prevData-1)
        // setData(dec+1)
        // setData(`Increse ${dec}`)
        
            
    // }
    // const increse = () => {/
        // setInc(inc+1)
        // setData(`Increse by ${inc}`)
        // setData((prevData) => prevData+prevData)
        // setData((prevData) => prevData+2)

    // }    
    return (
        <>
        

            {/* <h1>{data}</h1>

            <button onClick={handleclick}>logout</button>
            <button onClick={()=>{
                setData("Your are loggin in ")
            // }}>logout</button> */}

            {/* <ul>
                {Object.map((element) => (
                    <li key = { element.id}>{element} </li>
                
                ))}
            </ul> */}

            {/* <div>{data}</div><br /> */}
            {/* <button onClick={decrese}> decrese by 1</button> */}
            {/* <button onClick={increse}>Increse by 1</button> */}

            {/* <div>{data}</div><br /> */}
            {/* <input  */}
            {/* // value={data} */}
            {/* onChange={(e/) => setData(e.target.value)}> */}
            {/* </input> */}

            <form>
                <input
                value={email}
                onChange={(e) => setData({...data, email: e.target.value})}>    </input>
            </form>


             

        </>
    )
}


export default DynamicData