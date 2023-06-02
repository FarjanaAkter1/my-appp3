import React from 'react'
import './BlueStripe.scss'
import { userNameAtom } from './atoms'
import {useRecoilValue} from 'recoil'




export const BlueStrips = () => {
  //get the user name 
    const userName =useRecoilValue(userNameAtom)
    //passed in atom 
  return (
    <div className='BlueStripe'>
        Username:{userName}
    
</div>
  )
}
//use recoilvalue:componemt will be notified when there is changed ..this component is subscribed to other component.this hooks work read and write only /
//use reoil like use state ..


///we are not passing through tree hiearchy.
//it is one way tunnel
//