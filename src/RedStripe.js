
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useQuery } from "react-query";
import { userNameAtom } from "./atoms";
import {useRecoilState} from 'recoil'
import './RedStripe.scss'
//userecoilstate a portal ...zip up through porta; so that sharable .outside of react hiarchy .


export const RedStripe = ()=>{
    //regular state varaibale
    let [email, setEmail]= useState("")
    //upgrade state varaible
    let [userName,setUserName]= useRecoilState(userNameAtom)


    const url = 'https://jsonplaceholder.typicode.com/users/1'//users/1 is caching,, and await is function
const usersQuery= useQuery(`users/1`,async() =>await axios.get(url),{
    //this is quearypart /when deal with api should be  asyn.looking for user 1.data will be stored in user quary.

refetchOnWindowFocus:false,
enabled: false//it won,t automatic run...default is true so automatatic render so we only want onw time.
})



useEffect (() =>{
if (usersQuery.isFetched && userName ===""){
setUserName( usersQuery.data.data.name)
setEmail(usersQuery.data.data.email)

}

}, [userName,
  setEmail,
setUserName,
usersQuery.isFetched,
usersQuery.data?.data.name,
usersQuery.data?.data.email])
// its dependency array

 

//object getting data from fanction async//usersquesry returning object.

// if (usersQuery.isFetched){
//     if (userName ===""){
//     setUserName(usersQuery.data.data.name)
//     }
// }

const onHandlePush =()=>{

    usersQuery.refetch()
}
return (
    <div className="RedStripe">
<button onClick={()=>onHandlePush()}>Get User</button>
Username:{userName} {email}

    </div>
)
}