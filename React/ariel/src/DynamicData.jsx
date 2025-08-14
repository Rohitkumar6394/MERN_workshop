import { useState } from "react";




function DynamicData() {
    // const [data, setData] = useState("logged in")
    // const handleclick = () => {
        // setData("login")
        // const obj ={id:1, name:"ariel","college":"RBMI"}
        // const [data,setData] = useState("logged in")
     

    let [data,setData] = useState("1")
    console.log(data);
    const decrese = () => {
        setData((prevData) => prevData-1)
        setData((prevData) => prevData-1)
    }
    const increse = () => {
        setData((prevData) => prevData+prevData)
        // setData((prevData) => prevData+2)

    }    
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

            <div>{data}</div><br />
            <button onClick={decrese}> decrese by 1</button>
            <button onClick={increse}>Increse by 1</button>


             

        </>
    );
}

export default DynamicData