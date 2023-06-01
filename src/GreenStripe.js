import React from "react";
import './'
const PERSON_KEY ='personkey'
export const GreenStripe =() =>{

const onHandleWrite =()=>{

    const person ={

        firstName :"Alice",
        age:11
    }

localStorage.setItem(PERSON_KEY,JSON.stringify(person))
    const onHandleReid =()=>{
const p = JSON.parse(localStorage.getItem(PERSON_KEY))
console.log (p)
    
}


 return (
<div className="GreenStripe">

    <button onClick={() =>onHandleWrite()}> Write</button>
    <button onClick={() =>onHandleReid()}> Read</button>

</div>


    )
 }