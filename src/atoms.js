import {atom} from 'recoil'



export const userNameAtom = atom({
//assign a vraible to adom ,an atom represent username ,
//we need to export becyuse transfering one component to other.
    key:'atomUserName',
    default:""
})




///each atom represent  state variable
//acess by a method whhcih provide object 
//you can mutate.
//key -how u acess it  
//blue stripe redstripe siblings.
//peaceable writable state ,write and read can possible 